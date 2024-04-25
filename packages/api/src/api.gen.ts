/* eslint-disable */
// sequence-api v0.4.0 bf0b49647d9c2d313cd614a7e6a04e5acf5c4134
// --
// Code generated by webrpc-gen@v0.18.1 with typescript@v0.10.0 generator. DO NOT EDIT.
//
// webrpc-gen -schema=api.ridl -target=typescript@v0.10.0 -client -out=./clients/api.gen.ts

// WebRPC description and code-gen version
export const WebRPCVersion = 'v1'

// Schema version of your RIDL schema
export const WebRPCSchemaVersion = 'v0.4.0'

// Schema hash generated from your RIDL schema
export const WebRPCSchemaHash = 'bf0b49647d9c2d313cd614a7e6a04e5acf5c4134'

//
// Types
//

export enum SortOrder {
  DESC = 'DESC',
  ASC = 'ASC'
}

export interface Version {
  webrpcVersion: string
  schemaVersion: string
  schemaHash: string
  appVersion: string
}

export interface RuntimeStatus {
  healthOK: boolean
  startTime: string
  uptime: number
  ver: string
  branch: string
  commitHash: string
  checks: RuntimeChecks
  numTxnsRelayed: { [key: string]: NumTxnsRelayed }
}

export interface NumTxnsRelayed {
  chainID: number
  prev: number
  current: number
  period: number
}

export interface RuntimeChecks {}

export interface SequenceContext {
  factory: string
  mainModule: string
  mainModuleUpgradable: string
  guestModule: string
  utils: string
}

export interface User {
  address: string
  username: string

  avatar: string
  bio: string
  location: string
  locale: string
  backup?: boolean
  backupConfirmed?: boolean
  maxInvites?: number
  updatedAt?: string
  createdAt?: string
}

export interface WalletBackup {
  accountAddress: string
  secretHash: string
  encryptedWallet: string
  userConfirmed: boolean
  updatedAt?: string
  createdAt?: string
}

export interface Friend {
  id: number
  userAddress: string
  friendAddress: string
  nickname: string
  user?: User
  createdAt?: string
}

export interface InviteCode {
  usesLeft: number
  ownerAccount: string
  email?: string
  url: string
  createdAt?: string
  expiresAt?: string
}

export interface InviteCodeAccount {
  claimedByUserAddress: string
  claimedAt?: string
}

export interface InviteInfo {
  expiryInHours: number
  max: number
  invites: Array<InviteCode>
}

export interface ContractCall {
  signature: string
  function: string
  args: Array<TupleComponent>
}

export interface TupleComponent {
  name?: string
  type: string
  value: any
}

export interface Transaction {
  delegateCall: boolean
  revertOnError: boolean
  gasLimit: string
  target: string
  value: string
  data: string
  call?: ContractCall
}

export interface UserStorage {
  userAddress: string
  key: string
  value: any
}

export interface Token {
  chainId: number
  contractAddress: string
  tokenId?: string
}

export interface Price {
  value: number
  currency: string
}

export interface TokenPrice {
  token: Token
  price?: Price
  price24hChange?: Price
  floorPrice: Price
  buyPrice: Price
  sellPrice: Price
  updatedAt: string
}

export interface ExchangeRate {
  name: string
  symbol: string
  value: number
  vsCurrency: string
  currencyType: string
}

export interface LinkedWallet {
  id: number
  walletAddress: string
  linkedWalletAddress: string
  createdAt?: string
}

export interface Page {
  pageSize?: number
  page?: number
  totalRecords?: number
  column?: string
  before?: any
  after?: any
  sort?: Array<SortBy>
  more?: boolean
}

export interface SortBy {
  column: string
  order: SortOrder
}

export interface NftCheckoutParams {
  name: string
  imageUrl: string
  network: string
  recipientAddress: string
  blockchainNftId: string
  contractAddress: string
  quantity: number
  decimals?: number
}

export interface NftCheckout {
  token: string
  expiresAt: string
  orderId: string
}

