import React from 'react';
import Modal from "./modal";


interface IProps{
    modalVisible: any;
    hideModal: any;
}

interface IState {
    options: any;
}
class DeleteModal extends React.Component <IProps, IState> {
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
        const header = ' Удалить шефа ';
        const footer = (
            <div className="footer__modal">
                <button
                    className="btn__success"
                    type="button"
                >
                    Да
                </button>
                <button
                    className="btn__cancel"
                    type="button"
                >
                    Нет
                </button>
            </div>
        );
        return (
            <Modal
                header={header}
                hideModal={this.props.hideModal}
                footer={footer}
                modalVisible = {this.props.modalVisible}
                width={300}
                height={200}
            >
                <div className="modal__delete">
                  Вы уверены что хотите его удалить?
                </div>
            </Modal>

        )
    }
}

export default DeleteModal;