import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class SingleItem extends Component {

    render() {
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