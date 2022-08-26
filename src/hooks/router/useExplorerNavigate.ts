import { CardType } from '~/constants';
import { useCallback, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useDescriptionStorage from './useDescriptionStorage';

const EXPLORER_PATH = '/explorer/'

export default function useExplorerNavigate() {
  const navigate = useNavigate();
  const { pathname, state } = useLocation();
  const { findDescription, setDescription } = useDescriptionStorage()
  

  const explorerNavigate = useCallback((name: string, cardType: string, description: string) => {
    let pathTo = `${name.toLowerCase()}`;
    // Create the new path if it is not root
    if (cardType !== CardType.ROOT) 
      pathTo = `${pathname.split(EXPLORER_PATH).slice(1)[0]}/${name.toLowerCase()}`
    // Push to another path
    navigate(pathTo, { state: { cardType, description }})
    console.log(pathTo);
    setDescription(pathTo, description)
  }, [pathname])

  const pathArray = useMemo(() => {
    return pathname
      // Exclude from the URL explorer and create an array with the rest topics
      .slice(1).split('/').slice(1)
      // Lower case all the topics to make the query
      .map(topic => `${topic[0].toUpperCase()}${topic.substring(1)}`)
  }, [pathname])

  return { explorerNavigate, pathArray, state };
}