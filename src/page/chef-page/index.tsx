import React from 'react';
import { connect } from 'react-redux';
import {
    addChef,
    checkChef, deleteChef, editIndex,
    hideModal,
    showModal
} from "../../service/store/actions";
import SocialChef from "../../components/social-chef/social-chef.component";
import add from '../../images/chef-img/add.png';
import {addNewChef, getChef} from "../../service/store/api.comand";
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faAngleDoubleDown,
    faEllipsisV,
    faTimes
} from "@fortawesome/free-solid-svg-icons";
import cook from '../../images/chef-img/chef2.png';
import {Link} from "react-router-dom";
import AddModal from "../../components/modal/add-modal";
import DeleteModal from "../../components/modal/delete.modal";
import {messageService} from "../../service/messageService";

interface IProps {
 chef: [];
 food: [];
 addChef: any;
 checkChef: any;
 showModal: any;
 optionStyle: string;
 modalVisible: any;
 hideModal: any;
 deleteChef: any;
 index: number;
 editIndex: any;
}
interface IState {
    newChef: any;
    maxItems: number;
}



class ChefPage extends React.Component<IProps, IState> {
    constructor (props: IProps) {
        super (props);
        this.state = {
            newChef :
                {
                name: '',
                avatar: cook,
                special: '',
                rang: '',
                age: null,
                experience: '',
                phone: null,
                address: '',
                aboutMe: '',
                email: '',
                facebookURL: '',
                twitterURL: '',
                vk: ''
            },
            maxItems: 11,


        }
    }

    componentDidMount() {
        getChef().then((list: any) => {
            this.props.checkChef(list);
        })
    }

    updateServer = () => {
        let newStore = this.props.chef;
        addNewChef(newStore)
            .then(() => messageService.success('Отослал', 'Данные на сервере обновлены'))
            .catch(() => messageService.danger('Чет не то', 'Почему-то данные не обновились'))

    };

    handleAddChef = () => {
        let chef = {...this.state.newChef};
        console.log('chef+', chef);
        this.props.addChef(chef);
        this.props.hideModal();
        setTimeout(()=> this.updateServer(), 1000);
    };

    handleChangeInput = (e: any) => {
        let target = e.target;
        let value = target.value;
        let targetName = target.name;
        let chef = this.state.newChef;
        chef[targetName] = value;
        this.setState({newChef: chef});
    };

    handleChangeIndex = (index: number) => {
      this.props.editIndex(index) ;
    };

    handleDeleteChef = (index: number) => {
        this.props.deleteChef(index);
        setTimeout(()=> this.updateServer(), 1000);
    };

    handleShowMore = () => {
      this.setState({maxItems: this.state.maxItems + 12})
    };

    render () {
    const {chef }= this.props;
    let maxItems = chef.slice(0, this.state.maxItems);
        let modalType: any = '';
        if (this.props.modalVisible === 1) {
            modalType = (
                <AddModal modalVisible={this.props.modalVisible} hideModal={this.props.hideModal} changeInput={this.handleChangeInput} addChef={this.handleAddChef}/>
            )
        }else if (this.props.modalVisible === 2){
            modalType = (
                <DeleteModal modalVisible={this.props.modalVisible} hideModal={this.props.hideModal}/>
            )
        }


         return (
    <div className="chef_page">
        {modalType}
        <div className={this.props.optionStyle}>
            <img
                className={`${this.props.optionStyle}-avatar`}
                src={add} alt="add"
            />
            <div className={`${this.props.optionStyle}-title`} >

                <h3 className={`${this.props.optionStyle}-h3`}>Добавить нового шефа</h3>
                <p className={`${this.props.optionStyle}-p`}>Пригласите нового шефа в вашу организацию</p>
            </div>

            <button
                type="button"
                onClick={() => this.props.showModal(1)}
                className="btn__add">
                Пригласить
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
                    <button className="btn__empty-delete" onClick={() => this.handleDeleteChef(index)}>
                        <FontAwesomeIcon icon={faTimes}/>
                    </button>

                    <Link to={'/chef-single-page'} onClick={() => {this.handleChangeIndex(index)}} >
        <img
            className={`${this.props.optionStyle}-avatar`}
            src={item.avatar} alt=""
        />
                    </Link>
                    <div className={`${this.props.optionStyle}-info`}>
                        <div className={`${this.props.optionStyle}-name`}>
                            {item.name}
                        </div>
                        <div className={`${this.props.optionStyle}-email`}>
                            {item.email}
                        </div>
                    </div>
                    <div className={`${this.props.optionStyle}-description`}>
                        <div className={`${this.props.optionStyle}-name`}>
                            {item.rang}
                        </div>
                        <div className={`${this.props.optionStyle}-email`}>
                            {item.special}
                        </div>
                    </div>

                    <SocialChef
                        facebook={item.facebookURL}
                        twitter={item.twitterURL}
                        vk={item.vk}
                    />
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
        optionStyle: store.optionStyle,
        modalVisible: store.modalVisible,
        index: store.index,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        addChef: (payload: any) => dispatch (addChef(payload)),
        checkChef: (payload: any) => dispatch (checkChef(payload)),
        showModal: (payload: any) => dispatch (showModal(payload)),
        hideModal: () => dispatch (hideModal()),
        deleteChef: (payload: any) => dispatch (deleteChef(payload)),
        editIndex: (payload: any) => dispatch (editIndex(payload)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps) (ChefPage);