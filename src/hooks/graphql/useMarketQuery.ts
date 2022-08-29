import { useLazyQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import useMarketFilterState from "~/components/pages/market/hooks/useMarketFilterState";
import { OFFER_DIRECTION } from "~/constants";
import { SHOW_MARKET_OFFERS } from "~/services/graphql/queries";
import { IMarketOffersQueryData } from "./interfaces";

interface IQueryData {
  fiat: string;
  direction: OFFER_DIRECTION;
  premium: number
}

export default function useMarketQuery() {
  const [reload, setCall] = useState(false);
  const { marketState } = useMarketFilterState();
  const [getMarketOffers, marketOffers ] = useLazyQuery<IMarketOffersQueryData>(SHOW_MARKET_OFFERS);

  useEffect(() => {
    const newData = marketState();
    const queryData: IQueryData = {
      fiat: newData.currency,
      direction: newData.direction ? OFFER_DIRECTION.BUY : OFFER_DIRECTION.SELL,
      premium: newData.premium
    }
    console.log('UseEffect lazyQuery Reload:', queryData)
    // Important to keep all in lower case, we might need to add constants
    getMarketOffers({ variables: { data: queryData}})
  }, [reload]);

  return { 
    loading: marketOffers.data === undefined || marketOffers.loading,
    error: marketOffers.error || marketOffers.data?.showMarketOffers.price === '0',
    data: marketOffers.data && marketOffers.data.showMarketOffers.price !== '0'
      ? marketOffers.data 
      : undefined,
    price: marketOffers.data && marketOffers.data.showMarketOffers.price !== '0' 
      ? marketOffers.data.showMarketOffers.price 
      : marketOffers.loading 
        ? undefined 
        : '0',
    setCall 
  }
}