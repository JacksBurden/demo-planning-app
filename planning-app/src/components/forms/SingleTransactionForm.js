import React, { Component } from 'react';
import { FormGroup, Label, Input, InputGroup, InputGroupAddon } from 'reactstrap';
import { oneTimeCategories } from '../../constants/transactionCategories';

class SingleTransactionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: '',
      type: 'Not Selected',
      date: '',
    }
  }

  // Links Input element for amount to component state
  handleAmount = (event) => {
     this.setState({amount: event.target.value});
  }

  // Links Select Element for type to component state
  handleType = (event) => {
    this.setState({type: event.target.value});
  }

  // Links date Input element to component state
  handleDate = (event) => {
   this.setState({date: event.target.value});
  }

  render() {
    return (
      <div>
      <Label for="amount">Enter Transaction Amount</Label>
      <InputGroup className="mb-4">
        <InputGroupAddon addonType="prepend">$</InputGroupAddon>
        <Input name="amount" placeholder="Amount" min={0.00} type="number" value={this.state.amount} onChange={this.handleAmount}/>
      </InputGroup>
      <FormGroup>
          <Label for="Date">Date of Transaction</Label>
          <Input
            type="date"
            name="date"
            id="Date"
            placeholder="date placeholder"
            onChange={this.handleDate}
            value={this.state.date}
          />
        </FormGroup>
        <FormGroup>
          <Label for="typeSelect">Enter the transaction category</Label>
          <Input type="select" name="select" id="typeSelect" onSelect={this.handleType}>
            {oneTimeCategories.map((category) => {
              return <option key={category}>{category}</option>
            })}
          </Input>
        </FormGroup>

      </div>

    )
  }
}

export default SingleTransactionForm;
