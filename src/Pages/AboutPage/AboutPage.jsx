

import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar';
import { ScrollSpy } from 'react-bootstrap';


export default function AboutPage() {

    return (
        <>




                <Navbar   className="justify-content-center" collapseOnSelect expand="lg" id="navbar" sticky="top" variant="light" >
                    <Nav  id="navbar-example3" className="justify-content-center"  >

                        {/* <Nav id="navbar-example3" className=" "> */}

                        <NavItem   >
                            <Nav.Link  className="ms-3 my-1" href="#item-1">What is and why Turtle?</Nav.Link>

                        </NavItem>
                        <NavItem>
                            <Nav.Link  className="ms-3 my-1" href="#item-2-1">Daily Game vs. Unlimited</Nav.Link>
                        </NavItem>
                        <NavItem>
                            <Nav.Link className="ms-3 my-1" href="#item-2-2">Local Storage vs. Database Storage</Nav.Link>
                        </NavItem>
                        <NavItem>
                            <Nav.Link  className="ms-3 my-1" href="#item-2-3">Answer Definitions</Nav.Link>
                        </NavItem>

                        <NavItem>
                            <Nav.Link  className="ms-3 my-1" href="#item-3">How it works</Nav.Link>

                        </NavItem>
                    </Nav>
                </Navbar>

            <Container className="3" >

                <Row fluid className='justify-content-center mt-1'>
                    {/* <Col xs={12} className='' > */}
                    {/* <Nav id="navbar-example3" className=" flex-column align-items pe-4 border-end"> */}
                    {/* </Col> */}
                    <Col className="" xs={12} md={9} lg={6} >
                        <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-offset="180" className="spy-stuff">
                            <div className="mt-2" id="item-1">
                                <h2><strong>What is and why Turtle?</strong></h2>
                                <p className="fs-3">  <span>
                                    Turtle is a re-creation and adaptation of the well known game "Wordle."  As an avid player and fan of Wordle, I play the New York Times' word game daily with a group of friends and we all share our scores with each other. Along with my friends, we often find ourselves wanting to play more than one game a day, and also at times, need to look up the meaning of the resulting answer.  To appease these wants, I recreated Wordle with a few unique distinctions.
                                </span></p>
                            </div>

                            <div className="mt-4 " id="item-2" >
                                <h2><strong>Key Differences Between Wordle and Turtle</strong></h2>
                                {/* <p>...</p> */}
                                <div id="item-2-1" className="mt-4" offset={1000}>
                                    <h3>Daily Game vs. Unlimited Games</h3>
                                    <p className="fs-3">Traditional Wordle offers 1 game per day, with puzzle answers already determined and hard coded into the game. Turtle currently features unlimited plays as well as providing random puzzle answers for each game. (more on how puzzle answers are selected in the 'how it works sections')</p>
                                </div>
                                <div id="item-2-2" className=" mt-4">
                                    <h3>Local Storage vs. Database Storage</h3>
                                    <p className="fs-3"><span>
                                        The classic Wordle game stores and displays the user's and only the user's stats in their browser's local storage.
                                    </span><br /><br />
                                        <span>Turtle is a full stack PERN(PostgreSQL, Express, React, Node) application that stores all user's game results and statistics to a relational database.  As such, Turtle is able to query the database to display other players scores and stats. </span></p>
                                </div>
                                <div id="item-2-3" className="mt-4">
                                    <h3>Answer Defintions</h3>
                                    <p className="fs-3"><span>
                                        When a game is either won or loss, the player has a choice to show a standard definition (assumed 'safe for work')* from dictionaryapi.dev or a definition from urbandictionary.com('not safe for work')
                                    </span></p><br /><br />
                                </div>
                            </div>
                            <div className="m-2 mt-2" id="item-3">
                                <h2><strong>How it works</strong></h2>
                                <p className="fs-3">  <span>
                                    When a new game is started, a few things happen to select a random word. First, a random word is generated by making a request to the Urban Dictionary(UD) API.  The API request returns a short list of randomly selected words of varying length and their definitions from the UD. This list is passed through a script to find the first 5 letter word.  If there is no 5 letter word, another request is made to the API and a new random list of words is returned.
                                    <br /><br />
                                    Once a 5 letter word is found, a new API request is made to dictionaryapi.dev to ensure that the word from UD is an acceptable, english language word. If unacceptable, it returns an error message and the process starts again. If the word is acceptable, the request returns a “safe-for-work” definition of the word to be displayed along with its UD definition after the game is completed.

                                </span></p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>


            {/* <Row>
                <Col xs={4}>
                    <Nav id="navbar-example3" className="h-100 flex-column align-items-stretch pe-4 border-end">
                        <NavItem>
                            <Nav.Link href="#item-1"><strong>What is and why Turtle?</strong></Nav.Link>
                        </NavItem>
                        <NavItem>
                            <Nav.Link href="#item-2">Item 2</Nav.Link>
                            <Nav className="flex-column">
                                <NavItem>
                                    <Nav.Link className="ms-3 my-1" href="#item-2-1">Item 2-1</Nav.Link>
                                </NavItem>
                                <NavItem>
                                    <Nav.Link className="ms-3 my-1" href="#item-2-2">Item 2-2</Nav.Link>
                                </NavItem>
                            </Nav>
                        </NavItem>
                        <NavItem>
                            <Nav.Link href="#item-3">Item 3</Nav.Link>
                            <Nav className="flex-column">
                                <NavItem>
                                    <Nav.Link className="ms-3 my-1" href="#item-3-1">Item 3-1</Nav.Link>
                                </NavItem>
                                <NavItem>
                                    <Nav.Link className="ms-3 my-1" href="#item-3-2">Item 3-2</Nav.Link>
                                </NavItem>
                            </Nav>
                        </NavItem>
                    </Nav>
                </Col>
                <Col xs={8}>
                    <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-offset="0" tabIndex="0" className="scrollspy-example-2">
                        <div id="item-1">
                            <h4>Item 1</h4>
                            <p>...</p>
                        </div>
                        <div id="item-1-1">
                            <h5>Item 1-1</h5>
                            <p>...</p>
                        </div>
                        <div id="item-1-2">
                            <h5>Item 1-2</h5>
                            <p>...</p>
                        </div>
                        <div id="item-1">
                            <h4>Item 1</h4>
                            <p>...</p>
                        </div>
                        <div id="item-3">
                            <h4>Item 3</h4>
                            <p>...</p>
                        </div>
                        <div id="item-3-1">
                            <h5>Item 3-1</h5>
                            <p>...</p>
                        </div>
                        <div id="item-3-2">
                            <h5>Item 3-2</h5>
                            <p>...</p>
                        </div>
                    </div>
                </Col>
            </Row> */}

        </>
    )
}