import React from 'react';
import Modal from "./modal";
import chefImg from '../../images/chef-img/chef4.png';
import FormItem from "../form-item/form-item-input.component";
import FormItemSelect from "../form-item/form-item-select.component";
import FormItemTextArea from "../form-item/form-item-textarea.component";
import {getChef, getFood} from "../../service/store/api.comand";

interface IProps{
    modalVisible: any;
    hideModal: any;
    changeInput: any;
    addChef: any;
}

interface IState {
    options: any;
    food: any;
    chef: any;
    index: any;
}
class EditModal extends React.Component <IProps, IState> {
    constructor (props: IProps) {
        super (props);
        this.state = {
            options: [
                {
                    name: 'Новичек',
                    value: 'rang1',
                },
                {
                    name: 'Могу яичницу замутить',
                    value: 'rang2',
                },
                {
                    name: 'Освоил духовку',
                    value: 'rang3',
                },
                {
                    name: 'Помошник повара',
                    value: 'rang4',
                },
                {
                    name: 'шеф повар',
                    value: 'rang5',
                }
            ],
            food: [],
            chef: [],
            index: null,
        }
    }

    componentDidMount() {
        getFood().then((data: any) => {
            this.setState({food: data});
            console.log('food in add modal', this.state.food);
        });
        getChef().then((data: any) => {
            this.setState({chef: data});
            console.log('chef in add modal', this.state.chef);
        })
    }


    render() {
        const header = ' Добавить шефа';
        const footer = (
            <div className="footer__modal">
                <button
                    className="btn__success"
                    type="button"
                    onClick={this.props.addChef}
                >
                    Добавить
                </button>
            </div>
        );
        return (
            <Modal
                header={header}
                hideModal={this.props.hideModal}
                footer={footer}
                modalVisible = {this.props.modalVisible}
                width={600}
                height={750}
            >
                <div className="modal__add-content">
                    <div className="modal__add-avatar">
                        <img
                            src={chefImg}
                            className="modal__add-img"
                            alt="Аватарка"
                        />
                        <p className="modal__add-ava-select">
                            Загрузить фото
                        </p>
                    </div>
                    <div className="modal__add-form">
                       <FormItem type={'text'} title={'Имя:'} placeholder={'Введите имя'} changeValue={(event: any) => this.props.changeInput(event)} name={'name'} special={' '}/>
                       <FormItemSelect options={this.state.food} title={'Блюдо шефа'} placeholder={'Выберите блюдо'} changeValue={(event: any) => this.props.changeInput(event)} name={'special'}/>
                        <FormItemSelect options={this.state.options} title={'Ранг'} placeholder={'На сколько шеф крут'} changeValue={(event: any) => this.props.changeInput(event)} name={'rang'}/>
                        <FormItem type={'tel'} title={'Возраст:'} placeholder={''} changeValue={(event: any) => this.props.changeInput(event)} name={'age'} special={' '}/>
                        <FormItemTextArea title={'Предыдущий опыт'} placeholder={'Опишите где вы работали до этого'} changeValue={(event: any) => this.props.changeInput(event)} name={'experience'}/>
                        <FormItem type={'tel'} title={'Телефон:'} placeholder={'Введите номер'} changeValue={(event: any) => this.props.changeInput(event)} name={'phone'} special={' '}/>
                        <FormItemTextArea title={'Адрес:'} placeholder={'Введите адрес'} changeValue={(event: any) => this.props.changeInput(event)} name={'address'}/>
                        <FormItemTextArea title={'Обо мне:'} placeholder={'Опишите свои интересы, хобби, цели'} changeValue={(event: any) => this.props.changeInput(event)} name={'aboutMe'}/>

                        <FormItem type={'mail'} title={'Почта:'} placeholder={'Введите адрес почты'} changeValue={(event: any) => this.props.changeInput(event)} name={'email'} special={' '}/>
                        <FormItem type={'mail'} title={'Facebook:'} placeholder={'Вставьте ссылку'} changeValue={(event: any) => this.props.changeInput(event)} name={'facebookURL'} special={' '}/>
                        <FormItem type={'mail'} title={'Twitter:'} placeholder={'Вставьте ссылку'} changeValue={(event: any) => this.props.changeInput(event)} name={'twitterURL'} special={' '}/>
                        <FormItem type={'mail'} title={'ВК:'} placeholder={'Вставьте ссылку'} changeValue={(event: any) => this.props.changeInput(event)} name={'vk'} special={' '}/>
                    </div>

                </div>
            </Modal>

        )
    }
}

export default EditModal;