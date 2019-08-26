import React from 'react';
import Router from './service/router';
import { Link } from 'react-router-dom';
import * as URL from './service/url';
import './styles/index.scss';
import SideMenu from './components/sidebar-menu';
import Header from './components/header';
import InfoLine from './components/info-line';


const App = () => {
  return (
    <div>
        <Header/>
        <div className="container">
            <SideMenu />
            <div className="content">
                <InfoLine />
            <div className="page-content">
                {Router}
            </div>

            </div>


        </div>

    </div>
  );
};

export default App;
