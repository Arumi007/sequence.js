/* eslint-disable */
// sequence-api v0.4.0 9f7a841e9b1655d80084cda01db665c0dada48c9
// --
// This file has been generated by https://github.com/webrpc/webrpc using gen/typescript
// Do not edit by hand. Update your webrpc schema and re-generate.

// WebRPC description and code-gen version
export const WebRPCVersion = "v1"

// Schema version of your RIDL schema
export const WebRPCSchemaVersion = "v0.4.0"

// Schema hash generated from your RIDL schema
export const WebRPCSchemaHash = "9f7a841e9b1655d80084cda01db665c0dada48c9"


//
// Types
//
export enum SmartRampOrderStatus {
  UNKNOWN = 'UNKNOWN',
  RUNNING_CHECKS = 'RUNNING_CHECKS',
  PROCESSING = 'PROCESSING',
  FAILED = 'FAILED',
  COMPLETE = 'COMPLETE'
}

export enum SmartRampTxnStatus {
  UNKNOWN = 'UNKNOWN',
  SUCCESSFUL = 'SUCCESSFUL',
  FAILED = 'FAILED'
}

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
}

export interface RuntimeChecks {
}

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

export interface PayCard {
  id: number
  userAddress: string
  cardType: string
  cardFirstNameToken: string
  cardLastNameToken: string
  cardNumberLastFourDigits: string
  cardNumberToken: string
  cardCVCToken: string
  cardExpMonth: number
  cardExpYear: number
  contactAddressToken: string
  contactCityToken: string
  contactProvinceToken: string
  contactPostalCodeToken: string
  contactCountryCodeToken: string
  contactEmailToken: string
  contactPhoneToken: string
  updatedAt?: string
  createdAt?: string
}

export interface SmartRampQuoteRequest {
  countryCode: string
  niftyswapContractAddress: string
  tokenIds: Array<string>
  tokensBoughtAmounts: Array<string>
  maxCurrency: string
  extraFeeRecipients?: Array<string>
  extraFeeAmounts?: Array<string>
}

export interface SmartRampQuoteDetails {
  quoteId: string
  smartScriptId: string
  quoteRequest: SmartRampQuoteRequest
  recipientAddress: string
  purchaseAmount: number
  purchaseFees: number
  purchaseTotal: number
  sourceCurrency: string
  destCurrency: string
  createdAt: string
  expiresAt: string
}

export interface SmartRampPurchaseReceipt {
  orderId: string
  quoteId: string
  createdAt: string
  status: SmartRampOrderStatus
  errorReason?: string
  errorCode?: string
  authCodesRequested: boolean
  countryCode: string
  sourceCurrency: string
  purchaseAmount: number
  purchaseFees: number
  purchaseTotal: number
  txnHash: string
  txnSuccessful: SmartRampTxnStatus
}

export interface SmartRampOrder {
  id: number
  userAddress: string
  contractAddress: string
  payCardId: number
  orderId: string
  quoteId: string
  status: SmartRampOrderStatus
  errorReason: string
  errorCode: string
  authCodesRequested: boolean
  countryCode: string
  email: string
  sourceCurrency: string
  destCurrency: string
  purchaseAmount: number
  purchaseFees: number
  purchaseTotal: number
  smartScriptParams: {[key: string]: any}
  txnHash: string
  txnSuccessful: SmartRampTxnStatus
  updatedAt?: string
  createdAt?: string
}

export interface PayCardAuth {
  orderId: string
  smsNeeded: boolean
  card2faNeeded: boolean
  authorization3dsUrl: string
}

export interface Page {
  pageSize?: number
  page?: number
  totalRecords?: number
  column?: string
  before?: any
  after?: any
  sort?: Array<SortBy>
}

export interface SortBy {
  column: string
  order: SortOrder
}

