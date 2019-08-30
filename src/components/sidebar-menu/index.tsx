import React, { useState } from 'react';
import * as URL from "../../service/router/url";
import { Link } from 'react-router-dom';

interface IProps {
  onChangePage: (page: string) => void;
  showMessage: (page: string) => void;
}

const SideMenu: React.FC<IProps> = (props) => {
    const arr = URL.NAVI;
    const menuArr: any = [];

    let icon: any = document.getElementsByClassName('icon__img');
    let btn: any = document.getElementsByClassName("menu-btn");

    const [ select, setSelect ] = useState(1);

    const handleClick = (page: string, pageNumber: number) => {
      props.onChangePage(page);
      setSelect(pageNumber);
    };


    arr.forEach((url, index) =>{
      const divClass = [ 'menu-btn' ];

      if (select === index) {
        divClass.push('focus');
      }

      menuArr.push (
            <Link to={url.url} key={index} >
            <div className={ divClass.join(' ') }
                 onClick={() => handleClick(url.title, index)}
                 onMouseOver = {() => {icon[index].style.display = "flex"}}
                 onMouseOut= {() => {icon[index].style.display = "none"}}>
                <div className="icon">
                    <img className="icon__img" src={url.image} />
                </div>

                {url.title}
            </div>
             </Link>
        )
    });



  return (
   <div className="sidebar-menu">
       <div className="main-list">
           <span>MAIN</span> <br/>
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
