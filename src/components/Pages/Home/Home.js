import React, { Component }from 'react';
import './Home.css';

class Home extends Component {
    state = {
    };

    render() {
        return(
            <div class="grid-container">
                <div class="Header"> Header 1 </div>
                <div class="area1"> Area1 </div>
                <div class="area2"> Area2 </div>
            </div>
        )
    }
}

export default (Home);