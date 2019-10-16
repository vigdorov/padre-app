import React from 'react';
import ReactDOM from 'react-dom';
import { MessageWindow } from "../../components/message/mes-window";
import {faCheck, faSkullCrossbones, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

export interface IMessage {
  title: string;
  text: string;
  type: 'danger' | 'success' | 'info';
  classType:'color-green' | 'color-orange'| 'color-blue';
  icon: any;
}


class MessageService {
  private static _init: MessageService = new MessageService();

  private messages: IMessage[] = [];

  constructor () {
    return MessageService._init;
  }

  private showMessage (message: IMessage) {
    this.messages.push(message);
    this.render();
    setTimeout(() => {
      this.messages.shift();
      this.render();
    }, 5000);
  }


  public success (title: string, text: string) {
    this.showMessage({
      title,
      text,
      type: 'success',
      classType: 'color-green',
        icon: faCheck
    });
  }
    public danger (title: string, text: string) {
        this.showMessage({
            title,
            text,
            type: 'danger',
            classType: 'color-orange',
            icon: faSkullCrossbones
        });
    }
    public info (title: string, text: string) {
        this.showMessage({
            title,
            text,
            type: 'info',
            classType: 'color-blue',
            icon: faInfoCircle
        });
    }


  private render () {
    ReactDOM.render(
      <MessageWindow messages={this.messages} render={this.render} />,
      document.getElementById('message')
    );
  }
}

export const messageService = new MessageService();

/*

const msg = {
  0: { title: '', text: '', type: '', id: 0 }
};

let counter = 0;

msg[counter] = newMsg;
counter++;

*/
