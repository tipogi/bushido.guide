import { useReducer } from "react";
import { FilterActions, IFilterActions } from "../reducer/action.types";
import { map, filter } from 'lodash';
import useMarketFilterState, { MARKET_FILTER_LOCAL_STORAGE_KEY } from "./useMarketFilterState";
import { OFFER_DIRECTION } from "~/constants";

export interface IStaticReducerState {
  currency: string;
  premium: number;
}

export interface IFilterContext extends IStaticReducerState {
  changePaymentDirection(): void;
  toggleExchange(exchange: string): void;
  saveMarketFilters(): void;
  changeCurrency(currency: string): void;
  changePremium(premium: number): void;
  direction: OFFER_DIRECTION;
  exchanges: string[];
}

interface IExchangeObj {
  [key: string]: boolean;
}

export interface IReducerState extends IStaticReducerState{
  exchanges: IExchangeObj;
  direction: boolean;
}

const reducer = (state: IReducerState, action: IFilterActions) => {
  const { type } = action;
  switch(type) {
    case FilterActions.CHANGE_DIRECTION:
      return { ...state, direction: !state.direction };
    case FilterActions.TOGGLE_EXCHANGE:
      const exchangeToEdit = action.payload.exchange;
      const oldExchangeState = state.exchanges;
      const newExchangeState = { ...oldExchangeState, [exchangeToEdit]: !oldExchangeState[exchangeToEdit]}
      // We cannot have any exchange, do not mutate the state
      return filter(newExchangeState, (value) => value).length === 0
      ? state
      : { ...state, exchanges: newExchangeState }
    case FilterActions.SAVE_FILTERS:
      localStorage.setItem(MARKET_FILTER_LOCAL_STORAGE_KEY, JSON.stringify(state))
      return state;
    case FilterActions.CHANGE_CURRENCY:
      return { ...state, currency: action.payload.currency }
    case FilterActions.CHANGE_PREMIUM:
      return { ...state, premium: action.payload.premium }
    default:
      return state;
  }
}


export default function useFilterReducer(): IFilterContext  {
  const { marketState } = useMarketFilterState()
  const [ { direction, exchanges, currency, premium }, dispatch ] = useReducer(reducer, marketState()); 

  const exchangesArray = filter(map(exchanges, (active, name) => active ? name : 'out'), (exchange: string) => exchange !== 'out')

  return {
    changePaymentDirection: () => dispatch({ type: FilterActions.CHANGE_DIRECTION }),
    toggleExchange: (exchange: string) => dispatch({ type: FilterActions.TOGGLE_EXCHANGE, payload: { exchange }}),
    saveMarketFilters: () => dispatch({ type: FilterActions.SAVE_FILTERS }),
    changeCurrency: (currency: string) => dispatch({ type: FilterActions.CHANGE_CURRENCY, payload: { currency }}),
    changePremium: (premium: number) => dispatch({ type: FilterActions.CHANGE_PREMIUM, payload: { premium }}),
    direction: direction ? OFFER_DIRECTION.BUY : OFFER_DIRECTION.SELL,
    exchanges: exchangesArray,
    currency,
    premium
  }
}