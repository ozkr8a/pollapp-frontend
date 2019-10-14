import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './containers/Navigation';
import Login from './containers/Login';
import NotFound from './components/NotFound';
import Signup from './containers/Signup';
import Profile from './containers/Profile';
import Main from './containers/Main';
import { Route, NavLink, Switch } from 'react-router-dom'
import AllPolls from './containers/AllPolls';

class App extends React.Component {

  state = {
    loggedInUserId: null,
    token: null
  }

  componentDidMount(){
    this.setState({
      token: localStorage.token
    })
  }

  isLoggedIn(){
    return !!this.state.token
  }

  loginUser = (token, userId) => {
    localStorage.token = token
    localStorage.userId = userId
    this.setState({
      token: token,
      loggedInUserId: userId
    })
  }

  logOutUser = () => {
    delete localStorage.token
    delete localStorage.userId
    this.setState({
      token: null,
      loggedInUserId: null
    })
  }

  render(){

    // const userViews = (
    //   <div>
    //     <Navigation />
    //     <Route exact path="/login" component={Login}/>
    //     <Route exact path="/main" component={Main}/>
    //     <Route exact path="/profile" component={Profile}/>
    //   </div>
    // )


  return (<>
    <Navigation />
    <div className="App"> 
      <header>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Switch>
      <Route path="/" exact component={ Login }/>
      <Route path="/login" component={ Login }/>
      <Route path="/signup" component={ Signup }/>
      <Route path="/profile" component={ Profile }/>
      <Route path="/polls" component={ AllPolls }/>
      <Route component={ NotFound }/>
      </Switch>


      {/* {
        this.isLoggedIn()
        ?
        <>
        <button onClick={ this.logOutUser }>LOG OUT</button>
        <Main token={ this.state.token } loggedInUserId={ this.state.loggedInUserId}/>
        </>
        :
        <Login loginUser={this.loginUser}/>
      } */}
    </div>
          
    </>
  );
  }
}

export default App;
