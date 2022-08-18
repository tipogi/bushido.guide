import { useLazyQuery } from "@apollo/client";
import { useEffect } from "react";
import { SHOW_MARKET_OFFERS } from "~/services/graphql/queries";
import { IMarketOffersQueryData } from "./interfaces";

export default function useMarketQuery() {
  const [getMarketOffers, marketOffers ] = useLazyQuery<IMarketOffersQueryData>(SHOW_MARKET_OFFERS);

  useEffect(() => {
    // Important to keep all in lower case, we might need to add constants
    getMarketOffers({ variables: { data: { fiat: 'usd', direction: 'buy', premium: 10 }}})
  }, []);

  return { marketOffers }
}