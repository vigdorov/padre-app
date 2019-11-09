import React from 'react';
import { connect } from 'react-redux';
import {
    addBasket,
    addFood, addOrder,
    checkFood, checkOrders, deleteFood,
    hideModal,
    showModal,
    checkBasket
} from "../../service/store/actions";
import add from '../../images/chef-img/add.png';
import {
    addNewBasket,
    addNewFood,
    addNewOrder,
    getFood,
    getOrders
} from "../../service/store/api.comand";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faAngleDoubleDown, faCheck,
    faEllipsisV,
    faTimes
} from "@fortawesome/free-solid-svg-icons";
import cook from '../../images/chef-img/chef4.png';
import DeleteModal from "../../components/modal/delete.modal";
import {messageService} from "../../service/messageService";
import AddFoodModal from '../../components/modal/add-modal-food';

interface IProps {
    chef: [];
    food: [];
    addFood: any;
    checkFood: any;
    showModal: any;
    optionStyle: string;
    modalVisible: any;
    hideModal: any;
    deleteFood: any;
    basket: [];
    checkBasket: any;
    addBasket: any;
}
interface IState {
    newFood: any;
    maxItemsFood: number;
    basket: any;
}



class FoodPage extends React.Component<IProps, IState> {
    constructor (props: IProps) {
        super (props);
        this.state = {
            newFood :
                {
                    name: '',
                    avatar: cook,
                    price: 0,
                    structure: '',
                    type: '',
                },
            maxItemsFood: 11,
            basket: [],
        }
    }

    componentDidMount() {
        getFood().then((list: any) => {
            this.props.checkFood(list);
        });

    }

    updateServer = () => {
        let newStore = this.props.food;
        addNewFood(newStore)
            .then(() => messageService.success('Отослал', 'Данные на сервере обновлены'))
            .catch(() => messageService.danger('Чет не то', 'Почему-то данные не обновились'))

    };

    updateServerBasket = (order: any) => {
        let newBasket = this.props.basket;
        let name = order.map((item: any) => {
            return item.name
        });

        addNewBasket(newBasket)
            .then(() => messageService.success('Успешно', `Ваш заказ ${name.join(', ')} уже готовится`))
            .catch(() => messageService.danger('Чет не то', 'Почему-то данные отправились'));

    };

    handleCheckFood = (e: any, item: any) => {
        const {basket} = this.state;
        const name: string = e.target.name;
        if (e.target.checked ) {
            basket.push(item);
            console.log(item.price);
            this.setState({basket: basket});
        } else if (!e.target.checked) {
            let item = basket.indexOf(name);
            basket.splice(item, 1);
            this.setState({basket: basket});
        }
    };

    handleAddFood = () => {
        let food = {...this.state.newFood};
        this.props.addFood(food);
        this.props.hideModal();
        setTimeout(()=> this.updateServer(), 1000);
    };


    handleAddOrder = () => {
        let basket = [...this.state.basket];
        this.props.addBasket(basket);
        setTimeout(()=> this.updateServerBasket(basket), 1000);

    };

    handleChangeInput = (e: any) => {
        let target = e.target;
        let value = target.value;
        let targetName = target.name;
        let food = this.state.newFood;
        food[targetName] = value;
        this.setState({newFood: food});
    };

    handleDeleteFood = (index: number) => {
        this.props.deleteFood(index);
        setTimeout(()=> this.updateServer(), 1000);
    };

    handleShowMore = () => {
        this.setState({maxItemsFood: this.state.maxItemsFood + 12})
    };

