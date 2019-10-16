import React from 'react';
import { IMessage } from "../../../service/messageService";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

interface IProps {
  message: IMessage;
  index: number;
  handleClose: any;
}

const getDate: any = new Date();
let options = {
    era: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    timezone: 'UTC',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
};


export const Message: React.FC<IProps> = (props) => {
  const { title, text, type, icon, classType} = props.message;
const closeMessage = props.handleClose;
let i = props.index;
  return (
      <div className={`message__body message__body-${type}`}>
          <span className="message__icon">
              <FontAwesomeIcon icon={icon} className={classType}/>
          </span>
          <div className="message__text">
              <p><span className="message__text message__text-bold">{title}</span>: "{text}" <br/> <span className="message__text message__text-date">{getDate.toLocaleString("RU", options.year)}</span> </p>
          </div>
          <button  className="message__close" onClick={() => closeMessage(i)}> &#10006; </button>
      </div>
  )
};


