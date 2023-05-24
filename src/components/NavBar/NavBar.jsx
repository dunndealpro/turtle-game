import {GiTurtle} from "react-icons/gi"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  let title = "Welcome " + user.name + "!"

  return (
    <div className="fs-5" >
      <Navbar className="p-2 nav-bg" collapseOnSelect expand="lg" id="navbar" sticky="top" variant="light">
        <Navbar.Brand className="" href="/">
          <GiTurtle size={35}/>&nbsp;&nbsp;
        </Navbar.Brand>
          <span >TURTLE</span>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav variant="" className="">
            <Nav.Link   href="/" className="d-sm-block turtle-nav-item">Games</Nav.Link>
            <Nav.Link   className='turtle-nav-item' href="/about">About</Nav.Link>
            <Nav.Link     className="turtle-nav-item" href="/score-board">ScoreBoard</Nav.Link>
            <Nav.Link   className="d-md-none" onClick={handleLogOut} href="">Logout</Nav.Link>
            <NavDropdown className="d-none d-md-block turtle-nav-item" title={title} id="basic-nav-dropdown">
              <NavDropdown.Item onClick={handleLogOut} href="/">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )


}