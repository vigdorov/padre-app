import React from 'react';

interface IProps {
    type: string;
    title: string;
    placeholder: string;
    changeValue: any;
    name: string;
}

const FormItem = (props: IProps) => {
return (
    <div className="form__item">
        <p className="form__text">
            {props.title}
        </p>
        <input
            name={props.name}
            type={props.type}
            placeholder={props.placeholder}
            onChange={props.changeValue}
            className="form__input"
        />
    </div>
)
};
export default FormItem;