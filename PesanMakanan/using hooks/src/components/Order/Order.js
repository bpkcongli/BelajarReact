import React, {useState} from 'react';
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

const Order = () => {
    let [orders, setOrders] = useState([defaultOrder(0)]);
    let [totalPrice, setTotalPrice] = useState(0);

    const addOrder = () => {
        let counter = 0;
        while (orders.map(order => order.id).indexOf(counter) !== -1) counter++;

        setOrders(orders.concat(defaultOrder(counter)));
    };

    const deleteOrder = id => {
        if (orders.length > 1) {
            setOrders(orders.filter(order => order.id !== id));
        }
    };

    const updateMenu = (id, val) => {
        let updatedOrders = [...orders];
        const i = updatedOrders.findIndex(order => order.id === id);
        updatedOrders[i].name = Menu[val].name;
        updatedOrders[i].price = Menu[val].price;
        return updatedOrders;
    };

    const changeMenu = (event, id) => {
        const val = event.target.value;
        setOrders(updateMenu(id, val));
    };

    const updateQty = function(id, qty) {
        let updatedOrders = [...orders];
        const i = updatedOrders.findIndex(order => order.id === id);
        updatedOrders[i].qty = qty;
        return updatedOrders;
    };

    const changeQty = (event, id) => {
        const val = event.target.value;
        setOrders(updateQty(id, val));
    };

    const calculateOrder = () => {
        let prices = 0;
        for (let order of orders) {
            prices += order.price * order.qty;
        }
        
        setTotalPrice(prices);
    };

    return (
        <div className="Order">
            <OrderController controllers={
                {
                    totalPrice,
                    addOrder, 
                    calculateOrder
                }
            } />
            <OrderView controllers={
                {
                    orders,
                    changeMenu,
                    changeQty,
                    deleteOrder
                }
            } />
        </div>
    );
};

export default Order;