import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import IconBack from '../assets/gobackarrow.svg';
import IconFavorite from '../assets/favorite.svg';
import IconFavoriteSelected from '../assets/favoriteselected.svg';

class SingleItem extends Component {

    state = {
        company: '',
        title: '',
        price: '',
        measurements: '',
        description: '',
        creators: '',
        image: '',
        on_hold: '',
    };

    componentDidMount() {
        axios.get(`/item/${this.props.match.params.id}`).then((response) => {
            const {title, description, creators, image, price, on_hold} = response.data;

            if (price === null) {
                return this.setState({
                    title, description, creators, image, on_hold,
                    price: 'Price Upon Request',
                    company: response.data.seller.company,
                    measurements: response.data.measurements.display,
                })
            }
            this.setState({
                title, description, creators, image, on_hold,
                price: response.data.price.amounts.USD,
                company: response.data.seller.company,
                measurements: response.data.measurements.display,
            })
        })
    }

    render() {
        const {title, description, creators, image, price, company, measurements, on_hold} = this.state;
        return (
            <div className="single-item-page">
                <header className="single-item-header">
                    <Link to="/"><img src={IconBack} alt=""/>Home</Link>
                    {company}
                </header>
                <div className="single-item-image">
                    <span>{on_hold ?
                        <img src={IconFavoriteSelected} alt="favorite"/> :
                        <img src={IconFavorite} alt="favorite"/>}
                    </span>
                    <img src={image} alt="no image"/>
                </div>
                <div className="item-info-container">
                    <div className="info-section-1">
                        <p className="item-title">{title}</p>
                        <p>{price}</p>
                        <p>Measurements: {measurements}</p>
                        <div className="info-section-1-action-buttons">
                            <span>PURCHASE</span>
                            <span>MAKE OFFER</span>
                        </div>
                    </div>
                    <div className="info-section-2">
                        <p>{description}</p>
                        <p>Creator: {creators}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default SingleItem;