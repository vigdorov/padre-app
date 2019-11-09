import React from 'react';
import {connect} from "react-redux";
import {checkChef} from "../../service/store/actions";
import {getChef} from "../../service/store/api.comand";
import ava from "../../images/chef-img/chef6.png";
import SocialChef from "../../components/social-chef/social-chef.component";

interface IProps {
    children: any;
    id: any;
    index: number;
}
interface IState {
    chef: object;
}

class ChefSinglePage extends React.Component <IProps, IState>{
    constructor (props: IProps){
        super (props);
        this.state = {
            chef: {},
        }
    }

    componentDidMount() {
        getChef().then((data: any) => {
            const chefs = [...data];
            const {index} = this.props;
            let chef: any = chefs[index];
            this.setState({chef: chef});
        })
    }

    render () {
        let chef: any = this.state.chef;
        return (
            <div className="single__page">
                <div className="single__main">
         <div className="single__main-avatar">
             <img src={ava}
                  alt="Аватарка"
                  className="single__main-img"
             />
             <div className="single__main-btn">
                 <button className="btn__empty text-main">
                     Изменить аватарку
                 </button>
             </div>

             <SocialChef facebook={chef.facebookURL} twitter={chef.twitterURL} vk={chef.vk}/>

         </div>
         <div className="single__main-info">
             <span>{chef.rang}</span>
             <span className="single__main-name">
                 {chef.name}
             </span>
             <span>
                 <q> Последний комментарий </q>
             </span>

             <div className="single__main-description"> <span className="text-main">
                 Возраст :
             </span>
                 {chef.age}
             </div>
             <div className="single__main-description"> <span className="text-main">
                 Лучшее блюдо :
             </span>
                 {chef.special}
             </div>
             <div className="single__main-description"> <span className="text-main">
                 Опыт работы :
             </span>
                 {chef.experience}
             </div>
             <div className="single__main-description"> <span className="text-main">
                 Контакты :
             </span>
                 {chef.phone}, {chef.email}
             </div>

         </div>
                </div>
                <div className="single__second">
                    <div className="single__second-info1">
                        <h3>About me</h3>
                        <p>{chef.aboutMe}</p>
                    </div>
                    <div className="single__second-info2">
                        <h3>Address</h3>
                        <p>{chef.address}</p>
                    </div>
                </div>
            </div>
        );
    }
}
   const mapStateToProps = (store: any) => {
    return {
        index: store.index,
        chef: store.chef,
    }
   };

const mapDispatchToProps = (dispatch: any) => {
    return {
        checkChef: (payload: any) => dispatch (checkChef(payload)),
    }
};

export default connect (mapStateToProps, mapDispatchToProps)(ChefSinglePage);