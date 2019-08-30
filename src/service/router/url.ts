export const URL_HOME = '/';
export const URL_ORDER_LIST = '/order-list';
export const URL_CHEF_PAGE = '/chef-page';
export const URL_CUSTOMER_REVIEWS = '/customer-reviews';
export const URL_MENU_LAYOUT = '/menu-layout';
export const URL_UPLOAD_MENU = '/upload-menu';

export const ChefList = require('../../images/menu-icon/chef-list.png');
export const DashboardImg = require('../../images/menu-icon/dashboard.png');
export const CustomerReviews = require('../../images/menu-icon/customer-reviews.png');
export const MenuLayout = require('../../images/menu-icon/menu-layout.png');
export const OrderList = require('../../images/menu-icon/order-list.png');
export const UploadMenu = require('../../images/menu-icon/upload-menu.png');

export const NAVI = [
  {
    url: URL_HOME,
    title: 'Dashboard',
    image: DashboardImg
  },
  {
      url: URL_MENU_LAYOUT,
      title: 'Menu Layout',
      image: MenuLayout
  },
  {
    url: URL_ORDER_LIST,
    title: 'Order list',
    image: OrderList
  },
  {
    url: URL_CHEF_PAGE,
    title: 'Chef page',
    image: ChefList
  },
    {
        url: URL_CUSTOMER_REVIEWS,
        title: 'Customer Reviews',
        image: CustomerReviews
    },

    {
        url: URL_UPLOAD_MENU,
        title: 'Upload Menu',
        image: UploadMenu
    },
];
