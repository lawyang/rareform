import React, { Component }from 'react';
import './Home.css';
import Header from '../../Global/Header/Header';

// Material UI Components
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class Home extends Component {
    state = {
    };

    render() {
        return(
            <div class="grid-container">
                <div class="Header"><Header /></div>
                <div class="area1">
                    <Card>
                        <CardContent>
                            <TextField
                                id="outline-full-width"
                                label="username"
                                placeholder="username"
                                // fullWidth
                                margin="normal"
                            >
                            </TextField>
                            <br/>
                            <TextField
                                id="outline-full-width"
                                label="password"
                                placeholder="password"
                                // fullWidth
                                margin="normal"
                            >
                            </TextField>
                        </CardContent>
                            <Button
                                variant="outlined"
                                color="primary"
                            >
                                Submit
                            </Button>
                            <br/>
                            <Button
                                variant="outlined"
                                color="primary"
                            >
                                New User
                            </Button>
                    </Card>
                </div>
                <div class="area2"> Area2 </div>
            </div>
        )
    }
}

export default (Home);