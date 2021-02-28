import React from 'react';
import Menu from 'Model';
import OrderMenu from 'components/OrderMenu/OrderMenu';
import OrderQty from 'components/OrderQty/OrderQty';
import Button from 'components/Button/Button';
import './OrderInput.css';

class OrderInput extends React.Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
        this.changeMenu = this.props.controllers.changeMenu.bind(this);
        this.changeQty = this.props.controllers.changeQty.bind(this);
        this.deleteOrder = this.props.controllers.deleteOrder.bind(this);
    }

    render() {
        const {id, name, price, qty} = this.props.data;
        return (
            <div className="OrderInput" ref={this.ref}>
                <OrderMenu onChange={() => {this.changeMenu(this.ref, id)}} value={name} />
                <div className="MenuPrice">
                    <p>{price}</p>
                </div>
                <OrderQty qty={qty} onChange={() => {this.changeQty(this.ref, id)}} />
                <div className="DeleteOrderButton">
                    <Button type="danger" onClick={() => {this.deleteOrder(id)}} caption="Delete" />
                </div>
            </div>
        );
    }
}

export default OrderInput;