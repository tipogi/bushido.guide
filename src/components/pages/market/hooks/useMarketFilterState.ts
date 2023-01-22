import { useCallback } from "react";
import { OrderTableFrom, TableHeader } from "../components/table/MarketHeader";
import { IReducerState } from "./useFilterReducer";

export const MARKET_FILTER_LOCAL_STORAGE_KEY = 'bs.market';

const DEFAULT_FILTER: IReducerState = { 
  // true: BUY, false: SELL
  direction: true,
  exchanges: {
    'hodlhodl': true,
    'bisq': true,
    'robosats': true,
    'lnp2pbot': true
  },
  currency: 'eur',
  premium: 10,
  sort: {
    colum: TableHeader.Premium,
    from: OrderTableFrom.Min
  }
}

function hasAllTheKeys (bushidoStore: string) {
  const default_keys = Object.keys(DEFAULT_FILTER);
  return JSON.stringify(default_keys)==JSON.stringify(Object.keys(JSON.parse(bushidoStore)));
}

export default function useMarketFilterState() {

  const marketState = useCallback<() => IReducerState>(() => {
    const bushidoStore = localStorage.getItem(MARKET_FILTER_LOCAL_STORAGE_KEY);
    if (bushidoStore && hasAllTheKeys(bushidoStore)) {
      return JSON.parse(bushidoStore);
    } else {
      const marketFilterInitState = DEFAULT_FILTER;
      localStorage.setItem(MARKET_FILTER_LOCAL_STORAGE_KEY, JSON.stringify(marketFilterInitState));
      return marketFilterInitState;
    }
  }, [])

  return { marketState }
}