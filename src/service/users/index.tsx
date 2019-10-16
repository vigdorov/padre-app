import React, {Component} from 'react';

export interface IChef {

        fullName: string;
        avatar: string;
        specialDish?: string;
        designation?: string;
        age?: number;
        experience?: string;
        phone?: number;
        address?: string;
        aboutMe?: string;
        email?: string;
        facebookURL?: string;
        twitterURL?: string;
        linkedInURL?: string;
    }


interface IProps {
    name: string;
}


class Users extends Component<IProps, IChef > {
    constructor(props: IProps){
        super(props);

        this.state = {
                fullName: 'Ивушкин Александр',
                avatar: '',
                specialDish: '',
                designation: '',
                age: 18,
                experience: '',
                phone: 9999999999,
                address: '',
                aboutMe: '',
                email: '',
                facebookURL: '',
                twitterURL: '',
                linkedInURL: ''
        };
    }
    render() {
        return (
            <div className="user__list">
                {this.state.fullName}
            </div>
        )
    }
}
export default Users;