import React, { Component } from 'react';
import { FormGroup, Label, Input, InputGroup, InputGroupAddon, Form } from 'reactstrap';
import { oneTimeCategories } from '../../constants/transactionCategories';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }


  render() {
    const { email, password } = this.state;
    return (
      <div>
      <Form>
        <FormGroup>
          <Label for="signupEmail">Email</Label>
          <Input type="email" name="signupEmail" id="signupEmail"
                placeholder="Enter your email" value={email}
                onChange={e => this.setState({email: e.target.value })}/>
        </FormGroup>
        <FormGroup>
          <Label for="signupPassword">Password</Label>
          <Input type="password" name="signupPassword" id="signupPassword"
            placeholder="Enter your password" value={password}
            onChange={e => this.setState({password: e.target.value })}/>
        </FormGroup>
      </Form>
      </div>
    )
  }
}

export default SignupForm;
