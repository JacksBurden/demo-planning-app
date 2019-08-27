import React from 'react';
import '../App.css';
import NavBar from './NavBar';
import { Switch, Route } from 'react-router-dom';
import ProfileView from './views/ProfileView';
import PlanningView from './views/PlanningView';
import TransactionView from './views/TransactionView';
import LoginView from './views/LoginView';
import { Container } from 'reactstrap';

// Base component, renders navbar, routes, and container.
function App() {
 return (
    <div>
      <NavBar />
      <Container>
        <Switch>
          <Route exact path="/" component={ProfileView} />
          <Route exact path="/transaction" component={TransactionView} />
          <Route exact path="/planning"    component={PlanningView} />
          <Route exact path="/login" component={LoginView}/>
        </Switch>
      </Container>
    </div>
  )
}

export default App;
