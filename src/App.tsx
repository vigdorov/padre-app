import React, { Component } from 'react';
import Router from './service/router/router';
import './styles/index.scss';
import SideMenu from './components/sidebar-menu';
import Header from './components/header';
import InfoLine from './components/info-line';
import {connect, Provider} from "react-redux";
import {addChef, hideModal} from './service/store/actions';
import AddModal from "./components/modal/add-modal";


interface IState {
  currentPage: string;
}
interface IProps {
  hideModal: any;
  modalVisible: boolean;
}


class App extends Component<IProps, IState> {
  constructor (props: IProps) {
    super(props);

    this.state = {
      currentPage: window.location.pathname,

    };
  }

  handleChangePage = (page: string): void => {
    this.setState({
      currentPage: page
    });
  };


  render() {

    return (
      <div>
        <Header/>
        <div className="container">
          <AddModal modalVisible={this.props.modalVisible} hideModal={this.props.hideModal}/>
          <SideMenu onChangePage={this.handleChangePage}/>
          <div className="content">
            <InfoLine page={this.state.currentPage}/>
            <div className="page-content">
              {Router}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store: any) => {
  return {
   chef: store.chef,
   modalVisible: store.modalVisible
  }
};
const mapDispatchToProps = (dispatch: any) => {
  return {
      addChef: (payload: any) => dispatch (addChef(payload)),
    hideModal: () => dispatch (hideModal()),
  }
};


export default connect(mapStateToProps, mapDispatchToProps) (App);


/*
let count: number = 0;
let name: string = 'Ivan';
let isAuth: boolean = true;

interface IFunc {
  (): number;
}

interface IPerson {
  name: string;
  surname: string;
  age: number;
  isStudent: boolean;
  about?: string;
  sayHello: IFunc;
}

interface IAddress {
  [key: string]: string;
}

const petersburg: IAddress = {
  street: 'Sadovaya',
};

const object: IPerson = {
  name: 'Ivan',
  surname: 'Petrov',
  age: 45,
  isStudent: true,
  sayHello: function () {
    console.log('Hi');
    return 4365;
  }
};

const numberArray: number[] = [];
const stringArray: string[] = [];
const booleanArray: boolean[] = [];

const personList: IPerson[] = [];

function sum (a: number, b: number): number {
  return a + b;
}*/
