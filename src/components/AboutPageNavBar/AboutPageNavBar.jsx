import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar';
import { ScrollSpy } from 'react-bootstrap';



export default function AboutPageNavBar() {

    return (
        <>
            <Navbar className="justify-content-center" collapseOnSelect expand="lg" id="navbar" sticky="top" variant="light" >
               
                    <Nav id="navbar-example3" className="justify-content-center"  >

                        {/* <Nav id="navbar-example3" className=" "> */}

                        <Nav.Item >
                            <Nav.Link className="" href="#item-1">What is and why Turtle?</Nav.Link>

                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="" href="#item-2">Daily Game vs. Unlimited</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="" href="#item-3">Local Storage vs. Database Storage</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="" href="#item-4">Answer Definitions</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="" href="#item-5">How it works</Nav.Link>
                        </Nav.Item>
                    </Nav>
              
            </Navbar>


        </>
    )
}