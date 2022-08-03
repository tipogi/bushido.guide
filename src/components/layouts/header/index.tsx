import { GoPrimitiveDot } from "react-icons/go";
import { Link } from "react-router-dom";

import { EXPLORER_ROUTE, HOME_ROUTE, MARKET_ROUTE } from "@/constants";
import './header.style.scss';

const Header: React.FC = () => {
  return (
    <div id="bushido-header">
      <div id="name-container">
        <span>bushido</span>
        <span id="dot"><GoPrimitiveDot/></span>
        <span>guide</span>
      </div>
      <div id="pages-container">
        <nav>
          <Link to={HOME_ROUTE}>Home</Link>
          <Link to={EXPLORER_ROUTE}>Explorer</Link>
          <Link to={MARKET_ROUTE}>Market</Link>
        </nav>
      </div>
    </div>
  )
}

export default Header;