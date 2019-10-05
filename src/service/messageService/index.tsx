import React from 'react';
import ReactDOM from 'react-dom';

import { MessageWindow } from "../../components/message/mes-window";

export interface IMessage {
  title: string;
  text: string;
  type: 'danger' | 'success' | 'info';
  icon:'fas fa-check color-green' | 'fas fa-skull-crossbones color-orange'| 'fas fa-info-circle color-blue';
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
      icon: 'fas fa-check color-green'
    });
  }
    public danger (title: string, text: string) {
        this.showMessage({
            title,
            text,
            type: 'danger',
            icon: 'fas fa-skull-crossbones color-orange'
        });
    }
    public info (title: string, text: string) {
        this.showMessage({
            title,
            text,
            type: 'info',
            icon: 'fas fa-info-circle color-blue'
        });
    }

  // TODO: реализовать методы для danger и info сообщений
  // TODO: сделать чтобы по клику сообщения исчезали, сделай стили как в шаблоне
  // TODO: сделай все появления и исчезновения плавными

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
