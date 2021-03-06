import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions/singleItemAction';
import IconFavorite from '../assets/favorite.svg';
import IconFavoriteSelected from '../assets/favoriteselected.svg';
import Header from './header';

class HomePage extends Component {

    state = {
        loadItems: 6,
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
                    <div key={i} onClick={() => this.props.readItem(item)} className="shop-item">
                        <Link to={`/item/${item.id}`}>
                            <img src={item.image} alt=""/>
                        </Link>
                        <div className="shop-item-info">
                            <span>{price}</span>
                            <span onClick={() => this.props.favoriteItem(item.id)}>
                                {item.on_hold ?
                                    <img src={IconFavoriteSelected} alt="favorite"/> :
                                    <img src={IconFavorite} alt="favorite"/>}
                            </span>
                        </div>
                    </div>
                );
            }
        );

        return (
            <div>
                <Header headerTitle={'Browse Page'} showHomeLink={false}/>
                <div className="homepage-container">{allItems}
                    {allItems.length < this.props.shopItems.length &&
                    <div className="button-container">
                        <button className="btn" onClick={this.loadMoreItems}>Load more</button>
                    </div>}
                </div>
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