import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Homepage from './Components/Pages/Homepage/HomePage';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import SigninSignup from './Components/Sign-in-Sign-up/Sign-in-Sign-up';
import {auth} from './firebase/firebase.utils';

import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    };
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({currentUser: user});
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path={'/'} component={Homepage} />
          <Route path={'/shop'} component={Shop} />
          <Route path={'/signin'} component={SigninSignup} />
        </Switch>
      </div>
    );
  }
}

export default App;
