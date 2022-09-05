import { useCallback } from "react";
import { MARKET_FILTER_LOCAL_STORAGE_KEY } from "./useMarketFilterState";

export default function useFilterCurrency () {
  const getSymbol = useCallback((currency: string) => {
    switch(currency) {
      case 'usd':
      case 'cad':
      case 'aud':
        return '$';
      case 'eur':
        return '€';
      case 'gbp':
        return '£';
      default:
        return '';
    }
  }, [])


  const marketStorage = localStorage.getItem(MARKET_FILTER_LOCAL_STORAGE_KEY);
  return marketStorage 
      ? getSymbol(JSON.parse(marketStorage).currency) 
      : '';
}