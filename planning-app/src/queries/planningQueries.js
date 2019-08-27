import gql from 'graphql-tag';

const PlanningViewQuery = gql`
query planningview($userid: Int!) {
  top: transaction(where: {userid: {_eq: $userid}}, order_by: {amount: desc_nulls_last}, limit: 5) {
    amount
    category
    startDate
    endDate
    recurring
    transactionid
  }
  recurring: transaction(where: {userid: {_eq: $userid}, recurring: {_eq: true}}) {
    amount
    category
    startDate
    endDate
    recurring
    transactionid
  }
  transaction_aggregate(where: {userid: {_eq: $userid}}) {
    aggregate {
      avg {
        amount
      }
      count(distinct: true)
      max {
        amount
      }
      min {
        amount
      }
      sum {
        amount
      }
    }
  }
}`;

export { PlanningViewQuery };
