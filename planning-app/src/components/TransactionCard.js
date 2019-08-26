import React from 'react';
import { Card, CardTitle, CardText, Button } from 'reactstrap';

const TransactionCard = (props) => {
  const { title, text, buttonCallback, buttonText } = props;
  return (<div>
    <Card body className="text-center">
      <CardTitle>{title}</CardTitle>
      <CardText>{text}</CardText>
      <Button onClick={buttonCallback}>Submit {buttonText}Transaction</Button>
    </Card>
    </div>
  );
}

export default TransactionCard;