export interface API {
  ping(headers?: object): Promise<PingReturn>
  version(headers?: object): Promise<VersionReturn>
  runtimeStatus(headers?: object): Promise<RuntimeStatusReturn>
  clock(headers?: object): Promise<ClockReturn>
  getSequenceContext(headers?: object): Promise<GetSequenceContextReturn>
  getAuthToken(args: GetAuthTokenArgs, headers?: object): Promise<GetAuthTokenReturn>
  getAuthToken2(args: GetAuthToken2Args, headers?: object): Promise<GetAuthToken2Return>
  sendPasswordlessLink(args: SendPasswordlessLinkArgs, headers?: object): Promise<SendPasswordlessLinkReturn>
  friendList(args: FriendListArgs, headers?: object): Promise<FriendListReturn>
  getFriendByAddress(args: GetFriendByAddressArgs, headers?: object): Promise<GetFriendByAddressReturn>
  searchFriends(args: SearchFriendsArgs, headers?: object): Promise<SearchFriendsReturn>
  addFriend(args: AddFriendArgs, headers?: object): Promise<AddFriendReturn>
  updateFriendNickname(args: UpdateFriendNicknameArgs, headers?: object): Promise<UpdateFriendNicknameReturn>
  removeFriend(args: RemoveFriendArgs, headers?: object): Promise<RemoveFriendReturn>
  contractCall(args: ContractCallArgs, headers?: object): Promise<ContractCallReturn>
  decodeContractCall(args: DecodeContractCallArgs, headers?: object): Promise<DecodeContractCallReturn>
  lookupContractCallSelectors(args: LookupContractCallSelectorsArgs, headers?: object): Promise<LookupContractCallSelectorsReturn>
  userStorageFetch(args: UserStorageFetchArgs, headers?: object): Promise<UserStorageFetchReturn>
  userStorageSave(args: UserStorageSaveArgs, headers?: object): Promise<UserStorageSaveReturn>
  userStorageDelete(args: UserStorageDeleteArgs, headers?: object): Promise<UserStorageDeleteReturn>
  userStorageFetchAll(args: UserStorageFetchAllArgs, headers?: object): Promise<UserStorageFetchAllReturn>
  getMoonpayLink(args: GetMoonpayLinkArgs, headers?: object): Promise<GetMoonpayLinkReturn>
  getSardineClientToken(headers?: object): Promise<GetSardineClientTokenReturn>
  getSardineNFTCheckoutToken(args: GetSardineNFTCheckoutTokenArgs, headers?: object): Promise<GetSardineNFTCheckoutTokenReturn>
  resolveENSAddress(args: ResolveENSAddressArgs, headers?: object): Promise<ResolveENSAddressReturn>
  isValidSignature(args: IsValidSignatureArgs, headers?: object): Promise<IsValidSignatureReturn>
  isValidMessageSignature(args: IsValidMessageSignatureArgs, headers?: object): Promise<IsValidMessageSignatureReturn>
  isValidTypedDataSignature(args: IsValidTypedDataSignatureArgs, headers?: object): Promise<IsValidTypedDataSignatureReturn>
  isValidETHAuthProof(args: IsValidETHAuthProofArgs, headers?: object): Promise<IsValidETHAuthProofReturn>
  getCoinPrices(args: GetCoinPricesArgs, headers?: object): Promise<GetCoinPricesReturn>
  getCollectiblePrices(args: GetCollectiblePricesArgs, headers?: object): Promise<GetCollectiblePricesReturn>
  getExchangeRate(args: GetExchangeRateArgs, headers?: object): Promise<GetExchangeRateReturn>
  memoryStore(args: MemoryStoreArgs, headers?: object): Promise<MemoryStoreReturn>
  memoryLoad(args: MemoryLoadArgs, headers?: object): Promise<MemoryLoadReturn>
  getInviteInfo(headers?: object): Promise<GetInviteInfoReturn>
  isValidAccessCode(args: IsValidAccessCodeArgs, headers?: object): Promise<IsValidAccessCodeReturn>
  internalClaimAccessCode(args: InternalClaimAccessCodeArgs, headers?: object): Promise<InternalClaimAccessCodeReturn>
  blockNumberAtTime(args: BlockNumberAtTimeArgs, headers?: object): Promise<BlockNumberAtTimeReturn>
  paperSessionSecret(args: PaperSessionSecretArgs, headers?: object): Promise<PaperSessionSecretReturn>
  paperSessionSecret2(args: PaperSessionSecret2Args, headers?: object): Promise<PaperSessionSecret2Return>
  linkWallet(args: LinkWalletArgs, headers?: object): Promise<LinkWalletReturn>
  getLinkedWallets(args: GetLinkedWalletsArgs, headers?: object): Promise<GetLinkedWalletsReturn>
}

