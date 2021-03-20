import React from 'react';
import './OrderQty.css';

/*class OrderQty extends React.Component {
    render() {
        return (
            <div className="OrderQty">
                <input type="number" min="1" value={`${this.props.qty}`} onChange={this.props.onChange} />
            </div>
        );
    }
}*/

const OrderQty = props => {
    return (
        <div className="OrderQty">
            <input type="number" min="1" value={`${props.qty}`} onChange={props.onChange} />
        </div>
    );
};

export default OrderQty;