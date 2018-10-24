import React, { Component }from 'react';
import Header from '../../Global/Header/Header';

import { connect } from 'react-redux';



// Material UI Components
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class Login extends Component {
    state = {
    };

    render() {
        return(
            <div>
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
        )
    }
}

export default (Login);