    render () {
        const {food }= this.props;
        const receipt = ['receipt'];
        let maxItems = food.slice(0, this.state.maxItemsFood);
        let modalType: any = '';
        if (this.props.modalVisible === 3) {
            modalType = (
                <AddFoodModal modalVisible={this.props.modalVisible} hideModal={this.props.hideModal} changeInput={this.handleChangeInput} addFood={this.handleAddFood}/>
            )
        }else if (this.props.modalVisible === 2){
            modalType = (
                <DeleteModal modalVisible={this.props.modalVisible} hideModal={this.props.hideModal}/>
            )
        }
        let { basket} = this.state;
       if (basket.length === 0) {
         receipt.push('hide');
       }else {

       }
        let price: number = 0;

        if (basket.length != 0) {
            basket.map((item: any) => {
                let count: number = Number(item.price);
               price = price + count;
            });

        }



        return (
            <div className="chef_page">
                {modalType}
                <div className={this.props.optionStyle}>
                    <div className={receipt.join(' ')}>
                        <div className="receipt__length">
                            {this.state.basket.length}
                        </div>
                        <div className="receipt__price">
                            {price} Руб
                        </div>

                        <div className="receipt__btn">
                            <button
                                className="btn__success"
                                onClick={() => this.handleAddOrder()}
                            >
                                Подтвердить
                            </button>
                        </div>

                            {basket.map((item: any, index: number) => {
                               return (
                                   <div className="receipt__items" key={index}>
                                       {item.name}, &nbsp;
                                   </div>
                               )
                            }) }

                    </div>
                    <img
                        className={`${this.props.optionStyle}-avatar`}
                        src={add} alt="add"
                    />
                    <div className={`${this.props.optionStyle}-title`} >

                        <h3 className={`${this.props.optionStyle}-h3`}>Добавить еду в меню</h3>
                        <p className={`${this.props.optionStyle}-p`}>У вас есть возможность добавить в меню свое блюдо</p>
                    </div>

                    <button
                        type="button"
                        onClick={() => this.props.showModal(3)}
                        className="btn__add">
                        Добавить
                    </button>

                </div>
                {
                    maxItems.map((item: any, index:number) => {
                        return (
                            <div className={this.props.optionStyle} key={index}>
                                <FontAwesomeIcon
                                    icon={faEllipsisV}
                                    className={`${this.props.optionStyle}-menu`}
                                />
                                <button className="btn__empty-delete" onClick={() => this.handleDeleteFood(index)}>
                                    <FontAwesomeIcon icon={faTimes}/>
                                </button>

                                    <div className='relative'>
                                        <input
                                            type="checkbox"
                                            name = {item.name}
                                            id={item.name}
                                            className='checkbox'
                                            onChange={(event) => this.handleCheckFood(event, item)}/>
                                        <label htmlFor={item.name}> </label>
                                            <img className={`${this.props.optionStyle}-avatar`}
                                                 src={item.avatar} alt=""/>

                                    </div>



                                <div className={`${this.props.optionStyle}-info`}>
                                    <div className={`${this.props.optionStyle}-name`}>
                                        {item.name}
                                    </div>
                                    <div className={`${this.props.optionStyle}-email`}>
                                        {`${item.price} Руб`}
                                    </div>
                                </div>
                                <div className={`${this.props.optionStyle}-description`}>
                                    <div className={`${this.props.optionStyle}-name`}>
                                        {item.type}
                                    </div>
                                    <div className={`${this.props.optionStyle}-email`}>
                                        {item.structure}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                <button className="btn__more" onClick={() => this.handleShowMore()}>
                    <FontAwesomeIcon icon={faAngleDoubleDown}/>
                </button>
            </div>
        );
    }
}
const mapStateToProps = (store: any) => {
    return {
        chef: store.chef,
        food: store.food,
        basket: store.basket,
        optionStyle: store.optionStyle,
        modalVisible: store.modalVisible,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        addFood: (payload: any) => dispatch (addFood(payload)),
        checkFood: (payload: any) => dispatch (checkFood(payload)),
        checkBasket: (payload: any) => dispatch (checkBasket(payload)),
        addBasket: (payload: any) => dispatch (addBasket(payload)),
        showModal: (payload: any) => dispatch (showModal(payload)),
        hideModal: () => dispatch (hideModal()),
        deleteFood: (payload: any) => dispatch (deleteFood(payload)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps) (FoodPage);