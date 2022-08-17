import { useLazyQuery } from "@apollo/client";
import { useEffect } from "react";
import { SHOW_MARKET_OFFERS } from "~/services/graphql/queries";

export default function useMarketQuery() {
  const [getMarketOffers, marketOffers ] = useLazyQuery(SHOW_MARKET_OFFERS);

  useEffect(() => {
    // Important to keep all in lower case
    getMarketOffers({ variables: { data: { fiat: 'eur', direction: 'sell', premium: 10 }}})
  }, []);

  return { marketOffers }
}