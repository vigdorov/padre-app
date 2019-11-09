import React from 'react';
import {getOrders} from "../../service/store/api.comand";
import {
    faBoxOpen, faListOl, faPizzaSlice,
    faTruck, faTruckLoading,
    faUtensils
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Paginator from "../../components/paginator/paginator.component";

interface IState {
    orders: [];
    pay: any;
    delivery: any;
    icon: any;
    list: any;
}
interface IProps {

}

class OrderList extends React.Component<IProps, IState>{
    constructor (props: IProps){
        super (props);
        this.state = {
           orders: [],
            pay: {
                cash: 'Наличные',
                card: 'Безнал'
            },
            delivery: {
                take: 'С собой',
                place: 'В зале',
                delivery: 'Доставка',
            },
            icon: {
                take: faBoxOpen,
                place: faUtensils,
                delivery: faTruck,
            },
            list: [],
        }
    }

    componentDidMount() {
       getOrders().then((data: any) => {
           this.setState({orders: data});
           this.handleChangeList(5)
       });

    }
    handleChangeList = (a: number) => {
      let sort = this.state.orders.slice(a-5, a);
      this.setState({list: sort});
    };

    render () {
        const {orders, pay, delivery, icon, list} = this.state;
        const orderList: any = [];
        let take: any = [];
        let place: any = [];
        let del: any = [];
        let topFood: any = [];
console.log('orders', orders);
        orders.map((item: any, index: number) => {

            if (item.orders != undefined) {
                topFood.push(item.orders);
            }

            if (item.delivery === 'take') {
                take.push(item.id);
            } else if (item.delivery === 'place') {
                place.push(item.id);
            } else if (item.delivery === 'delivery') {
                del.push(item.id);
            }
        });
            list.map((item: any, index: number) => {
                const delStyle = ["order__delivery"];
                if (item.delivery === 'take'){
                   delStyle.push('blue');
                }else if (item.delivery === 'place'){
                   delStyle.push('green');
                }else if (item.delivery === 'delivery'){
                    delStyle.push('orange');
                }
                console.log('статистика', del, take, place, topFood );
                orderList.push(
                    <div className="order__item" key={index}>
                        <div className="order__icon">
                            <FontAwesomeIcon  icon={icon[item.delivery]}/>
                        </div>
                        <div className="order__id">
                            #{item.id}
                        </div>
                        <div className="order__total">
                           <span>
                               {item.total}
                           </span>  Рублей
                        </div>
                        <div className={delStyle.join(' ')}>
                            {delivery[item.delivery]}
                        </div>
                        <div className="order__pay">
                            {pay[item.pay]}
                        </div>

                    </div>
                )
            });
                return (

    <div className="order__container">
        <div className="order__statistic">
            <div className="order__statistic__item">
                <div className="statistic__icon blue-text">
                    <FontAwesomeIcon icon={faTruckLoading}/>
                </div>
                <div className="statistic__info">
                    <h3 className="blue-text">Доставку выбрали</h3>
                    {del.length} заказов
                </div>
            </div>
            <div className="order__statistic__item">
                <div className="statistic__icon green-text">
                    <FontAwesomeIcon icon={faListOl}/>
                </div>
                <div className="statistic__info">
                    <h3 className="green-text">Всего заказов</h3>
                    #{orders.length}
                </div>
            </div>

            <div className="order__statistic__item">
                <div className="statistic__icon orange-text">
                    <FontAwesomeIcon icon={faPizzaSlice}/>
                </div>
                <div className="statistic__info">
                    <h3 className="orange-text">Top food</h3>
                    Всего  заказов
                </div>

            </div>
        </div>
        <div className="order__assessment">

        </div>
                       {orderList}
                       <div className="paginator">
                           <Paginator arr={orders} select={this.handleChangeList} items={5}/>
                       </div>
    </div>
    );

}


}
export default OrderList;