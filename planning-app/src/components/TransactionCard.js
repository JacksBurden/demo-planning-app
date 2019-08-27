import React from 'react';
import { Card, CardTitle, CardText, Button } from 'reactstrap';

// A card representing the data of a single transaction.
const TransactionCard = (props) => {
  const { title, text, buttonCallback, buttonText } = props;
  return (<div>
    <Card body className="text-center">
      <CardTitle className="h1">{title}</CardTitle>
      <CardText className="mx-4">{text}</CardText>
      <Button className="mt-2 w-50 mx-auto" color="info" onClick={buttonCallback}>Enter {buttonText} Transactions</Button>
    </Card>
    </div>
  );
}

export default TransactionCard;
