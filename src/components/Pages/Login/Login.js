import React, { Component }from 'react';
import Header from '../../Global/Header/Header';

import { connect } from 'react-redux';

import { triggerLogin, formError, clearError } from '../../../redux/actions/loginActions';



// Material UI Components
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    componentDidMount() {

    }

    login = (event) => {
        event.preventDefault();
        if (this.state.username === '' || this.state.password === '') {
                this.props.dispatch(formError());
        } else {
            this.props.dispatch(triggerLogin(this.state.username, this.state.password));
        }
    }

    loginButton = () =>{
        console.log('hello this is the login button');
    }
    

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
                            onClick={()=>this.loginButton()}
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