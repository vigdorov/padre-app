import React from 'react';

interface IProps {
    options: any;
    title: string;
    placeholder: string;
    changeValue: any;
    name: string;
}

const FormItemSelect = (props: IProps) => {
return (
    <div className="form__item">
        <p className="form__text">
            {props.title}
        </p>
        <select
            name={props.name}
            placeholder={props.placeholder}
            onChange={props.changeValue}
            className="form__select"
        >
            {props.options.map((item: any, index: number) => {
                return (
                    <option value={item.name}>{item.value}</option>
                )
            })}
        </select>
    </div>
)
};
export default FormItemSelect;