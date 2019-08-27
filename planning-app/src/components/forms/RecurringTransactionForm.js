import React, { Component } from 'react';
import { FormGroup, Label, Input, InputGroup, InputGroupAddon } from 'reactstrap';
import { recurringCategories } from '../../constants/transactionCategories';

class RecurringTransactionForm extends Component {
  constructor(props) {
    super(props);
    const today = new Date();
    const convert = (date) => {
      return date.toISOString().slice(0,10);
    }

    this.state = {
      amount: '',
      category: 'Not Selected',
      startDate: convert(new Date()),
      endDate: convert(new Date(today.getFullYear() + 1, today.getMonth(), today.getDate())),
      // If indefinite is true endDate must be ''
      indefinite: false
    }
  }

  // Toggle indefinte ending in state with checkbox
  handleIndefinte = (event) => {
    const { indefinite } = this.state;
    this.setState({
      indefinite: !indefinite,
      endDate: null
    });
  }

  // Handles data callback to parent modal so modal can submit data to GraphQL
  // if any data has changed in state
  componentDidUpdate(prevState) {
    const { dataCallback } = this.props;
    const { amount, category, startDate, endDate, indefinite } = this.state;
    const { prevAmount, prevCategory, prevEndDate, prevStartDate, prevIndefinite } = prevState
    if(amount !== prevAmount || category !== prevCategory || startDate !== prevStartDate
      || endDate !== prevEndDate || prevIndefinite != indefinite) {
      // Just sets data for submit in parent
      dataCallback({ amount, category, startDate, endDate, recurring: true});
    }
  }

  render() {
    const { indefinite } = this.state;
    return (
      <div>
      <Label for="amount">Enter Transaction Amount</Label>
      <InputGroup className="mb-4">
        <InputGroupAddon addonType="prepend">$</InputGroupAddon>
        <Input name="amount" placeholder="Amount" min={0.00} type="number" value={this.state.amount} onChange={event => this.setState({amount: event.target.value})}/>
      </InputGroup>
      <FormGroup>
          <Label for="Date">Starting Date</Label>
          <Input
            type="date"
            name="startDate"
            id="startDate"
            placeholder="date placeholder"
            onChange={event => this.setState({startDate: event.target.value})}
            value={this.state.startDate}
          />
        </FormGroup>
        <FormGroup>
            <Label for="Date">End Date</Label>
            <Input
              type="date"
              name="endDate"
              id="endDate"
              placeholder="date placeholder"
              onChange={event => this.setState({endDate: event.target.value})}
              value={this.state.endDate || ''}
              disabled={indefinite}
            />
          </FormGroup>
          <FormGroup check className="mb-4">
            <Label check>
              <Input type="checkbox" onChange={this.handleIndefinte}/>{' '}
              Indefinite Payment?
            </Label>
          </FormGroup>
        <FormGroup>
          <Label for="typeSelect">Enter the transaction category</Label>
          <Input type="select" name="select" id="typeSelect" onChange={event => this.setState({category: event.target.value})}>
            {recurringCategories.map((category) => {
              return <option key={category}>{category}</option>
            })}
          </Input>
        </FormGroup>

      </div>

    )
  }
}

export default RecurringTransactionForm;
