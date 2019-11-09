import React from 'react';

interface IState{
    selectPage: number;
}
interface IProps{
arr: any;
select: any;
items: number;
}
class Paginator extends React.Component<IProps, IState> {
    constructor (props: IProps) {
        super (props);
        this.state = {
            selectPage: 2,
        }
    }

    handleDoubleFunc = (page: number, select: number) => {
        this.props.select(page);
        if (select != 1) {
            this.setState({selectPage: select});
        }
    };

    render() {
        let {arr, items} = this.props;
        let {selectPage} = this.state;
        let a = Math.ceil(arr.length / items) ;
        let count = [];
        for (let i=1; i<=a; i++) {
            count.push(Number(i));
        }
        let last = Number(count.slice(count.length - 1));
        let minA = selectPage - 2;
        let maxA = selectPage + 1;
        let numbers = count.slice(minA, maxA);
        return (
            <div className="paginator__container">
                {numbers.map((item: number, index: number) => {
                    let page = item * items;
                    return (
                        <div className="paginator__items" key={index} onClick={() => this.handleDoubleFunc(page, item)}>
                            {`${item},`}
                        </div>
                    )
                })} ... <div
                className="paginator__items"
                onClick={() => this.handleDoubleFunc(last*items, last)}
            > {last} </div>

            </div>
        )
    }
}
export default Paginator;