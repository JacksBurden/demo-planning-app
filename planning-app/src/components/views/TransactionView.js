import React, { Component } from 'react';
import { Row, Col, Jumbotron } from 'reactstrap';
import { Redirect } from 'react-router-dom'
import SingleTransactionForm from '../forms/SingleTransactionForm';
import TransactionCard from '../TransactionCard';
import transactionTypes from '../../constants/transactionTypes';
import TransactionModal from '../TransactionModal';
import { singleMutation } from '../../mutations/transactionMutations';

// Represents the view at /transaction route. This will feature a form allowing users
// to input financial transactions for tracking.
class TransactionView extends Component {
    constructor(props) {
      super(props);

      // Transaction Type represents one of the implemented types, so far
      // oneTime and recurring
      this.state = {
        transactionType: ''
      };
    }


    // Sets a transaction type so the modal knows how render,
    transactionTypeCallback = (type) => {
      this.setState({
        transactionType: type
      });
    }


    render() {
      const types = Object.keys(transactionTypes);
      const { transactionType } = this.state;
      // Get correct React component for form and UI name from transactionType
      const { form, name } = transactionType ? transactionTypes[transactionType] : {};
      return (
        <div>
          <Jumbotron className="mt-5 text-center pb-6">
            <h1 className="display-4 pb-2">Track your money now for a better financial future!</h1>
            <p className="lead">Enter your financial transactions to help you keep track of every dollar and allow us to customize our advising.</p>
            <hr className="my-2" />
            <p>Both one time transactions like food purchases and recurring transactions like Netflix subscriptions can be entered below</p>
            </Jumbotron>
            <Row>
                {types.map((type)=> {
                  const {name, text } = transactionTypes[type];
                  return (<Col md key={name}>
                    <TransactionCard title={name} text={text} buttonCallback={() => this.transactionTypeCallback(type)} buttonText={name}/>
                  </Col>);
                })}
            </Row>
            {transactionType &&
            <TransactionModal
              toggle={() => this.setState({transactionType: ''})}
              isOpen={!!transactionType}
              ComponentForm={form}
              name={name}/>
            }
        </div>
      )
    }

}

export default TransactionView;
