import React from 'react';

interface IProps {
    title: string;
    placeholder: string;
    changeValue: any;
    name: string;
}

const FormItemTextArea = (props: IProps) => {
return (
    <div className="form__item">
        <p className="form__text">
            {props.title}
        </p>
        <textarea
            name={props.name}
            placeholder={props.placeholder}
            onChange={props.changeValue}
            className="form__textarea"
        />
    </div>
)
};
export default FormItemTextArea;