import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from './actions/itemsActions';
import './App.css';

class App extends Component {
    componentDidMount() {
        this.props.fetchShopItems();
    }

    render() {
        return (
            <div className="app-container">
                Parduotuvee
            </div>
        );
    }
}

export default connect(null, actions)(App);