export interface API {
  ping(headers?: object): Promise<PingReturn>
  version(headers?: object): Promise<VersionReturn>
  runtimeStatus(headers?: object): Promise<RuntimeStatusReturn>
  getSequenceContext(headers?: object): Promise<GetSequenceContextReturn>
  getAuthToken(args: GetAuthTokenArgs, headers?: object): Promise<GetAuthTokenReturn>
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
  isUsingGoogleMail(args: IsUsingGoogleMailArgs, headers?: object): Promise<IsUsingGoogleMailReturn>
  isValidSignature(args: IsValidSignatureArgs, headers?: object): Promise<IsValidSignatureReturn>
  isValidMessageSignature(args: IsValidMessageSignatureArgs, headers?: object): Promise<IsValidMessageSignatureReturn>
  isValidTypedDataSignature(args: IsValidTypedDataSignatureArgs, headers?: object): Promise<IsValidTypedDataSignatureReturn>
  isValidETHAuthProof(args: IsValidETHAuthProofArgs, headers?: object): Promise<IsValidETHAuthProofReturn>
  getCoinPrices(args: GetCoinPricesArgs, headers?: object): Promise<GetCoinPricesReturn>
  getCollectiblePrices(args: GetCollectiblePricesArgs, headers?: object): Promise<GetCollectiblePricesReturn>
  getExchangeRate(args: GetExchangeRateArgs, headers?: object): Promise<GetExchangeRateReturn>
  listPayCardsOnFile(headers?: object): Promise<ListPayCardsOnFileReturn>
  savePayCard(args: SavePayCardArgs, headers?: object): Promise<SavePayCardReturn>
  updatePayCardCVC(args: UpdatePayCardCVCArgs, headers?: object): Promise<UpdatePayCardCVCReturn>
  deletePayCard(args: DeletePayCardArgs, headers?: object): Promise<DeletePayCardReturn>
  smartRampQuote(args: SmartRampQuoteArgs, headers?: object): Promise<SmartRampQuoteReturn>
  smartRampPurchase(args: SmartRampPurchaseArgs, headers?: object): Promise<SmartRampPurchaseReturn>
  smartRampWaitOrderConfirmation(args: SmartRampWaitOrderConfirmationArgs, headers?: object): Promise<SmartRampWaitOrderConfirmationReturn>
  smartRampGetOrder(args: SmartRampGetOrderArgs, headers?: object): Promise<SmartRampGetOrderReturn>
  smartRampCheckCardAuthorization(args: SmartRampCheckCardAuthorizationArgs, headers?: object): Promise<SmartRampCheckCardAuthorizationReturn>
  smartRampOrdersList(args: SmartRampOrdersListArgs, headers?: object): Promise<SmartRampOrdersListReturn>
  smartRampGetOrderTxnHash(args: SmartRampGetOrderTxnHashArgs, headers?: object): Promise<SmartRampGetOrderTxnHashReturn>
  smartRampSubmitCardAuthorization(args: SmartRampSubmitCardAuthorizationArgs, headers?: object): Promise<SmartRampSubmitCardAuthorizationReturn>
  getInviteInfo(headers?: object): Promise<GetInviteInfoReturn>
  isValidAccessCode(args: IsValidAccessCodeArgs, headers?: object): Promise<IsValidAccessCodeReturn>
  internalClaimAccessCode(args: InternalClaimAccessCodeArgs, headers?: object): Promise<InternalClaimAccessCodeReturn>
  walletRecover(args: WalletRecoverArgs, headers?: object): Promise<WalletRecoverReturn>
  blockNumberAtTime(args: BlockNumberAtTimeArgs, headers?: object): Promise<BlockNumberAtTimeReturn>
}

export interface PingArgs {
}

export interface PingReturn {
  status: boolean  
}
export interface VersionArgs {
}

export interface VersionReturn {
  version: Version  
}
export interface RuntimeStatusArgs {
}

export interface RuntimeStatusReturn {
  status: RuntimeStatus  
}
export interface GetSequenceContextArgs {
}

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
export interface SendPasswordlessLinkArgs {
  email: string
  redirectUri: string
  intent: string
}

export interface SendPasswordlessLinkReturn {
  status: boolean  
}
export interface FriendListArgs {
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
  objects: {[key: string]: any}  
}
export interface GetMoonpayLinkArgs {
  url: string
}

export interface GetMoonpayLinkReturn {
  signedUrl: string  
}
export interface IsUsingGoogleMailArgs {
  domain: string
}

