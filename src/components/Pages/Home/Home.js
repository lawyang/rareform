import React, { Component }from 'react';
import './Home.css';
import Header from '../../Global/Header/Header';

import { connect } from 'react-redux';

import Login from '../Login/Login';

class Home extends Component {
    state = {
    };

    render() {
        return(
            <div className="grid-container">
                <div className="Header"><Header /></div>
                <div className="login">
                    <Login />
                </div>
            </div>
        )
    }
}

export default (Home);