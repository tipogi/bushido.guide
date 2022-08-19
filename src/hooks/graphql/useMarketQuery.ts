import { useLazyQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { SHOW_MARKET_OFFERS } from "~/services/graphql/queries";
import { IMarketOffersQueryData } from "./interfaces";
let premium = 10;

export default function useMarketQuery() {
  const [reload, setCall] = useState(false);
  const [getMarketOffers, marketOffers ] = useLazyQuery<IMarketOffersQueryData>(SHOW_MARKET_OFFERS);
  console.log('Reload:', reload)

  useEffect(() => {
    console.log('UseEffect lazyQuery Reload:', reload)
    //premium++
    console.log('Premium', premium)
    // Important to keep all in lower case, we might need to add constants
    getMarketOffers({ variables: { data: { fiat: 'usd', direction: 'buy', premium }}})
  }, [reload]);

  return { marketOffers, setCall }
}