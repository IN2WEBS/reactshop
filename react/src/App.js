import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import * as actions from './actions/itemsActions';
import './App.css';
import HomePage from './components/HomePage';
import SingleItem from './components/SingleItem';

class App extends Component {
    componentDidMount() {
        this.props.fetchShopItems();
    }

    render() {
        return (
            <div className="app-container">
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={HomePage}/>
                        <Route path="/item" component={SingleItem}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(null, actions)(App);