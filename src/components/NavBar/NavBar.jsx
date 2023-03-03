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
        <div className="fs-5 bg-secondary align-center" >
        <Navbar className="p-2" collapseOnSelect expand="md" id="navbar" sticky="top" style={{ background: 'rgba(0,168,168,1)' }} variant="light">
          <Navbar.Brand className=" " href="/">        
            
    
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-2 " />
    
          <Navbar.Collapse className=" " id="basic-navbar-nav " >
            <Nav variant="pills" className="mx-auto " defaultActiveKey="/">
            <Nav.Item className=" position-relative center ">
                <Nav.Link href="#home">Home</Nav.Link> &nbsp;&nbsp;
              </Nav.Item>
              {/* <Nav.Item className=''>
                <Nav.Link href="#mywatch">myWatch</Nav.Link> &nbsp;&nbsp;
              </Nav.Item>
              <Nav.Item className=''>
                <Nav.Link href="#search">Search</Nav.Link>&nbsp;&nbsp;
              </Nav.Item> */}
            <NavDropdown className="position-absolute end-0 me-3" title={title} id="basic-nav-dropdown">
              <NavDropdown.Item onClick={handleLogOut} href="">Logout</NavDropdown.Item>
            </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar >
        </div>
      )


  }