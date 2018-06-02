import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class SingleItem extends Component {

    state = {
        company: '',
        title: '',
        price: '',
        measurements: '',
        description: '',
        creators: '',
        image: '',
    };

    componentDidMount() {
        axios.get(`/item/${this.props.match.params.id}`).then((response) => {
            const {title, description, creators, image, price} = response.data;

            if (price === null) {
                return this.setState({
                    title, description, creators, image,
                    price: 'Price Upon Request',
                    company: response.data.seller.company,
                    measurements: response.data.measurements.display,
                })
            }
            this.setState({
                title, description, creators, image,
                price: response.data.price.amounts.USD,
                company: response.data.seller.company,
                measurements: response.data.measurements.display,
            })
        })
    }

    render() {
        return (
            <div className="single-item-page">
                <Link to="/">
                    <button>Home</button>
                </Link>
                This is SingleItem
            </div>
        );
    }
}

export default SingleItem;