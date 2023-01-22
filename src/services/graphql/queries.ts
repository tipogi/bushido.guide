import { gql } from '@apollo/client';

export const SHOW_TOPICS = gql `
  query showTopicsEntryPoint($data: ShowTopicsInput!) {
    showTopics(data: $data) {
      name
      description
      icon
      hash
      type
    }
  }
`

export const SHOW_DOMAINS = gql `
  query showDomainsEntryPoint($data: ShowDomainsInput!) {
    showDomains(data: $data) {
      name
      description
      icon
      hash
      lang
      url
      views
    }
  }
`

export const SHOW_MARKET_OFFERS = gql `
  query showMarketOffersEntryPoint($data: ShowMarketOffersInput!) {
    showMarketOffers(data: $data) {
      offers {
        exchange
        price
        dif
        maker_status
        min_btc
        max_btc
        min_amount
        max_amount
        extra
        method {
          icons
          others
        }
      }
      price
    }
  }
`