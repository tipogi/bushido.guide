export enum FilterActions {
  CHANGE_DIRECTION = 'CHANGE_DIRECTION',
  TOGGLE_EXCHANGE = 'TOGGLE_EXCHANGE'
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

export type IFilterActions =
  IChangePaymentDirectionAction |
  IToggleExchangeAction;