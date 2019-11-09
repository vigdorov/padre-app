import React from 'react';
import '../../../styles/message.scss'
import { IMessage } from "../../../service/messageService";
import { Message } from "../message";

interface IProps {
    messages: IMessage[];
    render: any;
}

export const MessageWindow: React.FC<IProps> = (props) => {
    const { messages } = props;


    function handleClose(index: number) {
       delete props.messages[index];
        props.render();
    }

    return (
      <React.Fragment>
          {
            messages.map( (message: IMessage, index) => {
                  return <Message message={message} index={index} handleClose={handleClose} key={Math.random()}/>
              })
          }
      </React.Fragment>
    )
};
