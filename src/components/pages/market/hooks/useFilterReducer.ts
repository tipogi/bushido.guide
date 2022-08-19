import { useReducer } from "react";
import { FilterActions, IFilterActions } from "../reducer/action.types";
import { map, filter } from 'lodash';

export interface IStaticReducerState {
  currency: string;
  premium: number;
}

export interface IFilterContext extends IStaticReducerState {
  changePaymentDirection(): void;
  toggleExchange(exchange: string): void;
  direction: string;
  exchanges: string[];
}

interface IExchangeObj {
  [key: string]: boolean;
}

interface IReducerState extends IStaticReducerState{
  exchanges: IExchangeObj;
  direction: boolean;
}



const filterInitState = {
  // true: BUY, false: SELL
  direction: true,
  exchanges: {
    'hodlhodl': true,
    'bisq': false,
    'robosats': true
  },
  currency: 'usd',
  premium: 10
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
    default:
      return state;
  }
}


export default function useFilterReducer(): IFilterContext  {
  const [ { direction, exchanges, currency, premium }, dispatch ] = useReducer(reducer, filterInitState); 

  const exchangesArray = filter(map(exchanges, (active, name) => active ? name : 'out'), (exchange: string) => exchange !== 'out')

  return {
    changePaymentDirection: () => dispatch({ type: FilterActions.CHANGE_DIRECTION }),
    toggleExchange: (exchange: string) => dispatch({ type: FilterActions.TOGGLE_EXCHANGE, payload: { exchange }}),
    direction: direction ? 'buy' : 'sell',
    exchanges: exchangesArray,
    currency,
    premium
  }
}