export interface IsUsingGoogleMailReturn {
  yes: boolean  
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
export interface ListPayCardsOnFileArgs {
}

export interface ListPayCardsOnFileReturn {
  payCards: Array<PayCard>  
}
export interface SavePayCardArgs {
  payCard: PayCard
}

export interface SavePayCardReturn {
  ok: boolean
  payCard: PayCard  
}
export interface UpdatePayCardCVCArgs {
  payCardId: number
  payCardCVC: string
}

export interface UpdatePayCardCVCReturn {
  ok: boolean  
}
export interface DeletePayCardArgs {
  payCardId: number
}

export interface DeletePayCardReturn {
  ok: boolean  
}
export interface SmartRampQuoteArgs {
  quoteRequest: SmartRampQuoteRequest
}

export interface SmartRampQuoteReturn {
  status: boolean
  quoteDetails: SmartRampQuoteDetails  
}
export interface SmartRampPurchaseArgs {
  quoteDetails: SmartRampQuoteDetails
  payCardId: number
  payCardCVC?: string
}

export interface SmartRampPurchaseReturn {
  processing: boolean
  receipt: SmartRampPurchaseReceipt  
}
export interface SmartRampWaitOrderConfirmationArgs {
  orderId: string
}

export interface SmartRampWaitOrderConfirmationReturn {
  done: boolean
  receipt: SmartRampPurchaseReceipt  
}
export interface SmartRampGetOrderArgs {
  orderId?: string
  id?: number
}

export interface SmartRampGetOrderReturn {
  order: SmartRampOrder  
}
export interface SmartRampCheckCardAuthorizationArgs {
  orderId: string
}

export interface SmartRampCheckCardAuthorizationReturn {
  cardAuth: PayCardAuth  
}
export interface SmartRampOrdersListArgs {
  page?: Page
  userAddressFilter?: string
}

export interface SmartRampOrdersListReturn {
  page: Page
  orders: Array<SmartRampOrder>  
}
export interface SmartRampGetOrderTxnHashArgs {
  orderId: string
}

export interface SmartRampGetOrderTxnHashReturn {
  txnHash: string
  txnSuccessful: SmartRampTxnStatus  
}
export interface SmartRampSubmitCardAuthorizationArgs {
  orderId: string
  sms?: string
  card2fa?: string
}

export interface SmartRampSubmitCardAuthorizationReturn {
  status: boolean  
}
export interface GetInviteInfoArgs {
}

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
export interface WalletRecoverArgs {
  username: string
  secretHash: string
}

export interface WalletRecoverReturn {
  encryptedWallet: string  
}
export interface BlockNumberAtTimeArgs {
  chainId: number
  timestamps: Array<number>
}

export interface BlockNumberAtTimeReturn {
  blocks: Array<number>  
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
    this.fetch = fetch
  }

  private url(name: string): string {
    return this.hostname + this.path + name
  }
  
