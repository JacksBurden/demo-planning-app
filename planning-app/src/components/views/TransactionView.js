import React, { Component } from 'react';
import { Row, Col, Jumbotron } from 'reactstrap';
import SingleTransactionForm from '../forms/SingleTransactionForm';
import TransactionCard from '../TransactionCard';
import transactionTypes from '../../constants/transactionTypes';
import TransactionModal from '../TransactionModal';

// Represents the view at /transaction route. This will feature a form allowing users
// to input financial transactions for tracking.
class TransactionView extends Component {
    constructor(props) {
      super(props);
      this.state = {
        modalOpen: false,
        transactionType: ''
      };
    }

    // Toggles the modal state
   toggle = () => {
      const { modalOpen } = this.state;
      this.setState({
        modalOpen: !modalOpen
      });
    }

    // Sets a transaction type so the modal knows how render,
    // then toggles the modal
    transactionTypeCallback = (type) => {
      this.setState({
        transactionType: type
      }, this.toggle);
    }

    render() {
      const types = Object.keys(transactionTypes);
      const { modalOpen, transactionType } = this.state;
      // Get correct React component for form and UI name from transactionType
      const { form, name } = transactionType ? transactionTypes[transactionType] : {};
      return (
        <div>
          <Jumbotron className="mt-5">
            <h1 className="display-3">Track now for a better tomorrow!</h1>
            <p className="lead">Enter your financial transactions to help you keep track of every dollar and allow us to customize our advising.</p>
            <hr className="my-2" />
            <p>Both one time transactions like food purchases and recurring transactions like Netflix subscriptions can be entered below</p>
            </Jumbotron>
            <Row>
                {types.map((type)=> {
                  const {name, text } = transactionTypes[type];
                  return (<Col md key={name}>
                    <TransactionCard title={name} text={text} buttonCallback={() => this.transactionTypeCallback(type)} buttonText={'Track ' + name}/>
                  </Col>);
                })}
            </Row>
            <TransactionModal toggle={this.toggle} isOpen={modalOpen} type={transactionType} ComponentForm={form} name={name}/>
        </div>
      )
    }

}

export default TransactionView;
