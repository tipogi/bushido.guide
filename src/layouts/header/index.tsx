import { useState } from 'react';
import { GoPrimitiveDot } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';
import MobileMenu from '~/layouts/navigation/MobileMenu';

import { ABOUT_ROUTE, EXPLORER_ROUTE, MARKET_ROUTE } from '~/constants';

import './header.style.scss';
import { BiAbacus, BiLibrary } from "react-icons/bi";
import { SiGitbook } from 'react-icons/si';

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
        <a onClick={() => navigateTo(EXPLORER_ROUTE)}>
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
          <div id="bushido-stamp" onClick={() => navigateTo(EXPLORER_ROUTE)}/>
          <a onClick={() => navigateTo(EXPLORER_ROUTE)}><BiLibrary/>Explorer</a>
          <a onClick={() => navigateTo(MARKET_ROUTE)}><BiAbacus/>Market</a>
          <a onClick={() => navigateTo(ABOUT_ROUTE)}><SiGitbook/>About</a>
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