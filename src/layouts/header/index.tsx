import { selectionSetMatchesResult } from '@apollo/client/cache/inmemory/helpers';
import { useState } from 'react';
import { GoPrimitiveDot } from 'react-icons/go';
import { Link, useNavigate } from 'react-router-dom';

import { EXPLORER_ROUTE, HOME_ROUTE, MARKET_ROUTE } from '~/constants';
import './header.style.scss';

const Header: React.FC = () => {

  const [ mobileMenu, setMobileMenu ] = useState(false);
  const navigate = useNavigate();

  const mobileClass = mobileMenu? 'active' : '';
  const openMenu = mobileMenu ? 'open' : '';

  const renderRoot = () => {
    return (
        <Link to={HOME_ROUTE}>
          <span>bushido</span>
          <span id="dot"><GoPrimitiveDot/></span>
          <span>guide</span>
        </Link>
    )
  }

  const navigateTo = (url: string) => {
    setMobileMenu(false)
    navigate(url)
  }

  return (
    <div id="bushido-header">
      <div id="name-container">
        { renderRoot() }
      </div>
      <div id="pages-container" className={`${mobileClass}`}>
        <nav>
          {/*<Link to={EXPLORER_ROUTE}>Explorer</Link>
          <Link to={MARKET_ROUTE}>Market</Link>*/}
          <img src="/public/img/cover/bushido_stamp.png" onClick={() => navigateTo(HOME_ROUTE)}/>
          <a onClick={() => navigateTo(EXPLORER_ROUTE)}>Explorer</a>
          <a onClick={() => navigateTo(MARKET_ROUTE)}>Market</a>
        </nav>
        <div id="mobile-name-container">
          { renderRoot() }
        </div>
      </div>
      <div className={`menu menu--close5 ${openMenu}`}  onClick={() => setMobileMenu(prevState => !prevState)}>
        <div className="menu__icon">
          <div className="menu__line menu__line--1"></div>
          <div className="menu__line menu__line--2"></div>
          <div className="menu__line menu__line--3"></div>
          <div className="menu__line menu__line--4"></div>
          <div className="menu__line menu__line--5"></div>
        </div>
      </div>
    </div>
  )
}

export default Header;