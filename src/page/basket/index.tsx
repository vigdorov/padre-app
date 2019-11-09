import React from 'react';
import {connect} from "react-redux";
import {
    getBasket,
    getOrders,
    addNewOrder,
    addNewBasket
} from "../../service/store/api.comand";
import FormItem from "../../components/form-item/form-item-input.component";
import {addOrder, checkOrders, addBasket, clearBasket} from "../../service/store/actions";
import {messageService} from "../../service/messageService";
import {Link} from "react-router-dom";
import {URL_CUSTOMER_REVIEWS, URL_HOME} from "../../service/router/url";

interface IProps{
orders: any;
checkOrders: any;
addOrder: any;
addBasket: any;
basket: any;
clearBasket: any;
}
interface IInfo{
    name: string;
    phone: number;
    address: string;
}

interface IState{
    orders: any;
    page: number;
    filter: any;
    total: number;
    delivery: string;
    pay: string;
    id: number;
    info: IInfo;
}

class Basket extends React.Component <IProps, IState>{
    constructor (props: IProps) {
        super (props);
        this.state = {
            orders: [],
            page: 1,
            filter: [],
            total: 0,
            delivery: '',
            pay: '',
            id: 1,
            info: {
                name: '',
                phone: 0,
                address: '',
            },

        }
    }

    componentDidMount() {
        getBasket().then((data: any) => {
            let allFood: any = [];
            data.map((item: any) => {
               allFood.push(...item);
            });
            this.setState({orders: allFood});
        });
        getOrders().then((orders: any) => {
            if (orders != undefined) {
                let id = orders.length + 1;
                this.props.checkOrders(orders);
                this.setState({id: id});
            }
        })
    }

    handleChangePage = (num: number) => {
        this.setState({page: num});
    };

    handleAddTotal = (summ: number) => {
        this.handleChangePage(2);
        this.setState({total: summ});
    };

    handleAddOrder = () => {
        if (this.state.delivery === 'delivery' && this.state.page != 5){
            return  this.handleChangePage(5);
        }
        else if (this.state.delivery === 'delivery' && this.state.page === 5){
            return this.newOrder();
        }
        else {
          return this.newOrder();
        }
    };

    newOrder = () => {
        let {id, info, total, delivery, orders, pay} = this.state;
      let newOrder = {
          id: id,
          info: info,
          total: total,
          delivery: delivery,
          orders: orders,
          pay: pay,
      };
        this.props.addOrder(newOrder);
        this.props.clearBasket();
        this.handleChangePage(6);
        setTimeout(()=> this.orderUpdate(), 3000);
    };
    orderUpdate = () => {
        let orders = this.props.orders;
        addNewOrder(orders)
            .then(() => messageService.success('Отослал', 'Данные о заказах обновлены'))
            .catch(() => messageService.danger('Чет не то', 'Почему-то данные о заказах не обновились'));
        let basket = this.props.basket;
        addNewBasket(basket)
            .then(() => messageService.success('Отослал', 'Корзину очистил'))
            .catch(() => messageService.danger('Чет не то', 'Почему-то Корзина полная'));
    };

    handleAddInfo = (e: any) => {
        let target = e.target;
        let name = target.name;
        let value: string = target.value;
        let info: any = this.state.info;
        info[name] = value;
        this.setState({info: info});
    };


    handleDeliverySelect = (e: any) => {
        let name = e.target.name;
        this.setState({delivery: name});
        this.handleChangePage(3);
    };
    handlePaySelect = (e: any) => {
        let name = e.target.name;
        this.setState({pay: name});
        this.handleChangePage(4);
    };

