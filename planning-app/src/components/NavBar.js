import React from 'react'
import { NavLink as RouterLink } from 'react-router-dom'
import { withRouter } from 'react-router'
import logo from '../logo.svg'
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

// The header navbar component that handles SPA routing
const NavBar = (props) => {
    return (
      <div>
          <Navbar color="dark" expand="lg">
                <NavbarBrand><NavLink className="d-inline" tag={RouterLink} exact to="/planning"><img alt="React" height={40} width={40}src={logo}/></NavLink><b className="text-info">Planning App</b></NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink className="font-weight-bold mr-4 text-info" tag={RouterLink} exact to="/planning">
                            View Your Financial Progress
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="font-weight-bold mr-4 text-info " tag={RouterLink} exact to="/transaction">
                          Log a Transaction
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="font-weight-bold mr-4 text-info" tag={RouterLink} exact to="/">
                          Profile
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
  }

export default withRouter(NavBar)
