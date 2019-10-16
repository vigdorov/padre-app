import React from 'react';
import Modal from "./modal";
import chefImg from '../../images/chef-img/chef4.png';
import FormItem from "../form-item/form-item-input.component";
import FormItemSelect from "../form-item/form-item-select.component";
import FormItemTextArea from "../form-item/form-item-textarea.component";

interface IProps{
    modalVisible: any;
    hideModal: any;
}

interface IState {
    options: any;
}
class AddModal extends React.Component <IProps, IState> {
    constructor (props: any) {
        super (props);
        this.state = {
            options: [
                {
                    name: 'Белый',
                    value: 'white',
                },
                {
                    name: 'Черный',
                    value: 'black',
                }
            ]
        }
    }


    render() {
        const header = ' Добавить шефа';
        const footer = (
            <div className="footer__modal">
                <button
                    className="btn__success"
                    type="button"
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
                       <FormItem type={'text'} title={'Имя:'} placeholder={'Введите имя'} changeValue={'huy'} name={'name'}/>
                       <FormItemSelect options={this.state.options} title={'Херня'} placeholder={'Выберите цвет'} changeValue={'эхуй'} name={'ргн'}/>
                        <FormItemSelect options={this.state.options} title={'Тоже херня'} placeholder={'выберите рассу'} changeValue={'эхуй'} name={'ргн'}/>
                        <FormItem type={'text'} title={'Имя:'} placeholder={'Введите имя'} changeValue={'huy'} name={'name'}/>
                        <FormItemTextArea title={'Введите много текста'} placeholder={'тут должно быть много текста'} changeValue={'ывап'} name={'textArea'}/>
                        <FormItem type={'text'} title={'Имя:'} placeholder={'Введите имя'} changeValue={'huy'} name={'name'}/>
                        <FormItemTextArea title={'Введите много текста'} placeholder={'тут должно быть много текста'} changeValue={'ывап'} name={'textArea'}/>
                        <FormItem type={'text'} title={'Имя:'} placeholder={'Введите имя'} changeValue={'huy'} name={'name'}/>
                        <FormItem type={'text'} title={'Имя:'} placeholder={'Введите имя'} changeValue={'huy'} name={'name'}/>
                        <FormItem type={'text'} title={'Имя:'} placeholder={'Введите имя'} changeValue={'huy'} name={'name'}/>
                        <FormItem type={'text'} title={'Имя:'} placeholder={'Введите имя'} changeValue={'huy'} name={'name'}/>
                        <FormItem type={'text'} title={'Имя:'} placeholder={'Введите имя'} changeValue={'huy'} name={'name'}/>
                    </div>

                </div>
            </Modal>

        )
    }
}

export default AddModal;