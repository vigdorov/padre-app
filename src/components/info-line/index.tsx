import React from 'react';
import {faListAlt, faStream, faThList} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {connect} from "react-redux";
import {changeStyle} from "../../service/store/actions";

interface IProps {
  page: string;
    changeStyle: any;
    optionStyle: [];
}

const InfoLine: React.FC<IProps> = (props) => {

    const handleChangeStyle =(option: string): void => {
        props.changeStyle(option);
    };
console.log( 'стили', props.optionStyle);
  return (
      <div className="navi-line">
          <div className="page">
            <span>{props.page}</span>
          </div>
          <div className="path">
              <button onClick={() => props.changeStyle('page-view__list')} className="btn__empty">
                  <FontAwesomeIcon className="path__icon" icon={faListAlt} />
              </button>
              <button onClick={() => props.changeStyle('page-view__block')} className="btn__empty">
                  <FontAwesomeIcon className="path__icon" icon={faStream}  />
              </button>
              <button onClick={() => props.changeStyle('page-view__open')} className="btn__empty">
                  <FontAwesomeIcon className="path__icon" icon={faThList}  />
              </button>


          </div>
      </div>
  )
};

const mapStateToProps = (store: any) => {
    return {
        optionStyle: store.optionStyle
    }
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        changeStyle: (payload: any) => dispatch (changeStyle(payload))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(InfoLine);
