import React from 'react';
import OrderController from 'components/OrderController/OrderController';
import OrderView from 'components/OrderView/OrderView';
import Menu from 'Model';

const defaultOrder = id => {
    return {
        id: id,
        name: Menu[0].name,
        price: Menu[0].price,
        qty: 1
    };
};

class Order extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [
                defaultOrder(0)
            ],
            totalPrice: 0
        };
    }

    addOrder = () => {
        let counter = 0;
        while (this.state.orders.map(order => order.id).indexOf(counter) !== -1) counter++;

        this.setState({
            orders: this.state.orders.concat(defaultOrder(counter))
        });
    }

    deleteOrder = id => {
        if (this.state.orders.length > 1) {
            this.setState({
                orders: this.state.orders.filter(order => order.id !== id)
            });
        }
    }

    updateMenu = (id, val) => {
        const orders = this.state.orders;
        const i = orders.findIndex(order => order.id === id);
        orders[i].name = Menu[val].name;
        orders[i].price = Menu[val].price;
        return orders;
    }

    changeMenu = (event, id) => {
        const val = event.target.value;
        this.setState({
            orders: this.updateMenu(id, val)
        });
    }

    updateQty = (id, qty) => {
        const orders = this.state.orders;
        const i = orders.findIndex(order => order.id === id);
        orders[i].qty = qty
        return orders;
    }

    changeQty = (event, id) => {
        const val = event.target.value;
        this.setState({
            orders: this.updateQty(id, val)
        });
    }

    calculateOrder = () => {
        let prices = 0;
        for (let order of this.state.orders) {
            prices += order.price * order.qty;
        }
        
        this.setState({
            totalPrice: prices
        })
    }

    render() {
        return (
            <div className="Order">
                <OrderController controllers={
                    {
                        totalPrice: this.state.totalPrice,
                        addOrder: this.addOrder.bind(this), 
                        calculateOrder: this.calculateOrder.bind(this)
                    }
                } />
                <OrderView controllers={
                    {
                        orders: this.state.orders,
                        changeMenu: this.changeMenu.bind(this),
                        changeQty: this.changeQty.bind(this),
                        deleteOrder: this.deleteOrder.bind(this)
                    }
                } />
            </div>
        );
    }
}

export default Order;