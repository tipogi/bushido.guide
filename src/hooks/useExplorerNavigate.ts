import { CardType } from '~/constants';
import { useCallback, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const EXPLORER_PATH = '/explorer/'

export default function useExplorerNavigate() {
  const navigate = useNavigate()
  const { pathname } = useLocation();

  const explorerNavigate = useCallback((name: string, cardType: string) => {
    let pathTo = `${name.toLowerCase()}`;
    // Create the new path if it is not root
    if (cardType !== CardType.ROOT) 
      pathTo = `${pathname.split(EXPLORER_PATH).slice(1)[0]}/${name.toLowerCase()}`
    // Push to another path
    navigate(pathTo, { state: { cardType }})
  }, [pathname])

  const pathArray = useMemo(() => {
    return pathname
      // Exclude from the URL explorer and create an array with the rest topics
      .slice(1).split('/').slice(1)
      // Lower case all the topics to make the query
      .map(topic => `${topic[0].toUpperCase()}${topic.substring(1)}`)
  }, [pathname])

  return { explorerNavigate, pathArray };
}