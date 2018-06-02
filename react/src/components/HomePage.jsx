import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
import {connect} from 'react-redux';


class HomePage extends Component {

    render() {
        console.log('this.props.shopItems', this.props.shopItems);
        const allItems = this.props.shopItems && this.props.shopItems.map((item, i) => {
            const price = item.price && item.price.amounts.USD;
            console.log('price',price);
                return (
                    <div key={i}>
                        <img src={item.image} alt=""/>
                        <p>{price}</p>
                    </div>
                );
            }
        );
        return (
            <div className="homepage">
                {allItems}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        shopItems: state.items,
    }
};

export default connect(mapStateToProps)(HomePage)