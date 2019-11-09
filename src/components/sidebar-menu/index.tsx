import React, { useState } from 'react';
import * as URL from "../../service/router/url";
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

interface IProps {
  onChangePage: (page: string) => void;
}

const SideMenu: React.FC<IProps> = (props) => {
    const arr = URL.NAVI;
    const menuArr: any = [];

    let icon: any = document.getElementsByClassName('icon__img');


    const [ select, setSelect ] = useState(0);

    const handleClick = (page: string, pageNumber: number) => {
      props.onChangePage(page);
      setSelect(pageNumber);
    };
    const path: any = window.location.pathname;
    if (path != '/') {
        let newArr: any = [];
        arr.forEach((item: any, index: number) => {
            newArr.push(item.url);
        });
        let index = newArr.indexOf(path);

        if (select != index && index != -1) {
            let pageName = arr[index].title;
            setSelect(index);
            props.onChangePage(pageName);
        }
    }


    arr.forEach((url, index) =>{
      const divClass = [ 'menu-btn' ];
      const iconClass = ['icon__img'];

      if (select === index) {
        divClass.push('focus');
        iconClass.push('hover-icon');
      }

      menuArr.push (
            <Link to={url.url} key={index} >
            <div className={ divClass.join(' ') }
                 onClick={() => handleClick(url.title, index)}
                 onMouseOver = {() => {icon[index].style.color = "#f75757"}}
                 onMouseOut= {() => {icon[index].style.color = "white"}}>
                <div className="icon">
                   <FontAwesomeIcon className={iconClass.join(' ')} icon={url.image}/>
                </div>
                <div className="menu__text">
                    {url.title}
                </div>

            </div>
             </Link>
        )
    });



  return (
   <div className="sidebar-menu">
       <div className="main-list">
           {menuArr}
       </div>
       <div className="login-list">

       </div>
       <div className="social-btn">

       </div>
   </div>
  )
};
export default SideMenu;
