import { gql } from "@apollo/client";

export const UPDATE_VISIT = gql `
  mutation updateVisit($data: DomainVisitInput!) {
    updateDomainVisit(data: $data)
  }
`