    render () {
        let { page, orders, filter, total, delivery, pay, id, info } = this.state;
        let rub = 0;
        let summ = 0;
        let totalPrice = (item: number) => {
            summ += item;
        };
        filter = orders.filter((item: any, index: number, arr: any) => {
           return index === arr.findIndex((i: any) => (i.name === item.name))
        });
       let count = (arr: any, item: any): any => {
          let newArr = arr.filter((food: any) => food.name === item.name);
          return newArr.length;
       };
        const btn = [1, 2, 3, 4, 5];
        const btnMenu: any = [];

        btn.forEach((item, index: number) => {
            let basketBtn: any = ['basket__number-btn'];
            if (page === item) {
                basketBtn.push('select')
            }
            if (delivery != 'delivery' && item === 5) {
                basketBtn.push('hide')
            }
            btnMenu.push(
                <button
                    type="button"
                    className={basketBtn.join(' ')}
                    onClick={() => this.handleChangePage(item)}
                    key={index}
                >{item}</button>
            )
        });

       let content = () => {
           if (page === 1) {
             return(
                 <div className="basket__content__item">
                     <h3>Ваш заказ</h3>
                     <div className="basket__content__list">
                         {filter.map((item: any, index: number, arr: any) => {
                             return (
             <div className="basket__content__order" key={index}>
                  <div className="basket__content__order-photo">
                      <img src={item.avatar} alt=""/>
                  </div>
                 <div className="basket__content__order-name">
                     {item.name}
                 </div>
                 <div className="basket__content__order-count">
                     {count(orders, item)} шт
                 </div>
                 <div className="basket__content__order-count">
                     {rub = item.price * count(orders, item)} руб {totalPrice(rub)}
                 </div>
             </div>
                             )
                         })}
                     </div>
                     <div className="basket__total">
                         <span>Итого : &nbsp;</span>
                         { summ } Рублей
                     </div>
                     <div className="basket__footer">
                         <span>Всё верно?</span>
                         <button
                             type="button"
                             className="btn__success"
                             onClick={()=> this.handleAddTotal(summ)}
                         >
                             Подтвердить</button>
                     </div>
                   </div>
             )
           }else if (page === 2) {
               return(
                   <div className="basket__content__item">
                       <h3>Как будете забирать заказ?</h3>
                       <div className="basket__content__list">
                           <input
                               type="checkbox"
                               name="place"
                               id="place"
                               className="basket__checkbox"
                               onClick={(event) => this.handleDeliverySelect(event)}
                           />
                           <label htmlFor="place">
                               <p>
                                   Я буду кушать в зале
                               </p>
                       </label>
                           <input
                               type="checkbox"
                               name="take"
                               id="take"
                               className="basket__checkbox"
                               onClick={(event) => this.handleDeliverySelect(event)}
                           />
                           <label htmlFor="take">
                               <p>
                                   Возьму с собой
                               </p>
                           </label>
                           <input
                               type="checkbox"
                               name="delivery"
                               id="delivery"
                               className="basket__checkbox"
                               onClick={(event) => this.handleDeliverySelect(event)}
                           />
                           <label htmlFor="delivery">
                               <p>
                                   Доставка
                               </p>
                           </label>
                       </div>
                   </div>
               )
           }else if (page === 3) {
               if (total === 0) {
                   return (
                       <h3>Так у вас нечего оплачивать!</h3>
                   )
               } else {
                   return(
                       <div className="basket__content__item">
                           <h3>Как собираетесь оплачивать?</h3>
                           <div className="basket__content__list">
                               <input
                                   type="checkbox"
                                   name="cash"
                                   id="cash"
                                   className="basket__checkbox"
                                   onClick={(event) => this.handlePaySelect(event)}
                               />
                               <label htmlFor="cash">
                                   <p>
                                       Наличными
                                   </p>
                               </label>
                               <input
                                   type="checkbox"
                                   name="card"
                                   id="card"
                                   className="basket__checkbox"
                                   onClick={(event) => this.handlePaySelect(event)}
                               />
                               <label htmlFor="card">
                                   <p>
                                       Карта
                                   </p>
                               </label>
                           </div>
                       </div>
                   )
               }
           }else if (page === 4) {
               if (pay === 'cash') {
                   return (
                       <div className="basket__content__item">
                           <h3>Оплата</h3>
                           <h3>Ваш заказ № {id}</h3>
                           <p>
                               Для оплаты подойдите к кассе и назовите номер заказа
                           </p>
                           <div className="basket__footer">
                               <span>{total} Рублей</span>
                               <button
                                   type="button"
                                   className="btn__success"
                                   onClick={()=> this.handleAddOrder()}
                               >
                                   Оплатить</button>
                           </div>
                       </div>
                   )
               }
               else if (pay === 'card') {
                   return (
                       <div className="basket__content__item">
                           <h3>Оплата</h3>
                           <h3>Ваш заказ № {id}</h3>
                           <p>
                               Вставьте карту
                           </p>
                           <div className="basket__footer">
                               <span>{total} Рублей</span>
                               <button
                                   type="button"
                                   className="btn__success"
                                   onClick={()=> this.handleAddOrder()}
                               >
                                   Оплатить</button>
                           </div>
                       </div>
                   )
               }

           }
           else if (page === 5) {

                   return (
                       <div className="basket__content__item">
                           <h3>Доставка</h3>
                           <h3>Ваш заказ № {id}</h3>
                         <div className="basket__address">
                             <p>
                                 Введите данные для доставки
                             </p>
                             <FormItem type={'text'} title={'Введите имя:'} placeholder={'Введите имя'} changeValue={(event: any) => this.handleAddInfo(event)} name={'name'} special={'max-width'}/>
                             <FormItem type={'tel'} title={'Введите номер:'} placeholder={' '} changeValue={(event: any) => this.handleAddInfo(event)} name={'phone'} special={'max-width'}/>

                             <FormItem type={'text'} title={'Введите адрес:'} placeholder={' '} changeValue={(event: any) => this.handleAddInfo(event)} name={'address'} special={'max-width'}/>

                         </div>

                           <div className="basket__footer">
                               <span>Заказ #{id} на сумму {total} рублей с доставкой по адресу {info.address}</span>
                               <button
                                   type="button"
                                   className="btn__success"
                                   onClick={()=> this.handleAddOrder()}
                               >
                                   Подтвердить</button>
                           </div>
                       </div>
                   )
           }
           else if (page === 6) {

               return (
                   <div className="basket__content__item">
                       <h3>Готово</h3>
                       <h3>Ваш заказ принят в обработку</h3>
                       <div className="basket__address">
                           <p>
                              Приятного аппетита!
                           </p>
                           <Link to={URL_CUSTOMER_REVIEWS}>
                               <button
                                   type="button"
                                   className="btn__success large"
                               >
                                   Оставить отзыв</button>
                           </Link>
                           <Link to={URL_HOME}>
                               <button
                                   type="button"
                                   className="btn__success large lite"
                               >
                                   На главную</button>
                           </Link>
                       </div>

                       </div>
               )
           }
       };
        return (
            <div className="basket__container">

                <div className="basket__number">
                    {btnMenu}
                </div>
               <div className="basket__box">
                   {content()}
               </div>
            </div>
        );
    }

}
const mapStateToProps = (store: any) => {
return {
    orders: store.orders,
    basket: store.basket,
}
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        checkOrders: (payload: any) => dispatch (checkOrders(payload)),
        addOrder: (payload: any) => dispatch (addOrder(payload)),
        addBasket: (payload: any) => dispatch (addBasket (payload)),
        clearBasket: () => dispatch (clearBasket ()),
    }
};
export default connect (mapStateToProps, mapDispatchToProps) (Basket);
