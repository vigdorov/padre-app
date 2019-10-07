import React from 'react';
import Logo from '../../images/logo/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
      <div className="header">
          <div className="header__logo">
            <img className="header__logo__img" src={Logo}/><h4>omatus</h4>
            <FontAwesomeIcon className="header__menu__img" icon={faBars}/>
          </div>
          <div className="header-main">

          </div>
      </div>
  )
};
export default Header;