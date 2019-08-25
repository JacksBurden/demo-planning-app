import React from 'react';
import '../App.css';
import NavBar from './NavBar';
import { Switch, Route } from 'react-router-dom';
import ProfileView from './views/ProfileView';
import PlanningView from './views/PlanningView';
import TransactionView from './views/TransactionView';
import { Container } from 'reactstrap';

function App() {
 return (
    <div>
      <NavBar />
      <Container fluid>
        <Switch>
          <Route exact path="/" component={ProfileView} />
          <Route exact path="/transaction" component={TransactionView} />
          <Route exact path="/planning"    component={PlanningView} />
        </Switch>
      </Container>
    </div>
  )
}

export default App;
