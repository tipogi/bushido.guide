import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { CardType } from "~/constants";
import useDescriptionStorage from "./useDescriptionStorage";

interface IReturnBreadcrumbHook {
  navigateToCrumbTopic(pathArray: string[], cardType: CardType): void
}

export default function useBreadcrumbsNavigate(): IReturnBreadcrumbHook {
  const navigate = useNavigate();
  const { findDescription } = useDescriptionStorage()

  const navigateToCrumbTopic = useCallback((pathArray: string[], cardType: CardType) => {
    const pathWithSlash = pathArray.map(topic => topic.toLowerCase()).toString().replace(/,/g,'/');
    const description = findDescription(pathWithSlash)
    navigate(pathWithSlash, { state: { cardType, description }})
  }, [])

  return { navigateToCrumbTopic }
}