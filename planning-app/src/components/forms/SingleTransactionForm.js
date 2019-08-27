import React, { Component } from 'react';
import { FormGroup, Label, Input, InputGroup, InputGroupAddon, Row, Col } from 'reactstrap';
import { oneTimeCategories } from '../../constants/transactionCategories';

// Represents the input of a one time transaction as a controlled component
class SingleTransactionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dollarAmount: '',
      centAmount: '',
      category: 'Food/Beverage',
      startDate: new Date().toISOString().slice(0, 10),
    }
  }

  // Need to update parent data when necessary for submission
  componentDidUpdate(prevState) {
    const { dataCallback } = this.props;
    const { dollarAmount, centAmount, category, startDate } = this.state;
    const { prevDollarAmount, prevCentAmount, prevCategory, prevStartDate } = prevState;
    if(dollarAmount !==prevDollarAmount || category !== prevCategory || startDate !== prevStartDate || centAmount != prevCentAmount) {
      // Creates appropriate dollar amount
      const total = new Number(`${dollarAmount}.${centAmount}`);
      const variables = {amount: total, category, startDate}
      dataCallback(variables);
    }
  }


  render() {
    return (
      <div>
      <Label for="amount">Enter Transaction Amount</Label>
      <Row className="no-gutters">
      <Col>
      <InputGroup className="mb-4">
        <InputGroupAddon addonType="prepend">$</InputGroupAddon>
        <Input name="amount" placeholder="Dollars" min={0.00} type="number" value={this.state.dollarAmount} onChange={event => this.setState({dollarAmount: event.target.value})}/>
      </InputGroup>
      </Col>
      .
      <Col sm={3}>
      <InputGroup className="mb-4">
        <Input name="amount" placeholder="Cents" min={0.00} max={99} type="number" value={this.state.centAmount} onChange={event => this.setState({centAmount: event.target.value})}/>
      </InputGroup>
      </Col>
      </Row>
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
