import React from 'react';
import Logo from '../../images/logo/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faShoppingBasket} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import {URL_BASKET} from "../../service/router/url";

interface IProps{
    basket: any;
    changePage: any;
}

const Header = (props: IProps) => {
    let count: any = [];

  return (
      <div className="header">
          <div className="header__logo">
            <img className="header__logo__img" src={Logo}/><h4>omatus</h4>
            <FontAwesomeIcon className="header__menu__img" icon={faBars}/>
          </div>
          <div className="header__main">
              <Link to={URL_BASKET} onClick={() => props.changePage(6)}>
              <div className="header__basket">
                  <div className="basket__count">
                      {props.basket.map((item: any) => {
                          count.push(...item);
                      })}
                      {count.length}
                  </div>
                  <FontAwesomeIcon icon={faShoppingBasket} />
              </div>
              </Link>

          </div>
      </div>
  )
};
export default Header;