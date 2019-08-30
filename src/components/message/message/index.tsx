import React from 'react';
import { IMessage } from "../../../service/messageService";

interface IProps {
  message: IMessage;
}

export const Message: React.FC<IProps> = (props) => {
  const { title, text, type } = props.message;
  return (
      <div className={`message__body message__body-${type}`}>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
  )
};
