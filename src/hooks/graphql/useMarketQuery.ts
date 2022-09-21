import { useLazyQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import useMarketFilterState from "~/components/pages/market/hooks/useMarketFilterState";
import { ExternalError, OFFER_DIRECTION } from "~/constants";
import { SHOW_MARKET_OFFERS } from "~/services/graphql/queries";
import { filterErrorType } from "./helpers/error.helper";
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
    // Important to keep all in lower case, we might need to add constants
    getMarketOffers({ variables: { data: queryData}})
  }, [reload]);

  const processMarketErrors = () => {
    if (marketOffers.error) {
      return filterErrorType(marketOffers.error)
    } else if (marketOffers.data?.showMarketOffers.price === '0') {
      return ExternalError.INTERNAL_ERROR
    }
    return undefined;
  }

  return { 
    loading: (marketOffers.data === undefined || marketOffers.loading) && marketOffers.error === undefined,
    error: processMarketErrors() ,
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