export interface PingArgs {}

export interface PingReturn {
  status: boolean
}
export interface VersionArgs {}

export interface VersionReturn {
  version: Version
}
export interface RuntimeStatusArgs {}

export interface RuntimeStatusReturn {
  status: RuntimeStatus
}
export interface ClockArgs {}

export interface ClockReturn {
  serverTime: string
}
export interface GetSequenceContextArgs {}

export interface GetSequenceContextReturn {
  data: SequenceContext
}
export interface GetAuthTokenArgs {
  ewtString: string
  testnetMode?: boolean
}

export interface GetAuthTokenReturn {
  status: boolean
  jwtToken: string
  address: string
  user?: User
}
export interface GetAuthToken2Args {
  ewtString: string
  chainID: string
}

export interface GetAuthToken2Return {
  status: boolean
  jwtToken: string
  address: string
  user?: User
}
export interface SendPasswordlessLinkArgs {
  email: string
  redirectUri: string
  intent: string
}

export interface SendPasswordlessLinkReturn {
  status: boolean
}
export interface FriendListArgs {
  nickname?: string
  page?: Page
}

export interface FriendListReturn {
  page: Page
  friends: Array<Friend>
}
export interface GetFriendByAddressArgs {
  friendAddress: string
}

export interface GetFriendByAddressReturn {
  status: boolean
  friend: Friend
}
export interface SearchFriendsArgs {
  filterUsername: string
  page?: Page
}

export interface SearchFriendsReturn {
  friends: Array<Friend>
}
export interface AddFriendArgs {
  friendAddress: string
  optionalNickname?: string
}

export interface AddFriendReturn {
  status: boolean
  friend?: Friend
}
export interface UpdateFriendNicknameArgs {
  friendAddress: string
  nickname: string
}

export interface UpdateFriendNicknameReturn {
  status: boolean
  friend?: Friend
}
export interface RemoveFriendArgs {
  friendAddress: string
}

export interface RemoveFriendReturn {
  status: boolean
}
export interface ContractCallArgs {
  chainID: string
  contract: string
  inputExpr: string
  outputExpr: string
  args: Array<string>
}

export interface ContractCallReturn {
  returns: Array<string>
}
export interface DecodeContractCallArgs {
  callData: string
}

export interface DecodeContractCallReturn {
  call: ContractCall
}
export interface LookupContractCallSelectorsArgs {
  selectors: Array<string>
}

export interface LookupContractCallSelectorsReturn {
  signatures: Array<Array<string>>
}
export interface UserStorageFetchArgs {
  key: string
}

export interface UserStorageFetchReturn {
  object: any
}
export interface UserStorageSaveArgs {
  key: string
  object: any
}

export interface UserStorageSaveReturn {
  ok: boolean
}
export interface UserStorageDeleteArgs {
  key: string
}

export interface UserStorageDeleteReturn {
  ok: boolean
}
export interface UserStorageFetchAllArgs {
  keys?: Array<string>
}

export interface UserStorageFetchAllReturn {
  objects: { [key: string]: any }
}
export interface GetMoonpayLinkArgs {
  url: string
}

export interface GetMoonpayLinkReturn {
  signedUrl: string
}
export interface GetSardineClientTokenArgs {}

