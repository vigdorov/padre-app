import React from 'react';
import { messageService } from "../../service/messageService";

export const Dashboard = () => {
  const handleCLick = () => {
    messageService.success('Сообщение', 'я работаю бро');
  };

  return (
    <div>
      dashboard
      <button onClick={handleCLick}>Message</button>
    </div>
  );
};
