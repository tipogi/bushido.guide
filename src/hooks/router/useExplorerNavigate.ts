import { CardType } from '~/constants';
import { useCallback, useMemo } from 'react';
import { useLocation, useNavigate, Location } from 'react-router-dom';
import useDescriptionStorage from './useDescriptionStorage';

const EXPLORER_PATH = '/explorer/'

interface IRouteNavigationState {
  cardType: CardType,
  description: string
}

interface IReturnObject {
  explorerNavigate(name: string, cardType: string, description: string): void;
  pathArray: string[];
  state: IRouteNavigationState;
}

export default function useExplorerNavigate(): IReturnObject {
  const navigate = useNavigate();
  const location = useLocation();
  const pathName = location.pathname;
  // Casting the state prop
  const state = location.state as IRouteNavigationState;
  const { setDescription } = useDescriptionStorage()
  

  const explorerNavigate = useCallback((name: string, cardType: string, description: string) => {
    let pathTo = `${name.toLowerCase()}`;
    // Create the new path if it is not root
    if (cardType !== CardType.ROOT) 
      pathTo = `${pathName.split(EXPLORER_PATH).slice(1)[0]}/${name.toLowerCase()}`
    // Push to another path
    navigate(pathTo, { state: { cardType, description }})
    // Save the topic description to after use it in the breadcrumbs component
    setDescription(pathTo, description)
  }, [pathName])

  const pathArray = useMemo(() => {
    return pathName
      // Exclude from the URL explorer and create an array with the rest topics
      .slice(1).split('/').slice(1)
      // Lower case all the topics to make the query
      .map(topic => `${topic[0].toUpperCase()}${topic.substring(1)}`)
  }, [pathName])

  return { explorerNavigate, pathArray, state };
}