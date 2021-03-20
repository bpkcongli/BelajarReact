import Order from 'components/Order/Order';
import React from 'react';
import Menu from 'Model';
import './OrderMenu.css';

/*class OrderMenu extends React.Component {
    render() {
        return (
            <div className="OrderMenu">
                <select value={`${Menu.find(each => each.name === this.props.value).id}`} onChange={this.props.onChange}>
                    {
                        Menu.map(each => {
                            return <option key={each.id} value={each.id}>{each.name}</option>
                        })
                    }
                </select>
            </div>
        );
    }
}*/

const OrderMenu = props => {
    return (
        <div className="OrderMenu">
            <select value={`${Menu.find(each => each.name === props.value).id}`} onChange={props.onChange}>
                {
                    Menu.map(each => {
                        return <option key={each.id} value={each.id}>{each.name}</option>
                    })
                }
            </select>
        </div>
    );
};

export default OrderMenu;