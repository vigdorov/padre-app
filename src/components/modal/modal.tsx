import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

interface IProps {
    header: any;
    modalVisible: any;
    footer: any;
    hideModal: any;
    width: number;
    height: number;
    children: any;
}
const Modal = (props: IProps) => {

    const handleHideModal = (event: any) => {
        const {target} = event;
        if (target.classList.contains('modal__window')) {
            props.hideModal();
        }
    };

    let style ={
        width: `${props.width}px`,
        height: `${props.height}px`,
    };

    return (
        <div className="modal__window" style={{display: props.modalVisible != false ? 'flex': 'none'}} onClick={(event) => handleHideModal(event)}>
            <div style={style} className="modal__container">
                <div className="modal__header">
                    <h3 className="modal__title">
                        {props.header}
                    </h3>
                    <div className="modal__close" >
                        <button
                            className="btn__empty"
                            onClick={()=>props.hideModal()}
                        >
                            <FontAwesomeIcon icon={faTimes}/>
                        </button>
                    </div>
                </div>
                <div className="modal__body">
                    {props.children}

                    <div className="modal__footer">
                        {props.footer}
                    </div>
                </div>
            </div>

        </div>
    )
};

export default Modal;