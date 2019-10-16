import React from 'react';
import { connect } from 'react-redux';
import {addChef, checkChef, showModal} from "../../service/store/actions";
import SocialChef from "../../components/social-chef/social-chef.component";
import add from '../../images/chef-img/add.png';
import {addNewChef, getChef, SC, URL} from "../../service/store/api.comand";
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEllipsisV} from "@fortawesome/free-solid-svg-icons";
import cook from '../../images/chef-img/chef2.png';
import {Link} from "react-router-dom";

interface IProps {
 chef: [];
 food: [];
 addChef: any;
 checkChef: any;
 showModal: any;
 optionStyle: string;
}
interface IState {
    newChef: any;
    modalVisible: any;
}



class ChefPage extends React.Component<IProps, IState> {
    constructor (props: IProps) {
        super (props);
        this.state = {
            newChef : {
                name: 'Петров Александр',
                avatar: cook,
                specialDish: '',
                designation: '',
                age: 18,
                experience: '',
                phone: 345654321,
                address: '',
                aboutMe: '',
                email: '',
                facebookURL: '',
                twitterURL: '',
                vk: ''
            },
            modalVisible: false,

        }
    }

    componentDidMount() {
        getChef().then((list: any) => {
            this.props.checkChef(list);
            console.log('list', list)
        })
    }
    componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any): void {
        let newStore = this.props.chef;
        addNewChef(newStore);
    }

    render () {
    const {chef }= this.props;



         return (
    <div className="chef_page">
        <div className={this.props.optionStyle}>
            <img
                className="chef_page__card-avatar"
                src={add} alt="add"
            />
            <h3 className="chef_page__card-h3">Добавить нового шефа</h3>
            <p className="chef_page__card-p">Пригласите нового шефа в вашу организацию</p>
            <button
                type="button"
                onClick={() => this.props.showModal()}
                className="btn__add">
                Пригласить
            </button>
        </div>
        {
            chef.map((item: any, index:number) => {
            return (

                <div className={this.props.optionStyle} key={index}>
                    <FontAwesomeIcon
                        icon={faEllipsisV}
                        className="chef_page__card-menu"
                    />
                    <Link to={'/chef-single-page'} >
        <img
            className="chef_page__card-avatar"
            src={item.avatar} alt=""
        />
                    </Link>
               <div className="chef_page__card-name">
                  {item.name}
                </div>
                    <div className="chef_page__card-email">
                        {item.email}
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


    </div>
  );
}
}
const mapStateToProps = (store: any) => {
    return {
        chef: store.chef,
        food: store.food,
        optionStyle: store.optionStyle,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        addChef: (payload: any) => dispatch (addChef(payload)),
        checkChef: (payload: any) => dispatch (checkChef(payload)),
        showModal: () => dispatch (showModal()),
    };
};


export default connect(mapStateToProps, mapDispatchToProps) (ChefPage);