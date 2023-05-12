

import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem'
import Container from 'react-bootstrap/Container'

export default function AboutPage() {

    return (
        <>
            {/* <div className="fs-1 m-4 border-bottom">
                About Turtle
            </div> */}
            {/* <div>
                Welcome to the game of Turtle!
            </div>
            <div>
                <span><strong>What is and why Turtle?</strong></span>
                <br /><br />
                <span>
                    Turtle is a re-creation and adaptation of the well known game "Wordle."  As an avid player and fan of Wordle, I play the New York Times' word game daily with a group of friends and we all share our scores with each other. Along with my friends, we often find ourselves wanting to play more than one game a day, and also at times, need to look up the meaning of the resulting answer.  To appease these wants, I recreated Wordle with a few unique distinctions.
                </span>
                <br /><br />
                <span><strong>Key Differences</strong></span>
                <br />
                <span>
                    The classic Wordle game stores and displays the user's and only the user's stats in their browser's local storage.
                </span><br />
                <span>Turtle is a full stack PERN(PostgreSQL, Express, React, Node) application that stores all user's game results and statistics to a relational database.  Turtle also allows the option to see  </span>

            </div> */}




            <Container className="m-3 pt-3"fluid>
                <Row fluid className='justify-content-center mt-1'>
                    <Col xs={2} className='m-1' style={{ position: 'fixed', top:100, left: 0 }}>
                        <Nav id="navbar-example3" className=" flex-column align-items pe-4 border-end">
                        {/* <Nav id="navbar-example3" className=" "> */}

                            <NavItem>
                                <Nav.Link className="ms-3 my-1" href="#item-1">What is and why Turtle?</Nav.Link>

                            </NavItem>
                            <NavItem>
                                <Nav.Link href="#item-2">Key Differences</Nav.Link>
                                <Nav className="flex-column">
                                    <NavItem>
                                        <Nav.Link className="ms-3 my-1" href="#item-2-1">Daily Game vs. Unlimited</Nav.Link>
                                    </NavItem>
                                    <NavItem>
                                        <Nav.Link className="ms-3 my-1" href="#item-2-2">Local Storage vs. Database Storage</Nav.Link>
                                    </NavItem>
                                </Nav>
                            </NavItem>
                            <NavItem>
                                <Nav.Link href="#item-3">Answer Definitions</Nav.Link>
                                <Nav className="flex-column">
                                    <NavItem>
                                        <Nav.Link className="ms-3 my-1" href="#item-3-1">Free Dictionary API</Nav.Link>
                                    </NavItem>
                                    <NavItem>
                                        <Nav.Link className="ms-3 my-1" href="#item-3-2">Urban Dictionary</Nav.Link>
                                    </NavItem>
                                </Nav>
                            </NavItem>
                        </Nav>
                    </Col>
                    <Col className="m-2" xs={12} md={8}>
                        <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-offset="0" tabIndex="0" className="scrollspy-example-3">
                            <div className="m-2" id="item-1">
                                <h2><strong>What is and why Turtle?</strong></h2>
                                <p className="fs-3">  <span>
                                    Turtle is a re-creation and adaptation of the well known game "Wordle."  As an avid player and fan of Wordle, I play the New York Times' word game daily with a group of friends and we all share our scores with each other. Along with my friends, we often find ourselves wanting to play more than one game a day, and also at times, need to look up the meaning of the resulting answer.  To appease these wants, I recreated Wordle with a few unique distinctions.
                                </span></p>
                            </div>

                            <div className="m-2" id="item-2">
                                <h2><strong>Key Differences Between Wordle and Turtle</strong></h2>
                                {/* <p>...</p> */}
                                <div id="item-2-1">
                                    <h3>Daily Game vs. Unlimited Games</h3>
                                    <p className="fs-3">Traditional Wordle offers 1 game per day, with puzzle answers already determined and hard coded into the game. Turtle currently features unlimited plays as well as providing random puzzle answers for each game. (more on how puzzle answers are selected in the 'how it works sections')</p>
                                </div>
                                <div id="item-2-2">
                                    <h3>Local Storage vs. Database Storage</h3>
                                    <p className="fs-3"><span>
                                        The classic Wordle game stores and displays the user's and only the user's stats in their browser's local storage.
                                    </span><br /><br />
                                        <span>Turtle is a full stack PERN(PostgreSQL, Express, React, Node) application that stores all user's game results and statistics to a relational database.  As such, Turtle is able to query the database to display other players scores and stats. </span></p>
                                </div>
                            </div>
                            <div className="m-2" id="item-3">
                                <h2><strong>Definition Display</strong></h2>
                                <p className="fs-3">When a game is either won or loss, the player has a choice to show a standard definition (assumed 'safe for work')* from dictionaryapi.dev or a definition from urbandictionary.com('not safe for work') </p>
                                {/* <div id="item-3-1">
                                    <h5>item 3-1</h5>
                                    <p>...</p>
                                </div>
                                <div id="item-3-2">
                                    <h5>Item 3-2</h5>
                                    <p>...</p>
                                </div> */}
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