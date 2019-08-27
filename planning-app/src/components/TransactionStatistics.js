import React from 'react';
import { Card, CardBody, Alert } from 'reactstrap';

// Displays aggregate statistics for all transactions a user has taken.
const TransactionStatistics = ({ data }) => {
    const aggregate = data.aggregate;
    return (
      <div className="text-center">
          <h3 className="mb-4">Detailed Statistics to keep you informed!</h3>
          <Card>
            <CardBody style={{backgroundColor: '#e9ecef'}}>
              <h3 className="text-lg font-weight-bold">Transaction Count</h3>
              <Alert className="mb-4" color="info">
                So far you have logged {aggregate.count} transactions on the app!
              </Alert>
              <h3 className="text-lg font-weight-bold">Total Transactions</h3>
              <Alert className="mb-4" color="info">
                The total amount spent on all your logged transactions is ${aggregate.sum.amount}.
              </Alert>
              <h3 className="text-lg font-weight-bold">Average Transaction Amount</h3>
              <Alert className="mb-4" color="info">
                  Your average transaction is ${Math.round(aggregate.avg.amount * 100)/100}.
              </Alert>
              <h3 className="text-lg font-weight-bold">Smallest Transaction</h3>
              <Alert className="mb-4" color="info">
                  Your smallest transaction is  ${aggregate.min.amount}.
              </Alert>
              <h3 className="text-lg font-weight-bold">Largest Transaction</h3>
              <Alert className="mb-4" color="info">
                  Your largest transaction is ${aggregate.max.amount}.
              </Alert>
          </CardBody>
          </Card>
      </div>
          );
}

export default TransactionStatistics;
