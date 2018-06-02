import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions/singleItemAction';


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
                    <div key={i} onClick={() => this.props.readItem(item)}>
                        <Link to={`/item/${item.id}`}>
                            <img src={item.image} alt=""/>
                            <p>{price}</p>
                        </Link>
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

export default connect(mapStateToProps, actions)(HomePage)