export interface GetSardineClientTokenReturn {
  token: string
}
export interface GetSardineNFTCheckoutTokenArgs {
  params: NftCheckoutParams
}

export interface GetSardineNFTCheckoutTokenReturn {
  resp: NftCheckout
}
export interface ResolveENSAddressArgs {
  ens: string
}

export interface ResolveENSAddressReturn {
  address: string
  ok: boolean
}
export interface IsValidSignatureArgs {
  chainId: string
  walletAddress: string
  digest: string
  signature: string
}

export interface IsValidSignatureReturn {
  isValid: boolean
}
export interface IsValidMessageSignatureArgs {
  chainId: string
  walletAddress: string
  message: string
  signature: string
}

export interface IsValidMessageSignatureReturn {
  isValid: boolean
}
export interface IsValidTypedDataSignatureArgs {
  chainId: string
  walletAddress: string
  typedData: any
  signature: string
}

export interface IsValidTypedDataSignatureReturn {
  isValid: boolean
}
export interface IsValidETHAuthProofArgs {
  chainId: string
  walletAddress: string
  ethAuthProofString: string
}

export interface IsValidETHAuthProofReturn {
  isValid: boolean
}
export interface GetCoinPricesArgs {
  tokens: Array<Token>
}

export interface GetCoinPricesReturn {
  tokenPrices: Array<TokenPrice>
}
export interface GetCollectiblePricesArgs {
  tokens: Array<Token>
}

export interface GetCollectiblePricesReturn {
  tokenPrices: Array<TokenPrice>
}
export interface GetExchangeRateArgs {
  toCurrency: string
}

export interface GetExchangeRateReturn {
  exchangeRate: ExchangeRate
}
export interface MemoryStoreArgs {
  key: string
  value: string
}

export interface MemoryStoreReturn {
  ok: boolean
}
export interface MemoryLoadArgs {
  key: string
}

export interface MemoryLoadReturn {
  value: string
}
export interface GetInviteInfoArgs {}

export interface GetInviteInfoReturn {
  inviteInfo: InviteInfo
}
export interface IsValidAccessCodeArgs {
  accessCode: string
}

export interface IsValidAccessCodeReturn {
  status: boolean
}
export interface InternalClaimAccessCodeArgs {
  address: string
  accessCode: string
}

export interface InternalClaimAccessCodeReturn {
  status: boolean
}
export interface BlockNumberAtTimeArgs {
  chainId: number
  timestamps: Array<number>
}

export interface BlockNumberAtTimeReturn {
  blocks: Array<number>
}
export interface PaperSessionSecretArgs {
  chainName: string
  contractAddress: string
  paramsJson: string
  contractType: string
}

export interface PaperSessionSecretReturn {
  secret: string
}
export interface PaperSessionSecret2Args {
  chainName: string
  contractAddress: string
  paramsJson: string
  abi: string
}

export interface PaperSessionSecret2Return {
  secret: string
}
export interface LinkWalletArgs {
  chainId: string
  walletAddress: string
  ethAuthProofString: string
  linkedWalletMessage: string
  linkedWalletSignature: string
}

export interface LinkWalletReturn {
  status: boolean
  linkedWalletAddress: string
}
export interface GetLinkedWalletsArgs {
  walletAddress: string
}

export interface GetLinkedWalletsReturn {
  linkedWallets: Array<string>
}

//
// Client
//
export class API implements API {
  protected hostname: string
  protected fetch: Fetch
  protected path = '/rpc/API/'

  constructor(hostname: string, fetch: Fetch) {
    this.hostname = hostname
    this.fetch = (input: RequestInfo, init?: RequestInit) => fetch(input, init)
  }

  private url(name: string): string {
    return this.hostname + this.path + name
  }

  ping = (headers?: object): Promise<PingReturn> => {
    return this.fetch(this.url('Ping'), createHTTPRequest({}, headers)).then(res => {
      return buildResponse(res).then(_data => {
        return {
          status: <boolean>_data.status
        }
      })
    })
  }

