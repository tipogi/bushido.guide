import { useLazyQuery } from "@apollo/client";
import { useCallback, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { SHOW_DOMAINS, SHOW_TOPICS } from "../graphql/queries";

interface IState {
  cardType: string
}

export default function useTopicQuery() {
  const [getTopics, topicArray ] = useLazyQuery(SHOW_TOPICS);
  const [getDomains, domainArray ] = useLazyQuery(SHOW_DOMAINS);
  const { pathname, state } = useLocation();

  const loadTopics = useCallback((path: string[]) => {
    getTopics({ variables: { data: { path }}})
  }, [])

  const loadDomains = useCallback((path: string[]) => {
    getDomains({ variables: { data: { path }}})
  }, [])

  useEffect(() => {
    console.log(state, pathname)
    const path = pathname.slice(1).split('/').slice(1).map(topic => `${topic[0].toUpperCase()}${topic.substring(1)}`)
    if (!state || state.cardType === 'Branch') {
      console.log('load topics')
      loadTopics(path);
    } else {
      console.log('Load domains')
      loadDomains(path);
    }
  }, [pathname])

  return { topicArray }
}