  ping = (headers?: object): Promise<PingReturn> => {
    return this.fetch(
      this.url('Ping'),
      createHTTPRequest({}, headers)
      ).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          status: <boolean>(_data.status)
        }
      })
    })
  }
  
  version = (headers?: object): Promise<VersionReturn> => {
    return this.fetch(
      this.url('Version'),
      createHTTPRequest({}, headers)
      ).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          version: <Version>(_data.version)
        }
      })
    })
  }
  
  runtimeStatus = (headers?: object): Promise<RuntimeStatusReturn> => {
    return this.fetch(
      this.url('RuntimeStatus'),
      createHTTPRequest({}, headers)
      ).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          status: <RuntimeStatus>(_data.status)
        }
      })
    })
  }
  
  getSequenceContext = (headers?: object): Promise<GetSequenceContextReturn> => {
    return this.fetch(
      this.url('GetSequenceContext'),
      createHTTPRequest({}, headers)
      ).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          data: <SequenceContext>(_data.data)
        }
      })
    })
  }
  
  getAuthToken = (args: GetAuthTokenArgs, headers?: object): Promise<GetAuthTokenReturn> => {
    return this.fetch(
      this.url('GetAuthToken'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          status: <boolean>(_data.status), 
          jwtToken: <string>(_data.jwtToken), 
          address: <string>(_data.address), 
          user: <User>(_data.user)
        }
      })
    })
  }
  
  sendPasswordlessLink = (args: SendPasswordlessLinkArgs, headers?: object): Promise<SendPasswordlessLinkReturn> => {
    return this.fetch(
      this.url('SendPasswordlessLink'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          status: <boolean>(_data.status)
        }
      })
    })
  }
  
  friendList = (args: FriendListArgs, headers?: object): Promise<FriendListReturn> => {
    return this.fetch(
      this.url('FriendList'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          page: <Page>(_data.page), 
          friends: <Array<Friend>>(_data.friends)
        }
      })
    })
  }
  
  getFriendByAddress = (args: GetFriendByAddressArgs, headers?: object): Promise<GetFriendByAddressReturn> => {
    return this.fetch(
      this.url('GetFriendByAddress'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          status: <boolean>(_data.status), 
          friend: <Friend>(_data.friend)
        }
      })
    })
  }
  
  searchFriends = (args: SearchFriendsArgs, headers?: object): Promise<SearchFriendsReturn> => {
    return this.fetch(
      this.url('SearchFriends'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          friends: <Array<Friend>>(_data.friends)
        }
      })
    })
  }
  
  addFriend = (args: AddFriendArgs, headers?: object): Promise<AddFriendReturn> => {
    return this.fetch(
      this.url('AddFriend'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          status: <boolean>(_data.status), 
          friend: <Friend>(_data.friend)
        }
      })
    })
  }
  
  updateFriendNickname = (args: UpdateFriendNicknameArgs, headers?: object): Promise<UpdateFriendNicknameReturn> => {
    return this.fetch(
      this.url('UpdateFriendNickname'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          status: <boolean>(_data.status), 
          friend: <Friend>(_data.friend)
        }
      })
    })
  }
  
  removeFriend = (args: RemoveFriendArgs, headers?: object): Promise<RemoveFriendReturn> => {
    return this.fetch(
      this.url('RemoveFriend'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          status: <boolean>(_data.status)
        }
      })
    })
  }
  
  contractCall = (args: ContractCallArgs, headers?: object): Promise<ContractCallReturn> => {
    return this.fetch(
      this.url('ContractCall'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          returns: <Array<string>>(_data.returns)
        }
      })
    })
  }
  
  decodeContractCall = (args: DecodeContractCallArgs, headers?: object): Promise<DecodeContractCallReturn> => {
    return this.fetch(
      this.url('DecodeContractCall'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          call: <ContractCall>(_data.call)
        }
      })
    })
  }
  
  lookupContractCallSelectors = (args: LookupContractCallSelectorsArgs, headers?: object): Promise<LookupContractCallSelectorsReturn> => {
    return this.fetch(
      this.url('LookupContractCallSelectors'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          signatures: <Array<Array<string>>>(_data.signatures)
        }
      })
    })
  }
  
  userStorageFetch = (args: UserStorageFetchArgs, headers?: object): Promise<UserStorageFetchReturn> => {
    return this.fetch(
      this.url('UserStorageFetch'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          object: <any>(_data.object)
        }
      })
    })
  }
  
  userStorageSave = (args: UserStorageSaveArgs, headers?: object): Promise<UserStorageSaveReturn> => {
    return this.fetch(
      this.url('UserStorageSave'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          ok: <boolean>(_data.ok)
        }
      })
    })
  }
  
  userStorageDelete = (args: UserStorageDeleteArgs, headers?: object): Promise<UserStorageDeleteReturn> => {
    return this.fetch(
      this.url('UserStorageDelete'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          ok: <boolean>(_data.ok)
        }
      })
    })
  }
  
  userStorageFetchAll = (args: UserStorageFetchAllArgs, headers?: object): Promise<UserStorageFetchAllReturn> => {
    return this.fetch(
      this.url('UserStorageFetchAll'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          objects: <{[key: string]: any}>(_data.objects)
        }
      })
    })
  }
  
  getMoonpayLink = (args: GetMoonpayLinkArgs, headers?: object): Promise<GetMoonpayLinkReturn> => {
    return this.fetch(
      this.url('GetMoonpayLink'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          signedUrl: <string>(_data.signedUrl)
        }
      })
    })
  }
  
  isUsingGoogleMail = (args: IsUsingGoogleMailArgs, headers?: object): Promise<IsUsingGoogleMailReturn> => {
    return this.fetch(
      this.url('IsUsingGoogleMail'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          yes: <boolean>(_data.yes)
        }
      })
    })
  }
  
  isValidSignature = (args: IsValidSignatureArgs, headers?: object): Promise<IsValidSignatureReturn> => {
    return this.fetch(
      this.url('IsValidSignature'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          isValid: <boolean>(_data.isValid)
        }
      })
    })
  }
  
  isValidMessageSignature = (args: IsValidMessageSignatureArgs, headers?: object): Promise<IsValidMessageSignatureReturn> => {
    return this.fetch(
      this.url('IsValidMessageSignature'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          isValid: <boolean>(_data.isValid)
        }
      })
    })
  }
  
  isValidTypedDataSignature = (args: IsValidTypedDataSignatureArgs, headers?: object): Promise<IsValidTypedDataSignatureReturn> => {
    return this.fetch(
      this.url('IsValidTypedDataSignature'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          isValid: <boolean>(_data.isValid)
        }
      })
    })
  }
  
  isValidETHAuthProof = (args: IsValidETHAuthProofArgs, headers?: object): Promise<IsValidETHAuthProofReturn> => {
    return this.fetch(
      this.url('IsValidETHAuthProof'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          isValid: <boolean>(_data.isValid)
        }
      })
    })
  }
  
  getCoinPrices = (args: GetCoinPricesArgs, headers?: object): Promise<GetCoinPricesReturn> => {
    return this.fetch(
      this.url('GetCoinPrices'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          tokenPrices: <Array<TokenPrice>>(_data.tokenPrices)
        }
      })
    })
  }
  
  getCollectiblePrices = (args: GetCollectiblePricesArgs, headers?: object): Promise<GetCollectiblePricesReturn> => {
    return this.fetch(
      this.url('GetCollectiblePrices'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          tokenPrices: <Array<TokenPrice>>(_data.tokenPrices)
        }
      })
    })
  }
  
  getExchangeRate = (args: GetExchangeRateArgs, headers?: object): Promise<GetExchangeRateReturn> => {
    return this.fetch(
      this.url('GetExchangeRate'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          exchangeRate: <ExchangeRate>(_data.exchangeRate)
        }
      })
    })
  }
  
  listPayCardsOnFile = (headers?: object): Promise<ListPayCardsOnFileReturn> => {
    return this.fetch(
      this.url('ListPayCardsOnFile'),
      createHTTPRequest({}, headers)
      ).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          payCards: <Array<PayCard>>(_data.payCards)
        }
      })
    })
  }
  
  savePayCard = (args: SavePayCardArgs, headers?: object): Promise<SavePayCardReturn> => {
    return this.fetch(
      this.url('SavePayCard'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          ok: <boolean>(_data.ok), 
          payCard: <PayCard>(_data.payCard)
        }
      })
    })
  }
  
  updatePayCardCVC = (args: UpdatePayCardCVCArgs, headers?: object): Promise<UpdatePayCardCVCReturn> => {
    return this.fetch(
      this.url('UpdatePayCardCVC'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          ok: <boolean>(_data.ok)
        }
      })
    })
  }
  
  deletePayCard = (args: DeletePayCardArgs, headers?: object): Promise<DeletePayCardReturn> => {
    return this.fetch(
      this.url('DeletePayCard'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          ok: <boolean>(_data.ok)
        }
      })
    })
  }
  
  smartRampQuote = (args: SmartRampQuoteArgs, headers?: object): Promise<SmartRampQuoteReturn> => {
    return this.fetch(
      this.url('SmartRampQuote'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          status: <boolean>(_data.status), 
          quoteDetails: <SmartRampQuoteDetails>(_data.quoteDetails)
        }
      })
    })
  }
  
  smartRampPurchase = (args: SmartRampPurchaseArgs, headers?: object): Promise<SmartRampPurchaseReturn> => {
    return this.fetch(
      this.url('SmartRampPurchase'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          processing: <boolean>(_data.processing), 
          receipt: <SmartRampPurchaseReceipt>(_data.receipt)
        }
      })
    })
  }
  
  smartRampWaitOrderConfirmation = (args: SmartRampWaitOrderConfirmationArgs, headers?: object): Promise<SmartRampWaitOrderConfirmationReturn> => {
    return this.fetch(
      this.url('SmartRampWaitOrderConfirmation'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          done: <boolean>(_data.done), 
          receipt: <SmartRampPurchaseReceipt>(_data.receipt)
        }
      })
    })
  }
  
  smartRampGetOrder = (args: SmartRampGetOrderArgs, headers?: object): Promise<SmartRampGetOrderReturn> => {
    return this.fetch(
      this.url('SmartRampGetOrder'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          order: <SmartRampOrder>(_data.order)
        }
      })
    })
  }
  
  smartRampCheckCardAuthorization = (args: SmartRampCheckCardAuthorizationArgs, headers?: object): Promise<SmartRampCheckCardAuthorizationReturn> => {
    return this.fetch(
      this.url('SmartRampCheckCardAuthorization'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          cardAuth: <PayCardAuth>(_data.cardAuth)
        }
      })
    })
  }
  
  smartRampOrdersList = (args: SmartRampOrdersListArgs, headers?: object): Promise<SmartRampOrdersListReturn> => {
    return this.fetch(
      this.url('SmartRampOrdersList'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          page: <Page>(_data.page), 
          orders: <Array<SmartRampOrder>>(_data.orders)
        }
      })
    })
  }
  
  smartRampGetOrderTxnHash = (args: SmartRampGetOrderTxnHashArgs, headers?: object): Promise<SmartRampGetOrderTxnHashReturn> => {
    return this.fetch(
      this.url('SmartRampGetOrderTxnHash'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          txnHash: <string>(_data.txnHash), 
          txnSuccessful: <SmartRampTxnStatus>(_data.txnSuccessful)
        }
      })
    })
  }
  
  smartRampSubmitCardAuthorization = (args: SmartRampSubmitCardAuthorizationArgs, headers?: object): Promise<SmartRampSubmitCardAuthorizationReturn> => {
    return this.fetch(
      this.url('SmartRampSubmitCardAuthorization'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          status: <boolean>(_data.status)
        }
      })
    })
  }
  
  getInviteInfo = (headers?: object): Promise<GetInviteInfoReturn> => {
    return this.fetch(
      this.url('GetInviteInfo'),
      createHTTPRequest({}, headers)
      ).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          inviteInfo: <InviteInfo>(_data.inviteInfo)
        }
      })
    })
  }
  
  isValidAccessCode = (args: IsValidAccessCodeArgs, headers?: object): Promise<IsValidAccessCodeReturn> => {
    return this.fetch(
      this.url('IsValidAccessCode'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          status: <boolean>(_data.status)
        }
      })
    })
  }
  
  internalClaimAccessCode = (args: InternalClaimAccessCodeArgs, headers?: object): Promise<InternalClaimAccessCodeReturn> => {
    return this.fetch(
      this.url('InternalClaimAccessCode'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          status: <boolean>(_data.status)
        }
      })
    })
  }
  
  walletRecover = (args: WalletRecoverArgs, headers?: object): Promise<WalletRecoverReturn> => {
    return this.fetch(
      this.url('WalletRecover'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          encryptedWallet: <string>(_data.encryptedWallet)
        }
      })
    })
  }
  
  blockNumberAtTime = (args: BlockNumberAtTimeArgs, headers?: object): Promise<BlockNumberAtTimeReturn> => {
    return this.fetch(
      this.url('BlockNumberAtTime'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          blocks: <Array<number>>(_data.blocks)
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
    } catch(err) {
      throw { code: 'unknown', msg: `expecting JSON, got: ${text}`, status: res.status } as WebRPCError
    }
    if (!res.ok) {
      throw data // webrpc error response
    }
    return data
  })
}

export type Fetch = (input: RequestInfo, init?: RequestInit) => Promise<Response>