  version = (headers?: object): Promise<VersionReturn> => {
    return this.fetch(this.url('Version'), createHTTPRequest({}, headers)).then(res => {
      return buildResponse(res).then(_data => {
        return {
          version: <Version>_data.version
        }
      })
    })
  }

  runtimeStatus = (headers?: object): Promise<RuntimeStatusReturn> => {
    return this.fetch(this.url('RuntimeStatus'), createHTTPRequest({}, headers)).then(res => {
      return buildResponse(res).then(_data => {
        return {
          status: <RuntimeStatus>_data.status
        }
      })
    })
  }

  clock = (headers?: object): Promise<ClockReturn> => {
    return this.fetch(this.url('Clock'), createHTTPRequest({}, headers)).then(res => {
      return buildResponse(res).then(_data => {
        return {
          serverTime: <string>_data.serverTime
        }
      })
    })
  }

  getSequenceContext = (headers?: object): Promise<GetSequenceContextReturn> => {
    return this.fetch(this.url('GetSequenceContext'), createHTTPRequest({}, headers)).then(res => {
      return buildResponse(res).then(_data => {
        return {
          data: <SequenceContext>_data.data
        }
      })
    })
  }

  getAuthToken = (args: GetAuthTokenArgs, headers?: object): Promise<GetAuthTokenReturn> => {
    return this.fetch(this.url('GetAuthToken'), createHTTPRequest(args, headers)).then(res => {
      return buildResponse(res).then(_data => {
        return {
          status: <boolean>_data.status,
          jwtToken: <string>_data.jwtToken,
          address: <string>_data.address,
          user: <User>_data.user
        }
      })
    })
  }

  getAuthToken2 = (args: GetAuthToken2Args, headers?: object): Promise<GetAuthToken2Return> => {
    return this.fetch(this.url('GetAuthToken2'), createHTTPRequest(args, headers)).then(res => {
      return buildResponse(res).then(_data => {
        return {
          status: <boolean>_data.status,
          jwtToken: <string>_data.jwtToken,
          address: <string>_data.address,
          user: <User>_data.user
        }
      })
    })
  }

  sendPasswordlessLink = (args: SendPasswordlessLinkArgs, headers?: object): Promise<SendPasswordlessLinkReturn> => {
    return this.fetch(this.url('SendPasswordlessLink'), createHTTPRequest(args, headers)).then(res => {
      return buildResponse(res).then(_data => {
        return {
          status: <boolean>_data.status
        }
      })
    })
  }

  friendList = (args: FriendListArgs, headers?: object): Promise<FriendListReturn> => {
    return this.fetch(this.url('FriendList'), createHTTPRequest(args, headers)).then(res => {
      return buildResponse(res).then(_data => {
        return {
          page: <Page>_data.page,
          friends: <Array<Friend>>_data.friends
        }
      })
    })
  }

  getFriendByAddress = (args: GetFriendByAddressArgs, headers?: object): Promise<GetFriendByAddressReturn> => {
    return this.fetch(this.url('GetFriendByAddress'), createHTTPRequest(args, headers)).then(res => {
      return buildResponse(res).then(_data => {
        return {
          status: <boolean>_data.status,
          friend: <Friend>_data.friend
        }
      })
    })
  }

  searchFriends = (args: SearchFriendsArgs, headers?: object): Promise<SearchFriendsReturn> => {
    return this.fetch(this.url('SearchFriends'), createHTTPRequest(args, headers)).then(res => {
      return buildResponse(res).then(_data => {
        return {
          friends: <Array<Friend>>_data.friends
        }
      })
    })
  }

  addFriend = (args: AddFriendArgs, headers?: object): Promise<AddFriendReturn> => {
    return this.fetch(this.url('AddFriend'), createHTTPRequest(args, headers)).then(res => {
      return buildResponse(res).then(_data => {
        return {
          status: <boolean>_data.status,
          friend: <Friend>_data.friend
        }
      })
    })
  }

