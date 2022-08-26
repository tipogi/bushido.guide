import { DocumentNode, useLazyQuery } from '@apollo/client';
import { useCallback, useEffect } from 'react';

import useExplorerNavigate from '../router/useExplorerNavigate';

export default function useExplorerQuery(query: DocumentNode) {
  const [getLeafs, leafList ] = useLazyQuery(query);
  const { pathArray } = useExplorerNavigate();

  const loadSelectedPathLeafs = useCallback((path: string[]) => {
    console.log('loadSelectedPathLeafs')
    getLeafs({ variables: { data: { path }}})
  }, [])

  useEffect(() => {
    console.log('useEffect', pathArray)
    loadSelectedPathLeafs(pathArray)
  }, [pathArray])

  return { leafList }
}