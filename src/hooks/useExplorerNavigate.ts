import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function useExplorerNavigate() {
  const navigate = useNavigate()
  const { pathname } = useLocation();

  const explorerNavigate = useCallback((name: string, cardType: string) => {
    const pathTo = `${pathname.split('/explorer/').slice(1)[0]}/${name.toLowerCase()}`
    navigate(pathTo,  { state: { cardType }})
  }, [pathname])

  return explorerNavigate;
}