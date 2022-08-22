export enum FilterActions {
  CHANGE_DIRECTION = 'CHANGE_DIRECTION',
  TOGGLE_EXCHANGE = 'TOGGLE_EXCHANGE',
  SAVE_FILTERS = 'SAVE_FILTERS',
  CHANGE_CURRENCY = 'CHANGE_CURRENCY',
  CHANGE_PREMIUM = 'CHANGE_PREMIUM'
}

interface IChangePaymentDirectionAction {
  type: FilterActions.CHANGE_DIRECTION
}

interface IToggleExchangeAction {
  type: FilterActions.TOGGLE_EXCHANGE,
  payload: { 
    exchange: string
  }
}

interface ISaveFiltersAction {
  type: FilterActions.SAVE_FILTERS
}

interface IChangeCurrencyAction {
  type: FilterActions.CHANGE_CURRENCY,
  payload: { 
    currency: string
  }
}

interface IChangePremiumAction {
  type: FilterActions.CHANGE_PREMIUM,
  payload: { 
    premium: number
  }
}

export type IFilterActions =
  IChangePaymentDirectionAction |
  IToggleExchangeAction |
  ISaveFiltersAction |
  IChangeCurrencyAction |
  IChangePremiumAction;