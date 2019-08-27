import React, { Component } from 'react';
import { FormGroup, Label, Input, Form, Button } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import { withApollo } from 'react-apollo';
import { LoginMutation } from '../../mutations/authMutations';


class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error:'',
      success: false
    }
  }


  // Handles the login request
  // TODO: Make redirect and session storage of user work correctly
  loginQuery = (e) => {
    const variables = { email: this.state.email, password: this.state.password}
    // Run query
    this.props.client.query({query: LoginMutation, variables: variables}).then((data) => {
      console.log(data)
      // check if data exists and set user at higher level
      if(data.data.user[0]) {
        this.props.userCallback()
      } else {
        // Otherwise show error
        this.setState({
          error: 'No user found for email password combination'
        });
      }
    });
  }


  render() {
    // Doesn't work
    if(localStorage.getItem('loggedInUser')) {
      return <Redirect to="/planning"/>
    }
    const { email, password, error } = this.state;
    return (
            <div>
            <Form>
              <FormGroup>
                <Label for="loginEmail">Email</Label>
                <Input type="email" name="loginEmail" id="loginEmail"
                      placeholder="Enter your email" value={email}
                      onChange={e => this.setState({email: e.target.value })}/>
              </FormGroup>
              <FormGroup>
                <Label for="loginPassword">Password</Label>
                <Input type="password" name="loginPassword" id="loginPassword"
                  placeholder="Enter your password" value={password}
                  onChange={e => this.setState({password: e.target.value })}/>
              </FormGroup>
              <Button color="info" onClick={this.loginQuery}>Login</Button>
              <div>{error}</div>
            </Form>
            </div>
    )
  }
}

export default withApollo(LoginForm);