  updateFriendNickname = (args: UpdateFriendNicknameArgs, headers?: object): Promise<UpdateFriendNicknameReturn> => {
    return this.fetch(this.url('UpdateFriendNickname'), createHTTPRequest(args, headers)).then(res => {
      return buildResponse(res).then(_data => {
        return {
          status: <boolean>_data.status,
          friend: <Friend>_data.friend
        }
      })
    })
  }

  removeFriend = (args: RemoveFriendArgs, headers?: object): Promise<RemoveFriendReturn> => {
    return this.fetch(this.url('RemoveFriend'), createHTTPRequest(args, headers)).then(res => {
      return buildResponse(res).then(_data => {
        return {
          status: <boolean>_data.status
        }
      })
    })
  }

  contractCall = (args: ContractCallArgs, headers?: object): Promise<ContractCallReturn> => {
    return this.fetch(this.url('ContractCall'), createHTTPRequest(args, headers)).then(res => {
      return buildResponse(res).then(_data => {
        return {
          returns: <Array<string>>_data.returns
        }
      })
    })
  }

  decodeContractCall = (args: DecodeContractCallArgs, headers?: object): Promise<DecodeContractCallReturn> => {
    return this.fetch(this.url('DecodeContractCall'), createHTTPRequest(args, headers)).then(res => {
      return buildResponse(res).then(_data => {
        return {
          call: <ContractCall>_data.call
        }
      })
    })
  }

  lookupContractCallSelectors = (
    args: LookupContractCallSelectorsArgs,
    headers?: object
  ): Promise<LookupContractCallSelectorsReturn> => {
    return this.fetch(this.url('LookupContractCallSelectors'), createHTTPRequest(args, headers)).then(res => {
      return buildResponse(res).then(_data => {
        return {
          signatures: <Array<Array<string>>>_data.signatures
        }
      })
    })
  }

  userStorageFetch = (args: UserStorageFetchArgs, headers?: object): Promise<UserStorageFetchReturn> => {
    return this.fetch(this.url('UserStorageFetch'), createHTTPRequest(args, headers)).then(res => {
      return buildResponse(res).then(_data => {
        return {
          object: <any>_data.object
        }
      })
    })
  }

  userStorageSave = (args: UserStorageSaveArgs, headers?: object): Promise<UserStorageSaveReturn> => {
    return this.fetch(this.url('UserStorageSave'), createHTTPRequest(args, headers)).then(res => {
      return buildResponse(res).then(_data => {
        return {
          ok: <boolean>_data.ok
        }
      })
    })
  }

  userStorageDelete = (args: UserStorageDeleteArgs, headers?: object): Promise<UserStorageDeleteReturn> => {
    return this.fetch(this.url('UserStorageDelete'), createHTTPRequest(args, headers)).then(res => {
      return buildResponse(res).then(_data => {
        return {
          ok: <boolean>_data.ok
        }
      })
    })
  }

  userStorageFetchAll = (args: UserStorageFetchAllArgs, headers?: object): Promise<UserStorageFetchAllReturn> => {
    return this.fetch(this.url('UserStorageFetchAll'), createHTTPRequest(args, headers)).then(res => {
      return buildResponse(res).then(_data => {
        return {
          objects: <{ [key: string]: any }>_data.objects
        }
      })
    })
  }

  getMoonpayLink = (args: GetMoonpayLinkArgs, headers?: object): Promise<GetMoonpayLinkReturn> => {
    return this.fetch(this.url('GetMoonpayLink'), createHTTPRequest(args, headers)).then(res => {
      return buildResponse(res).then(_data => {
        return {
          signedUrl: <string>_data.signedUrl
        }
      })
    })
  }

  getSardineClientToken = (headers?: object): Promise<GetSardineClientTokenReturn> => {
    return this.fetch(this.url('GetSardineClientToken'), createHTTPRequest({}, headers)).then(res => {
      return buildResponse(res).then(_data => {
        return {
          token: <string>_data.token
        }
      })
    })
  }

