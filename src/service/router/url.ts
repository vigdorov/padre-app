import {
    faClipboardList,
    faHamburger,
    faCocktail,
    faHome,
    faUser,
    faComments,
    faShoppingBasket
} from '@fortawesome/free-solid-svg-icons';

export const URL_HOME = '/';
export const URL_ORDER_LIST = '/order-list';
export const URL_CHEF_PAGE = '/chef-page';
export const URL_CUSTOMER_REVIEWS = '/customer-reviews';
export const URL_MENU_LAYOUT = '/menu-layout';
export const URL_UPLOAD_MENU = '/upload-menu';
export const URL_CHEF_SINGLE_PAGE = '/chef-single-page';
export const URL_BASKET = '/basket';


export const ChefList = faUser;
export const DashboardImg = faHome;
export const CustomerReviews = faComments;
export const MenuLayout = faHamburger;
export const OrderList = faClipboardList;
export const UploadMenu = faCocktail;
export const Basket = faShoppingBasket;

export const NAVI = [
  {
    url: URL_HOME,
    title: 'Главная',
    image: DashboardImg
  },
  {
      url: URL_MENU_LAYOUT,
      title: 'Наше меню',
      image: MenuLayout
  },
  {
    url: URL_ORDER_LIST,
    title: 'Заказы',
    image: OrderList
  },
  {
    url: URL_CHEF_PAGE,
    title: 'Наши повара',
    image: ChefList
  },
    {
        url: URL_CUSTOMER_REVIEWS,
        title: 'Ваши отзывы',
        image: CustomerReviews
    },

    {
        url: URL_UPLOAD_MENU,
        title: 'Загрузить меню',
        image: UploadMenu
    },
    {
        url: URL_BASKET,
        title: 'Корзина',
        image: Basket
    },
];
