import React from 'react';
import '../../../styles/message.scss'
import { IMessage } from "../../../service/messageService";
import { Message } from "../message";

interface IProps {
    messages: IMessage[]
}

export const MessageWindow: React.FC<IProps> = (props) => {
    const { messages } = props;

    return (
      <React.Fragment>
          {
              messages.map( (message: IMessage) => {
                  return <Message message={message} />
              })
          }
      </React.Fragment>
    )
};
