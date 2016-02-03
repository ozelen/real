import React from 'react';
import {Link, HistoryLocation} from 'react-router';
import {LinkContainer} from 'react-router-bootstrap';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

export default
class App extends React.Component {
  render () {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to='/'>Real Estate</Link>
            </Navbar.Brand>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to='/about'>
                <NavItem>About</NavItem>
              </LinkContainer>
            </Nav>
            <Nav>
              <LinkContainer to='/points'>
                <NavItem>Points of Interest</NavItem>
              </LinkContainer>
            </Nav>
            <Nav pullRight>
              <NavItem href="#">Log in</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}
