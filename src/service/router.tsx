import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as URL from './url';

import { Dashboard } from '../page/dashboard';
import { OrderList } from '../page/order-list';
import { ChefPage } from '../page/chef-page';
import { NotFound } from '../page/404';

export default (
  <Switch>
    <Route exact path={URL.URL_HOME} component={Dashboard} />
    <Route exact path={URL.URL_ORDER_LIST} component={OrderList} />
    <Route exact path={URL.URL_CHEF_PAGE} component={ChefPage} />
    <Route component={NotFound} />
  </Switch>
);
