import React from 'react';
import { connect } from 'react-redux'
import {Switch, Route, Redirect} from 'react-router-dom';
import Homepage from './Components/Pages/Homepage/HomePage';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import SigninSignup from './Components/Sign-in-Sign-up/Sign-in-Sign-up';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import './App.scss';
import { setCurrentUser } from './redux/user/user.action';

class App extends React.Component {
  unsubscribeFromAuth = null;
  
  componentDidMount() {
    const {setCurrentUser} = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
                   
              id: snapShot.id,
              ...snapShot.data()
            
          });
          console.log(this.state)
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path={'/'} component={Homepage} />
          <Route path={'/shop'} component={Shop} />
          <Route exact path={'/signin'} render={ () =>this.props.currentUser?(<Redirect to='/'/>):(<SigninSignup/>)}/>
        </Switch>
      </div>
    );
  }
}



const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
