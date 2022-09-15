import { useState } from 'react';
import { GoPrimitiveDot } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';
import MobileMenu from '~/layouts/navigation/MobileMenu';

import { EXPLORER_ROUTE, HOME_ROUTE, MARKET_ROUTE } from '~/constants';

import './header.style.scss';

const Header: React.FC = () => {

  const [ mobileMenu, setMobileMenu ] = useState(false);
  const navigate = useNavigate();

  // We need to mutate the state so, instead of Link component of 
  // react-router, we will use the navigate hook
  const navigateTo = (url: string) => {
    setMobileMenu(false)
    navigate(url)
  }

  // Toggle responsive menu
  const toogleMenu = () => setMobileMenu(prevState => !prevState);

  const renderRoot = () => {
    return (
        <a onClick={() => navigateTo(HOME_ROUTE)}>
          <span>bushido</span>
          <span id="dot"><GoPrimitiveDot/></span>
          <span>guide</span>
        </a>
    )
  }

  const mobileClass = mobileMenu? 'active' : '';

  return (
    <div id="bushido-header">
      <div id="name-container">
        { renderRoot() }
      </div>
      <div id="menu-container" className={`${mobileClass}`}>
        <nav id="menu-drawer__body">
          <div id="bushido-stamp" onClick={() => navigateTo(HOME_ROUTE)}/>
          <a onClick={() => navigateTo(EXPLORER_ROUTE)}>Explorer</a>
          <a onClick={() => navigateTo(MARKET_ROUTE)}>Market</a>
        </nav>
        <div id="menu-drawer__additional">
          { renderRoot() }
        </div>
      </div>
      <MobileMenu mobileMenuState={mobileMenu} toogleMenu={toogleMenu}/>
    </div>
  )
}

export default Header;