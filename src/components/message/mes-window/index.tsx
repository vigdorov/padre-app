import React, {Component} from 'react';
import '../../../styles/message.scss'


interface IState {
    message: string;
}
interface IProps {
    page: string;
}



class MessageWindow extends Component<IProps,IState> {
    constructor (props: IProps) {
        super (props);

        this.state = {
        message: this.props.page
        }
    };


    render () {

        return (
            <div className="message__window">
                <div  id="mes-box" className="message__box">
                    {this.state.message}
                </div>
            </div>
        )
    }

}
export default MessageWindow;