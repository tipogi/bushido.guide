import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { EXPLORER_ROUTE } from "~/constants";

export default function Index() {

  const navigate = useNavigate()

  useEffect(() => {
    navigate(EXPLORER_ROUTE, { replace: true })
  });

  return <span></span>
}