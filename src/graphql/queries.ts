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
    }
  }
`