import React, { Component } from 'react'
import { NavLink as RouterLink } from 'react-router-dom'
import { withRouter } from 'react-router'
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

class NavBar extends Component {
  render() {
    return (
      <div>
          <Navbar color="faded" expand="lg">
                <NavbarBrand>Planning App</NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink tag={RouterLink} exact to="/">
                          Profile
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={RouterLink} exact to="/transaction">
                          Log a Transaction
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={RouterLink} exact to="/planning">
                            View Your Financial Progress
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
  }
}

export default withRouter(NavBar)