  getSardineNFTCheckoutToken = (
    args: GetSardineNFTCheckoutTokenArgs,
    headers?: object
  ): Promise<GetSardineNFTCheckoutTokenReturn> => {
    return this.fetch(this.url('GetSardineNFTCheckoutToken'), createHTTPRequest(args, headers)).then(res => {
      return buildResponse(res).then(_data => {
        return {
          resp: <NftCheckout>_data.resp
        }
      })
    })
  }

  resolveENSAddress = (args: ResolveENSAddressArgs, headers?: object): Promise<ResolveENSAddressReturn> => {
    return this.fetch(this.url('ResolveENSAddress'), createHTTPRequest(args, headers)).then(res => {
      return buildResponse(res).then(_data => {
        return {
          address: <string>_data.address,
          ok: <boolean>_data.ok
        }
      })
    })
  }

  isValidSignature = (args: IsValidSignatureArgs, headers?: object): Promise<IsValidSignatureReturn> => {
    return this.fetch(this.url('IsValidSignature'), createHTTPRequest(args, headers)).then(res => {
      return buildResponse(res).then(_data => {
        return {
          isValid: <boolean>_data.isValid
        }
      })
    })
  }

  isValidMessageSignature = (args: IsValidMessageSignatureArgs, headers?: object): Promise<IsValidMessageSignatureReturn> => {
    return this.fetch(this.url('IsValidMessageSignature'), createHTTPRequest(args, headers)).then(res => {
      return buildResponse(res).then(_data => {
        return {
          isValid: <boolean>_data.isValid
        }
      })
    })
  }

  isValidTypedDataSignature = (
    args: IsValidTypedDataSignatureArgs,
    headers?: object
  ): Promise<IsValidTypedDataSignatureReturn> => {
    return this.fetch(this.url('IsValidTypedDataSignature'), createHTTPRequest(args, headers)).then(res => {
      return buildResponse(res).then(_data => {
        return {
          isValid: <boolean>_data.isValid
        }
      })
    })
  }

  isValidETHAuthProof = (args: IsValidETHAuthProofArgs, headers?: object): Promise<IsValidETHAuthProofReturn> => {
    return this.fetch(this.url('IsValidETHAuthProof'), createHTTPRequest(args, headers)).then(res => {
      return buildResponse(res).then(_data => {
        return {
          isValid: <boolean>_data.isValid
        }
      })
    })
  }

  getCoinPrices = (args: GetCoinPricesArgs, headers?: object): Promise<GetCoinPricesReturn> => {
    return this.fetch(this.url('GetCoinPrices'), createHTTPRequest(args, headers)).then(res => {
      return buildResponse(res).then(_data => {
        return {
          tokenPrices: <Array<TokenPrice>>_data.tokenPrices
        }
      })
    })
  }

  getCollectiblePrices = (args: GetCollectiblePricesArgs, headers?: object): Promise<GetCollectiblePricesReturn> => {
    return this.fetch(this.url('GetCollectiblePrices'), createHTTPRequest(args, headers)).then(res => {
      return buildResponse(res).then(_data => {
        return {
          tokenPrices: <Array<TokenPrice>>_data.tokenPrices
        }
      })
    })
  }

  getExchangeRate = (args: GetExchangeRateArgs, headers?: object): Promise<GetExchangeRateReturn> => {
    return this.fetch(this.url('GetExchangeRate'), createHTTPRequest(args, headers)).then(res => {
      return buildResponse(res).then(_data => {
        return {
          exchangeRate: <ExchangeRate>_data.exchangeRate
        }
      })
    })
  }

  memoryStore = (args: MemoryStoreArgs, headers?: object): Promise<MemoryStoreReturn> => {
    return this.fetch(this.url('MemoryStore'), createHTTPRequest(args, headers)).then(res => {
      return buildResponse(res).then(_data => {
        return {
          ok: <boolean>_data.ok
        }
      })
    })
  }

