import React from 'react';
import { Card, CardBody, CardText } from 'reactstrap';

// Displays aggregate statistics for all transactions a user has taken.
const TransactionStatistics = (props) => {
    return (
      <div>
            <h3 className="mb-4">Detailed Statistics to keep you informed</h3>
            <Card>
            <CardBody style={{backgroundColor: '#e9ecef'}}>
            <CardText>
            </CardText>
            </CardBody>
            </Card>
            </div>
          );
}

export default TransactionStatistics;
