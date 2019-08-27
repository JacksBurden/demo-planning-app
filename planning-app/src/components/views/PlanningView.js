import React, { Component } from 'react';
import { Spinner, Jumbotron, Row, Col } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import { PlanningViewQuery } from '../../queries/planningQueries';
import { Query } from 'react-apollo';
import TransactionStatistics from '../TransactionStatistics';
import TransactionList from '../TransactionList';

// Represents the view at /planning route. Displays various charts with feedback
// on planning and meeting goals
class PlanningView extends Component {

    render() {
      const userid = 1
      // Run a query for highest amount transactions, recurring ones, and statistics then display
      return (
      <Query query={PlanningViewQuery} variables={{userid}}>
        {({ loading, error, data }) => {
          if (loading) return <Spinner style={{ width: '10rem', height: '10rem', position:'absolute', top: '40vh', left:'40vw'}} />
          if (error) {
            console.log(error);
          return <div>Error</div>
        }

          const { top, recurring, transaction_aggregate } = data
          return (
            <div>
            <Jumbotron className="mt-5 text-center pb-6">
              <h2 className="display-4 pb-2">View all of your important financial data in one place!</h2>
              <hr/>
              <h3 className="font-weight-light">This is your goto page for custom statistics to track your spending.</h3>
              </Jumbotron>
              <Row>
                  <Col sm={4}>
                    <TransactionStatistics data={transaction_aggregate}/>
                  </Col>
                  <Col sm={4}>
                      <TransactionList transactions={top} text={"Here are your largest transactions to date!"}/>
                  </Col>
                  <Col sm={4}>
                      <TransactionList transactions={recurring} text={"Below are your recurring transactions!"}/>
                  </Col>
              </Row>


            </div>
          )
        }}
      </Query>);
    }
}

export default PlanningView;
