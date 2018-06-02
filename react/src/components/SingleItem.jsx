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
        img: '',
    };

    componentDidMount() {
        axios.get(`/item/${this.props.match.params.id}`).then((response) => {
            this.setState({
                company: response.data.seller.company,
                title: response.data.title,
                price: response.data.price.amounts.USD,
                measurements: response.data.measurements.display,
                description: response.data.description,
                creators: response.data.creators,
                img: response.data.image,
            })
        })
    }

    render() {
        console.log(this.state);
        return (
            <div className="homepage">
                <Link to="/">
                    <button>Home</button>
                </Link>
                This is SingleItem
            </div>
        );
    }
}

export default SingleItem;