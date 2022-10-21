import { useMutation } from "@apollo/client"
import { useState } from "react"
import { UPDATE_VISIT } from "~/services/graphql/mutations"
import { IDomainData } from "./interfaces"

interface useUpdateVisitMutationProps {
  views: number
}

export default function useUpdateVisitMutation({ views }: useUpdateVisitMutationProps) {
  const [domainVisits, setVisits] = useState(views)
  const [ updateVisitsMutation, others ] = useMutation(UPDATE_VISIT)

  function updateVisits(data: IDomainData) {
    setVisits(prevView => prevView + 1)
    updateVisitsMutation({ variables: { data }})
  }

  return { domainVisits, updateVisits };
}