import React, {Component} from 'react';
import Button from 'components/Button/Button';
import './OrderController.css';

class OrderController extends Component {
    render() {
        const {addOrder, totalPrice, calculateOrder} = this.props.controllers;
        return (
            <div className="OrderController">
                <div className="AddOrderButton">
                    <Button type="success" onClick={addOrder} caption="Tambah Order" />
                </div>
                <div className="OrderTotal">
                    <p>{`Total Pesanan: ${totalPrice}`}</p>
                </div>
                <div className="TotalOrderButton">
                    <Button type="success" onClick={calculateOrder} caption="Hitung Order" />
                </div>
            </div>
        );
    }
}

export default OrderController;