import React, {Component} from 'react';
import './OrderQty.css';

class OrderQty extends Component {
    render() {
        return (
            <div className="OrderQty">
                <input type="number" min="1" value={`${this.props.qty}`} onChange={this.props.onChange} />
            </div>
        );
    }
}

export default OrderQty;