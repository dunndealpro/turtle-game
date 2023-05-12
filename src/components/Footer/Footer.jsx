import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import Col from 'react-bootstrap/Col';

import * as userService from '../../utilities/users-service';

export default function Footer({ user, setUser }) {

  // function handleLogOut() {
  //   // Remove token using the user service
  //   userService.logOut();
  //   // Update user state in App
  //   setUser(null);
  // }

  // let title = "Welcome " + user.name + "!"

  return (
    <div className="fs-5" >
      <Navbar className="p-2 nav-bg justify-content-center" id="footer" sticky="bot" variant="light">
        {/* <Navbar.Brand className="" href="/">
          TURTLE
        </Navbar.Brand> */}
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        {/* <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center"> */}
        <Nav variant="" className="">
          {/* <Nav.Link activeClassName="active turtle-nav-item" href="/" className="d-sm-block turtle-nav-item">Games</Nav.Link>
            <Nav.Link activeClassName="active turtle-nav-item" className='turtle-nav-item' href="/about">About</Nav.Link>
            <Nav.Link activeClassName="active" turtle-nav-item   className="turtle-nav-item" href="/score-board">ScoreBoard</Nav.Link> */}
          {/* <Col className='m-2'> */}
            <a className='d-md-none m-2' href="https://www.linkedin.com/in/dunnevan/" target="blank"><BsLinkedin size={35} className="" /></a>
            <a className='d-md-none m-2' href="https://github.com/dunndealpro" target="blank"><BsGithub size={35} className="" /></a>
            <a className='d-md-none m-2' href="mailto:dunn.evan.f@gmail.com?subject=I would love to connect!&body=Great website and portfolio, let's chat!" target="blank"><MdOutlineEmail size={35} className="" /></a>
            <a style={{ color: 'inherit' }} className='m-2 d-none d-md-inline' href="https://www.linkedin.com/in/dunnevan/" target="blank">LinkedIn</a>
            <a style={{ color: 'inherit' }} className='m-2 d-none d-md-inline' href="https://github.com/dunndealpro/turtle-game" target="blank">GitHub</a>
            <a style={{ color: 'inherit' }} className='m-2 d-none d-md-inline' href="mailto:dunn.evan.f@gmail.com?subject=Cool App!&body=Cool app, let's chat!" target="blank">Contact</a>
          {/* </Col> */}
        </Nav>
        {/* </Navbar.Collapse> */}
      </Navbar>
    </div>
  )


}