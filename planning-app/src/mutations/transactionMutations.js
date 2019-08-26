import gql from 'graphql-tag';

const TransactionMutation = gql`
mutation insert_transaction($objects: [transaction_insert_input!]! ) {
  insert_transaction(objects: $objects) {
    returning {
      transactionid
    }
  }
}`;

export { TransactionMutation };
