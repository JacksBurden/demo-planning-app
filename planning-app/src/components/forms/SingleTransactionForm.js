import React, { Component } from 'react';
import { FormGroup, Label, Input, InputGroup, InputGroupAddon } from 'reactstrap';
import { oneTimeCategories } from '../../constants/transactionCategories';

// Represents the input of a one time transaction as a controlled component
class SingleTransactionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0.00,
      category: 'Not Selected',
      startDate: new Date().toISOString().slice(0, 10),
    }
  }

  // Need to update parent data when necessary for submission
  componentDidUpdate(prevState) {
    const { dataCallback } = this.props;
    const { amount, category, startDate } = this.state;
    const { prevAmount, prevCategory, prevStartDate } = prevState;
    if(amount !==prevAmount || category !== prevCategory || startDate !== prevStartDate) {
      dataCallback(this.state);
    }
  }


  render() {
    return (
      <div>
      <Label for="amount">Enter Transaction Amount</Label>
      <InputGroup className="mb-4">
        <InputGroupAddon addonType="prepend">$</InputGroupAddon>
        <Input name="amount" placeholder="Amount" min={0.00} type="number" value={this.state.amount} onChange={event => this.setState({amount: event.target.value})}/>
      </InputGroup>
      <FormGroup>
          <Label for="Date">Date of Transaction</Label>
          <Input
            type="date"
            name="date"
            id="Date"
            placeholder="date placeholder"
            onChange={event => this.setState({startDate: event.target.value})}
            value={this.state.startDate}
          />
        </FormGroup>
        <FormGroup>
          <Label for="typeSelect">Enter the transaction category</Label>
          <Input type="select" name="select" id="typeSelect" onChange={event => this.setState({category: event.target.value})}>
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
