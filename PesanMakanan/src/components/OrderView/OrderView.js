import React from 'react';
import OrderInput from 'components/OrderInput/OrderInput';
import './OrderView.css';

class OrderView extends React.Component {
    constructor(props) {
        super(props);
        this.changeMenu = this.props.controllers.changeMenu.bind(this);
        this.changeQty = this.props.controllers.changeQty.bind(this);
        this.deleteOrder = this.props.controllers.deleteOrder.bind(this);
    }
    render() {
        const {orders} = this.props.controllers;
        let content = [];
        for (let i=0; i<orders.length; i++) {
            content.push(<OrderInput key={i} data={orders[i]} controllers={
                {
                    changeMenu: this.changeMenu,
                    changeQty: this.changeQty,
                    deleteOrder: this.deleteOrder
                }
            } />)
        }
        return (
            <div className="OrderView">
                {content}
            </div>
        );
    }
}

export default OrderView;