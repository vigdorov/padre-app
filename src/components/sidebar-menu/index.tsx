import React from 'react';
import * as URL from "../../service/url";
import { Link } from 'react-router-dom';

interface IProps {
  onChangePage: (page: string) => void;
}

const SideMenu: React.FC<IProps> = (props) => {
    const arr = URL.NAVI;
    const menuArr: any = [];

    let icon: any = document.getElementsByClassName('icon__img');

    const handleClick = (page: string) => {
      props.onChangePage(page);
    };

    arr.forEach((url, index) =>{
        menuArr.push (
            <Link to={url.url} key={index} >
            <div className="menu-btn"
                 onClick={() => handleClick(url.title)}
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
