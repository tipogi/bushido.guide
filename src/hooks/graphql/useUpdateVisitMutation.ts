import { useMutation } from "@apollo/client"
import { useState } from "react"
import { UPDATE_VISIT } from "~/services/graphql/mutations"
import { IDomainData } from "./interfaces"

interface useUpdateVisitMutationProps {
  visits: number
}

export default function useUpdateVisitMutation({ visits }: useUpdateVisitMutationProps) {
  const [domainVisits, setVisits] = useState(visits)
  const [ updateVisitsMutation, others ] = useMutation(UPDATE_VISIT)

  function updateVisits(data: IDomainData) {
    setVisits(prevVisit => prevVisit + 1)
    updateVisitsMutation({ variables: { data }})
  }

  return { domainVisits, updateVisits };
}