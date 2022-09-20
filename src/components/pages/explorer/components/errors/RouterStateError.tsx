import { FaRobot } from "react-icons/fa";
import { CgBowl } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { EXPLORER_ROUTE } from "~/constants";

export default function RouteStateError() {

  const navigate = useNavigate();

  // Navigate to explorer root and clear the previous history
  const redirectToRoot = () => {
    navigate(EXPLORER_ROUTE, { 
      state: {
        cardType: 'Root',
        description: undefined
      },
      replace: true
    })
  }

  return (
    <div className="no-card-defined-error">
      <FaRobot/>
      <h1>We could not render the requested content because the app might miss some values...</h1>
      <div>
        <button onClick={redirectToRoot}><CgBowl/>Feed Me</button>
      </div>
    </div>
  )
}