  memoryLoad = (args: MemoryLoadArgs, headers?: object): Promise<MemoryLoadReturn> => {
    return this.fetch(this.url('MemoryLoad'), createHTTPRequest(args, headers)).then(res => {
      return buildResponse(res).then(_data => {
        return {
          value: <string>_data.value
        }
      })
    })
  }

  getInviteInfo = (headers?: object): Promise<GetInviteInfoReturn> => {
    return this.fetch(this.url('GetInviteInfo'), createHTTPRequest({}, headers)).then(res => {
      return buildResponse(res).then(_data => {
        return {
          inviteInfo: <InviteInfo>_data.inviteInfo
        }
      })
    })
  }

  isValidAccessCode = (args: IsValidAccessCodeArgs, headers?: object): Promise<IsValidAccessCodeReturn> => {
    return this.fetch(this.url('IsValidAccessCode'), createHTTPRequest(args, headers)).then(res => {
      return buildResponse(res).then(_data => {
        return {
          status: <boolean>_data.status
        }
      })
    })
  }

  internalClaimAccessCode = (args: InternalClaimAccessCodeArgs, headers?: object): Promise<InternalClaimAccessCodeReturn> => {
    return this.fetch(this.url('InternalClaimAccessCode'), createHTTPRequest(args, headers)).then(res => {
      return buildResponse(res).then(_data => {
        return {
          status: <boolean>_data.status
        }
      })
    })
  }

  blockNumberAtTime = (args: BlockNumberAtTimeArgs, headers?: object): Promise<BlockNumberAtTimeReturn> => {
    return this.fetch(this.url('BlockNumberAtTime'), createHTTPRequest(args, headers)).then(res => {
      return buildResponse(res).then(_data => {
        return {
          blocks: <Array<number>>_data.blocks
        }
      })
    })
  }

  paperSessionSecret = (args: PaperSessionSecretArgs, headers?: object): Promise<PaperSessionSecretReturn> => {
    return this.fetch(this.url('PaperSessionSecret'), createHTTPRequest(args, headers)).then(res => {
      return buildResponse(res).then(_data => {
        return {
          secret: <string>_data.secret
        }
      })
    })
  }

  paperSessionSecret2 = (args: PaperSessionSecret2Args, headers?: object): Promise<PaperSessionSecret2Return> => {
    return this.fetch(this.url('PaperSessionSecret2'), createHTTPRequest(args, headers)).then(res => {
      return buildResponse(res).then(_data => {
        return {
          secret: <string>_data.secret
        }
      })
    })
  }

  linkWallet = (args: LinkWalletArgs, headers?: object): Promise<LinkWalletReturn> => {
    return this.fetch(this.url('LinkWallet'), createHTTPRequest(args, headers)).then(res => {
      return buildResponse(res).then(_data => {
        return {
          status: <boolean>_data.status,
          linkedWalletAddress: <string>_data.linkedWalletAddress
        }
      })
    })
  }

  getLinkedWallets = (args: GetLinkedWalletsArgs, headers?: object): Promise<GetLinkedWalletsReturn> => {
    return this.fetch(this.url('GetLinkedWallets'), createHTTPRequest(args, headers)).then(res => {
      return buildResponse(res).then(_data => {
        return {
          linkedWallets: <Array<string>>_data.linkedWallets
        }
      })
    })
  }
}

export interface WebRPCError extends Error {
  code: string
  msg: string
  status: number
}

const createHTTPRequest = (body: object = {}, headers: object = {}): object => {
  return {
    method: 'POST',
    headers: { ...headers, 'Content-Type': 'application/json' },
    body: JSON.stringify(body || {})
  }
}

const buildResponse = (res: Response): Promise<any> => {
  return res.text().then(text => {
    let data
    try {
      data = JSON.parse(text)
    } catch (err) {
      throw { code: 'unknown', msg: `expecting JSON, got: ${text}`, status: res.status } as WebRPCError
    }
    if (!res.ok) {
      throw data // webrpc error response
    }
    return data
  })
}

export type Fetch = (input: RequestInfo, init?: RequestInit) => Promise<Response>
