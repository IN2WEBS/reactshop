import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class HomePage extends Component {

    render() {
        return (
            <div className="homepage">
                <Link to="/item">
                    <button>Item</button>
                </Link>
                This is homepage
            </div>
        );
    }
}

export default HomePage;