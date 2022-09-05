import { DocumentNode, useLazyQuery } from '@apollo/client';
import { useCallback, useEffect } from 'react';

import useExplorerNavigate from '../router/useExplorerNavigate';

export enum QUERY_OF {
  TOPIC = 'showTopics',
  DOMAIN = 'showDomains'
}

export default function useExplorerQuery(query: DocumentNode, key: QUERY_OF) {
  const [getLeafs, leafList ] = useLazyQuery(query);
  const { pathArray } = useExplorerNavigate();

  const loadSelectedPathLeafs = useCallback((path: string[]) => {
    getLeafs({ variables: { data: { path }}})
  }, [])

  useEffect(() => {
    loadSelectedPathLeafs(pathArray)
  }, [pathArray])

  return {
    loading: (leafList.data === undefined || leafList.loading) && leafList.error === undefined,
    error: leafList.error,
    data: leafList.data?.[key],
    leafList
  }
}