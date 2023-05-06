import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    // Remove token using the user service
    userService.logOut();
    // Update user state in App
    setUser(null);
  }

  let title = "Welcome " + user.name + "!"

  return (
    <div className="fs-5" >
      <Navbar className="p-2 nav-bg" collapseOnSelect expand="lg" id="navbar" sticky="top" variant="light">
        <Navbar.Brand className="" href="/">
          TURTLE
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav variant="" className="">
            <Nav.Link activeClassName="active" href="/" className="d-sm-block">Games</Nav.Link>
            <Nav.Link activeClassName="active" href="/about">About</Nav.Link>
            <Nav.Link activeClassName="active"   className="" href="/score-board">ScoreBoard</Nav.Link>
            <Nav.Link activeClassName="active" className="d-md-none" onClick={handleLogOut} href="">Logout</Nav.Link>
            <NavDropdown className="d-none d-md-block" title={title} id="basic-nav-dropdown">
              <NavDropdown.Item onClick={handleLogOut} href="">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )


}