import {
  Web3Provider,
  ProxyMessageProvider,
  WalletRequestHandler,
  ProxyMessageChannel,
  ProxyMessageHandler,
  prefixEIP191Message
} from '@0xsequence/provider'
import { ethers } from 'ethers'
import { test, assert } from '../../utils/assert'
import { LocalRelayer } from '@0xsequence/relayer'
import { configureLogger, encodeMessageDigest } from '@0xsequence/utils'
import { testAccounts, getEOAWallet } from '../testutils'
import { Account } from '@0xsequence/account'
import * as utils from '@0xsequence/tests'
import { Orchestrator } from '@0xsequence/signhub'
import { trackers } from '@0xsequence/sessions'
import { OnChainReader } from '@0xsequence/core/src/commons/reader'

configureLogger({ logLevel: 'DEBUG', silence: false })

export const tests = async () => {
  // ProxyMessageChannel object is to be instantiated by the app coordinating
  // the channel, ie. such as the mobile application itself.
  //
  // `ch.app` (port) will be injected into the app, and `ch.wallet` (port) will be injected into the wallet.
  //
  // Sending messages to the app port will go through channel and get received by the wallet.
  // Sending messages to the wallet port will go through channel and get received by the app.
  const ch = new ProxyMessageChannel()

  ch.app.on('open', openInfo => {
    console.log('app, wallet opened.', openInfo)
  })
  ch.app.on('close', () => {
    console.log('app, wallet closed.')
  })
  ch.app.on('connect', () => {
    console.log('app, wallet connected.')
  })
  ch.app.on('disconnect', () => {
    console.log('app, wallet disconnected.')
  })
  // ch.wallet.on('open', () => {
  //   console.log('wallet, wallet opened.')
  // })
  // ch.wallet.on('close', () => {
  //   console.log('wallet, wallet closed.')
  // })
  // ch.wallet.on('connect', () => {
  //   console.log('wallet, wallet connected.')
  // })
  // ch.wallet.on('disconnect', () => {
  //   console.log('wallet, wallet disconnected.')
  // })

  //
  // Wallet Handler
  //

  // owner account address: 0x4e37E14f5d5AAC4DF1151C6E8DF78B7541680853
  const owner = getEOAWallet(testAccounts[0].privateKey)

  // relayer account is same as owner here
  const relayer = new LocalRelayer(owner)
  const rpcProvider = new ethers.providers.JsonRpcProvider('http://localhost:8545')
  const contexts = await utils.context.deploySequenceContexts(rpcProvider.getSigner())

  const networks = [
    {
      name: 'hardhat',
      chainId: 31337,
      rpcUrl: rpcProvider.connection.url,
      provider: rpcProvider,
      relayer: relayer,
      isDefaultChain: true
      // isAuthChain: true
    }
  ]

  // wallet account address: 0x91A858FbBa42E7EE200b4303b1A8B2F0BD139663 based on the chainId
  const account = await Account.new({
    config: {
      threshold: 1,
      checkpoint: 1674142220,
      signers: [{
        address: owner.address,
        weight: 1
      }]
    },
    networks,
    contexts,
    orchestrator: new Orchestrator([owner]),
    tracker: new trackers.local.LocalConfigTracker(rpcProvider)
  })

  // the rpc signer via the wallet
  const walletRequestHandler = new WalletRequestHandler(undefined, null, null, networks)

  // fake/force an async wallet initialization for the wallet-request handler. This is the behaviour
  // of the wallet-webapp, so lets ensure the mock wallet does the same thing too.
  setTimeout(() => {
    walletRequestHandler.signIn(account)
  }, 1000)

  // register wallet message handler, in this case using the ProxyMessage transport.
  const proxyHandler = new ProxyMessageHandler(walletRequestHandler, ch.wallet)
  proxyHandler.register()

  //
  // App Provider
  //
  const walletProvider = new ProxyMessageProvider(ch.app)
  walletProvider.register()

  walletProvider.openWallet()
  await walletProvider.waitUntilOpened()

  // setup web3 provider
  const provider = new Web3Provider(walletProvider, 31337)
  const signer = provider.getSigner()
  const address = await signer.getAddress()

  await test('verifying getAddress result', async () => {
    assert.equal(address, ethers.utils.getAddress('0x91A858FbBa42E7EE200b4303b1A8B2F0BD139663'), 'wallet address')
  })

  await test('sending a json-rpc request', async () => {
    await walletProvider.sendAsync({ jsonrpc: '2.0', id: 88, method: 'eth_accounts', params: [] }, (err, resp) => {
      assert.true(!err, 'error is empty')
      assert.true(!!resp, 'response successful')
      assert.true(resp!.result == address, 'response address check')
    })
  })

  await test('get chain id', async () => {
    const network = await provider.getNetwork()
    assert.equal(network.chainId, 31337, 'chain id match')

    const netVersion = await signer.provider.send('net_version', [])
    assert.equal(netVersion, '31337', 'net_version check')

    const chainId = await signer.provider.send('eth_chainId', [])
    assert.equal(chainId, '0x7a69', 'eth_chainId check')
  })

  await test('sign a message and validate/recover', async () => {
    const message = ethers.utils.toUtf8Bytes('hihi')

    //
    // Sign the message
    //
    const sig = await signer.signMessage(message)
    assert.equal(
      sig,
      '0x000163c9620c0001045ea593a25d0053816f2cfb0239eb04c30cc08fd26193927bf6cf68f7f31a8239ecbcbd1365f18a6bf2bf3b13d544c91d85e35503696a28fcb96a4078a7556a1c02',
      'signature match'
    )

    const chainId = await signer.getChainId()
    const reader = new OnChainReader(rpcProvider)

    //
    // Verify the message signature
    //
    await account.doBootstrap(31337)
    const messageDigest = encodeMessageDigest(prefixEIP191Message(message))
    const isValid = await reader.isValidSignature(address, messageDigest, sig)
    assert.true(isValid, 'signature is valid - 1')
  })

  walletProvider.closeWallet()
}
