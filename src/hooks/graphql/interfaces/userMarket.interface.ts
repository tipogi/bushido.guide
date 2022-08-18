export interface IPaymentMethod {
  icons: string[],
  others: string[]
}

export enum ExchangeTypes {
  ROBOSATS = 'Robosats',
  HODLHODL = 'HodlHodl',
  BISQ = 'Bisq'
}

export enum MakerStatus {
  ONLINE = 'online',
  RECENTLY_ONLINE = 'recently_online',
  OFFLINE = 'offline'
}

export interface IOffer {
  exchange: ExchangeTypes,
  price: number,
  dif: string,
  maker_status: MakerStatus,
  min_btc: string,
  max_btc: string,
  min_amount: string,
  max_amount: string,
  method: IPaymentMethod
}

interface IMarketOffers {
  offers: IOffer[],
  price: number
}

export interface IMarketOffersQueryData {
  showMarketOffers: IMarketOffers
}