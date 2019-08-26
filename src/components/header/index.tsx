import React from 'react';
import Logo from '../../images/logo/logo.png';
import MenuIcon from '../../images/menu-icon/menu.png';

const Header = () => {
  return (
      <div className="header">
          <div className="header__logo">
            <img className="header__logo__img" src={Logo}/><h4>omatus</h4>
            <img className="header__menu__img" src={MenuIcon}/>
          </div>
          <div className="header-main">

          </div>
      </div>
  )
};
export default Header;