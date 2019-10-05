import React from 'react';
import { connect } from 'react-redux';
import { reducer } from "../../service/store/reducer";
import {addChef} from "../../service/store/actions";


export const ChefPage = (props: any) => {
    const {chef, food, addChef} = props;
    console.log(props);
  return (
    <div>

    </div>
  );
};
const mapStateToProps = (store: any) => {
    console.log(store);
    return {
        chef: store.chef,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        addChef: (payload: any) => dispatch (addChef(payload)),
    };
};


export default connect(mapStateToProps, mapDispatchToProps) (ChefPage);