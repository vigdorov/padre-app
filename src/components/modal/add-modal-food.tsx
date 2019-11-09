import React from 'react';
import Modal from "./modal";
import foodImg from '../../images/chef-img/chef4.png';
import FormItem from "../form-item/form-item-input.component";
import FormItemSelect from "../form-item/form-item-select.component";
import FormItemTextArea from "../form-item/form-item-textarea.component";

interface IProps{
    modalVisible: any;
    hideModal: any;
    changeInput: any;
    addFood: any;
}

interface IState {
    options: any;
}
class AddFoodModal extends React.Component <IProps, IState> {
    constructor (props: any) {
        super (props);
        this.state = {
            options: [
                {
                    name: 'Первое блюдо',
                    value: 'type1',
                },
                {
                    name: 'Второе блюдо',
                    value: 'type2',
                },
                {
                    name: 'Горячие напитки',
                    value: 'type3',
                },
                {
                    name: 'Холодные напитки',
                    value: 'type4',
                },
                {
                    name: 'Закуски',
                    value: 'type5',
                }
            ]
        }
    }


    render() {
        const header = ' Добавить блюдо';
        const footer = (
            <div className="footer__modal">
                <button
                    className="btn__success"
                    type="button"
                    onClick={this.props.addFood}
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
                            src={foodImg}
                            className="modal__add-img"
                            alt="Аватарка"
                        />
                        <p className="modal__add-ava-select">
                            Загрузить фото
                        </p>
                    </div>
                    <div className="modal__add-form">
                       <FormItem type={'text'} title={'Название:'} placeholder={'Введите название'} changeValue={(event: any) => this.props.changeInput(event)} name={'name'} special={''}/>
                        <FormItem type={'tel'} title={'Цена:'} placeholder={''} changeValue={(event: any) => this.props.changeInput(event)} name={'price'} special={''}/>
                        <FormItemSelect options={this.state.options} title={'Тип блюда'} placeholder={''} changeValue={(event: any) => this.props.changeInput(event)} name={'type'}/>
                        <FormItemTextArea title={'Состав'} placeholder={'Из чего это сделано'} changeValue={(event: any) => this.props.changeInput(event)} name={'structure'}/>
                    </div>

                </div>
            </Modal>

        )
    }
}

export default AddFoodModal;