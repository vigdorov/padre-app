import React from 'react';

interface IProps {
  page: string;
}

const InfoLine: React.FC<IProps> = (props) => {

  return (
      <div className="navi-line">
          <div className="page">
            <span>{props.page}</span>
          </div>
          <div className="path">
          </div>
      </div>
  )
};
export default InfoLine;
