import React from 'react';
import { messageService } from "../../service/messageService";

export const Dashboard = () => {
  const handleCLick = (type: any) =>  {
      let tp: number = type;
      if (tp === 1) {
          messageService.success('Сообщение', 'я работаю бро');
      } else if (tp === 2) {
          messageService.danger('Сообщение', 'я не работаю бро');
      }else if (tp===3) {
          messageService.info('Сообщение', 'я работаю бро?');
      }

  };

  return (
    <div>
      dashboard
      <button onClick={() => handleCLick(1)}>MessageSuccess</button>
        <button onClick={() => handleCLick(2)}>MessageDanger</button>
        <button onClick={() => handleCLick(3)}>MessageInfo</button>
    </div>
  );
};
