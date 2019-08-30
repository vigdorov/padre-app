import React from 'react';
import ReactDOM from 'react-dom';

import { MessageWindow } from "../../components/message/mes-window";

export interface IMessage {
  title: string;
  text: string;
  type: 'danger' | 'success' | 'info';
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
      type: 'success'
    });
  }

  // TODO: реализовать методы для danger и info сообщений
  // TODO: сделать чтобы по клику сообщения исчезали, сделай стили как в шаблоне
  // TODO: сделай все появления и исчезновения плавными

  private render () {
    ReactDOM.render(
      <MessageWindow messages={this.messages} />,
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
