import React from 'react';
import './App.css';
import Game from './components/TicTacToe/index.js';
import { render } from '@testing-library/react';

class Login extends React.Component {
  clickHandler() {
    console.log("User is logging on");
    console.log(this);
    for(const user of this.props.users) {
      if(this.refs.username.value === user.username &&
        this.refs.password.value === user.password)
    }
    this.props.logInUsers();
  }
  render() {
    return <div>
      <input ref="username" type="text"/>
      <input ref="password" type="text"/>
      <input type="button" value="Login" onClick={() => this.clickHandler()}/>
    </div>;
  }
}

class App extends React.Component {
  constuctor(props) {
    super(props)
    this.state = {loggedIn:false,}
  }
}
logInUser(loggedInStatus) {
  this.setState({loggedIn:loggedInStatus});
}
render() {
  let returnComponent;
  const login = <login users={this.state.users}
    logInuser={() => this.logInUser(true)} />;
  const game = <Game logOutUser={() => this.logInUser(false)} />
  if(!this.state.loggedIn) {
    returnComponent = login;
  } else {
    returnComponent = game;
  }
}

export default App;
