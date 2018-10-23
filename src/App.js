import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

//Components
import Header from './components/Global/Header/Header';
import Home from './components/Pages/Home/Home';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
          <Header />
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route
              path="/home"
              component={Home}
              className='appFrame'
            />
            <Route render={() => <h1>404</h1>} />
          </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
