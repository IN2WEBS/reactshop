import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
import {connect} from 'react-redux';


class HomePage extends Component {

    state = {
        loadItems: 3,
    };

    loadMoreItems = () => {
        this.setState({
            loadItems: this.state.loadItems + 3
        })
    };

    render() {
        const allItems = this.props.shopItems && this.props.shopItems.slice(0, `${this.state.loadItems}`).map((item, i) => {
                const price = item.price && item.price.amounts.USD;
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
                {allItems.length < this.props.shopItems.length &&
                <button onClick={this.loadMoreItems}>Load more</button>}
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