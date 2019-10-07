import React from 'react';
import { connect } from 'react-redux';
import {addChef} from "../../service/store/actions";

interface IProps {
 chef: [];
 food: [];
 addChef: any;
}


class ChefPage extends React.Component<IProps, {}> {
    constructor (props: IProps) {
        super (props);
        this.state = {
        }
    }

     render () {
    const {chef, food, addChef}= this.props;
  return (
    <div className="chef_page">
        {chef.map((item: any, index:number) => {
            return (
                <div className="chef_page__card" key={index}>
                    <div className="chef_page__card-name">
                        {item.fullName}
                    </div>
                    <div className="chef_page__card-info">
                        <div>
                            {item.age}
                        </div>
                        <div>
                            {item.phone}
                        </div>
                    </div>
                </div>
            )
        })}
    </div>
  );
}
}
const mapStateToProps = (store: any) => {
    return {
        chef: store.chef,
        food: store.food,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        addChef: (payload: any) => dispatch (addChef(payload)),
    };
};


export default connect(mapStateToProps, mapDispatchToProps) (ChefPage);