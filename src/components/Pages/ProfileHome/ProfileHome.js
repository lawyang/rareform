import React, { Component }from 'react';
import Header from '../../Global/Header/Header';

import { connect } from 'react-redux';

import Login from '../Login/Login';

class ProfileHome extends Component {
    state = {
    };

    render() {
        return(
            <div className="grid-container">
                <div className="Header"><Header /></div>
                <div className="login">
                <p>Hello User</p>
                </div>
            </div>
        )
    }
}

export default (ProfileHome);