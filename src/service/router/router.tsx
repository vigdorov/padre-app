import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as URL from './url';

import { Dashboard } from '../../page/dashboard';
import { OrderList } from '../../page/order-list';
import ChefPage from '../../page/chef-page';
import { CustomerReviews } from '../../page/customer-reviews';
import { MenuLayout } from '../../page/menu-layout';
import { UploadMenu } from '../../page/upload-menu';
import { NotFound } from '../../page/404';
import ChefSinglePage  from '../../page/chef-single-page';

export default (
  <Switch>
    <Route exact path={URL.URL_HOME} component={Dashboard} />
    <Route exact path={URL.URL_ORDER_LIST} component={OrderList} />
    <Route exact path={URL.URL_CHEF_PAGE} component={ChefPage} />
      <Route exact path={URL.URL_CHEF_SINGLE_PAGE} component={ChefSinglePage} />
    <Route exact path={URL.URL_CUSTOMER_REVIEWS} component={CustomerReviews} />
    <Route exact path={URL.URL_MENU_LAYOUT} component={MenuLayout} />
    <Route exact path={URL.URL_UPLOAD_MENU} component={UploadMenu} />
    <Route component={NotFound} />
  </Switch>
);
