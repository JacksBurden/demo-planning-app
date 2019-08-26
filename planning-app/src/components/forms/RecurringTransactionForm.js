import React, { Component } from 'react';
import { FormGroup, Label, Input, InputGroup, InputGroupAddon } from 'reactstrap';
import { recurringCategories } from '../../constants/transactionCategories';

class RecurringTransactionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: '',
      type: 'Not Selected',
      startDate: '',
      endDate:'',
      // If indefinite is true endDate must be ''
      indefinite: false
    }
  }

  // Toggle indefinte ending in state with checkbox
  handleIndefinte = (event) => {
    const { indefinite } = this.state;
    this.setState({
      indefinite: !indefinite,
      endDate: ''
    });
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
              value={this.state.endDate}
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
          <Input type="select" name="select" id="typeSelect" onSelect={event => this.setState({type: event.target.value})}>
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
