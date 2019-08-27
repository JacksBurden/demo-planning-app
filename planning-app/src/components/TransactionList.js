import React from 'react';
import { Card, CardTitle, CardBody, CardText } from 'reactstrap';

// Displays a list of transactions as stacked cards, accounting for one time and recurring
const TransactionList = ({transactions, text}) => {
  return (<div>
              <h3 className="text-center mb-4">{text}</h3>
              {transactions.map((transaction) => {
                return (
                  <Card key={transaction.transactionid} className="border border-info border-lg rounded mb-2">
                      <CardBody>
                          <CardTitle className="mb-2">{transaction.category} Transaction</CardTitle>
                          <CardText>Amount: ${transaction.amount}<br/>{transaction.recurring === true ? 'Start' : ''} Date: {transaction.startDate}<br/>
                          {transaction.endDate ? `End Date:${transaction.endDate}`: ''}
                          </CardText>
                      </CardBody>
                  </Card>
                      );
              })}
          </div>);
}

export default TransactionList;
