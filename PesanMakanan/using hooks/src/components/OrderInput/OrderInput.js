import React from 'react';
import OrderMenu from 'components/OrderMenu/OrderMenu';
import OrderQty from 'components/OrderQty/OrderQty';
import Button from 'components/Button/Button';
import './OrderInput.css';

/*class OrderInput extends React.Component {
    constructor(props) {
        super(props);
        this.changeMenu = this.props.controllers.changeMenu.bind(this);
        this.changeQty = this.props.controllers.changeQty.bind(this);
        this.deleteOrder = this.props.controllers.deleteOrder.bind(this);
    }

    render() {
        const {id, name, price, qty} = this.props.data;
        return (
            <div className="OrderInput">
                <OrderMenu onChange={event => {this.changeMenu(event, id)}} value={name} />
                <div className="MenuPrice">
                    <p>{price}</p>
                </div>
                <OrderQty qty={qty} onChange={event => {this.changeQty(event, id)}} />
                <div className="DeleteOrderButton">
                    <Button type="danger" onClick={() => {this.deleteOrder(id)}} caption="Delete" />
                </div>
            </div>
        );
    }
}*/

const OrderInput = props => {
    const {changeMenu, changeQty, deleteOrder} = props.controllers;
    const {id, name, price, qty} = props.data;

    return (
        <div className="OrderInput">
            <OrderMenu onChange={event => {changeMenu(event, id)}} value={name} />
            <div className="MenuPrice">
                <p>{price}</p>
            </div>
            <OrderQty qty={qty} onChange={event => {changeQty(event, id)}} />
            <div className="DeleteOrderButton">
                <Button type="danger" onClick={() => {deleteOrder(id)}} caption="Delete" />
            </div>
        </div>
    );
}

export default OrderInput;