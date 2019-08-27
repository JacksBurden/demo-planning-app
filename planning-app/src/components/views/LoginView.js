import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import {Button, Input, Jumbotron, Row, Col } from 'reactstrap'
import LoginForm from '../forms/LoginForm.js';
import SignupForm from '../forms/SignupForm.js';

// View for login and signup functionality
class LoginView extends Component {
  state = {
    login: true,
    redirect: false
  }

  // Meant to force redirect to logged in state
  userCallback = () => {
    this.setState({redirect: true})
  }

  render() {
    if(this.state.redirect) {
      return <Redirect to="/planning"/>
    }
    const { login } = this.state
    return (
      <div>
        <Jumbotron className="mt-5 text-center pb-6">
          <h1 className="display-4 pb-2">Begin your path to a better financial future!</h1>
          <h3 >Log in or sign up to begin tracking your transactions</h3>
          <h3>With an account, you can view your entire financial history
          and received guided feedback for the future!</h3>
          </Jumbotron>
        <Row>
         <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Button color="info" className="mx-auto" onClick={e => this.setState({login: !login})}>{login ? 'Go to Signup' : 'Go to Login'}</Button>
            {login ? <LoginForm userCallback={this.userCallback}/> : <SignupForm/>}
        </Col>
        </Row>
      </div>
    )
  }
}

export default LoginView;
