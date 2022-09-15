import './mobileMenu.style.scss';

interface IMobileMenu {
  mobileMenuState: boolean;
  toogleMenu(): void;
}

export default function MobileMenu({ mobileMenuState, toogleMenu }: IMobileMenu) {

  const openMenu = mobileMenuState ? 'open' : '';
  return (
    <div className={`menu menu--close ${openMenu}`}  onClick={toogleMenu}>
        <div className="menu__icon">
          <div className="menu__line menu__line--1"></div>
          <div className="menu__line menu__line--2"></div>
          <div className="menu__line menu__line--3"></div>
          <div className="menu__line menu__line--4"></div>
          <div className="menu__line menu__line--5"></div>
        </div>
      </div>
  )
}