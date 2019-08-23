import React from 'react';
import Router from './service/router';
import { Link } from 'react-router-dom';
import * as URL from './service/url';
import './styles/index.scss';

const App = () => {
  return (
    <div>
      <div>
        <Link to={URL.URL_HOME}>Dashboard</Link>
        <Link to={URL.URL_ORDER_LIST}>Order List</Link>
        <Link to={URL.URL_CHEF_PAGE}>Chef Page</Link>
      </div>
      {Router}
    </div>
  );
};

export default App;
