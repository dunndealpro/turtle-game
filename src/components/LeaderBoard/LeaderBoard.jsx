import { Container, Row, Col } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import './LeaderBoard.css'


export default function LeaderBoard(props) {
    console.log(props.stuff)
    let stats = props.stuff || props.userScore

    console.log(stats)

    let topScoreName
    let topScoreScore
    let topScoreGames

    // if (stats.userScores[0].userName){
    //     topScoreName = stats.userScores[0].userName
    // }
    // if(stats.userScores[0].total_score){
    //     topScoreScore = stats.userScores[0].total_score
    // }

    // if(stats.userScores[0].total_games){
    //     topScoreGames = stats.userScores[0].total_games
    // }


    //     if(stats.userScores[0]){
    // topScores = stats.userScores[0]
    //     }

    return (
        <>

            <Accordion defaultActiveKey="">
                <Accordion.Item eventKey="0">
                    <Accordion.Header><strong>Highest Total Scores</strong></Accordion.Header>
                    <Accordion.Body >
                    <div style={{ maxHeight: "200px", overflowY: "auto" }}>

                        <Table responsive size="md">
                            {/* <div className="overflow-auto"> */}
                            <thead >
                                <tr>
                                    <th>#</th><th>User Name</th><th>Score</th><th>Total Games</th>
                                </tr>
                            </thead>
                            <tbody>
                                {stats.userScores.map((item, k) => (
                                    <tr>
                                        <td>{k + 1}</td>
                                        <td>{item.userName}</td>
                                        <td>{item.total_score}</td>
                                        <td>{item.total_games}</td>
                                    </tr>
                                ))}
                                {/* <tr>
                                    <td>1</td><td>{stats.userScores[0].userName}</td><td>{stats.userScores[0].total_score}</td><td>{stats.userScores[0].total_games}</td>
                                </tr>
                                <tr>
                                    <td>2</td><td>{stats.userScores[1].userName}</td><td>{stats.userScores[1].total_score}</td><td>{stats.userScores[1].total_games}</td>
                                </tr>
                                <tr>
                                    <td>3</td><td>{stats.userScores[2].userName}</td><td>{stats.userScores[2].total_score}</td><td>{stats.userScores[2].total_games}</td>
                                </tr> */}
                            </tbody>

                            {/* </div> */}
                        </Table>
                        </div>

                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header><strong>Longest Streaks</strong></Accordion.Header>
                    <Accordion.Body>
                            <div style={{ maxHeight: "200px", overflowY: "auto" }}>
                        <Table responsive className="overflow-auto" size="md" style={{ height: 200 }}>
                                <thead>
                                    <tr>
                                        <th>#</th><th>User Name</th><th>Streak Count</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {stats.longStreak.map((item, k) => (
                                        <tr>
                                            <td>{k + 1}</td>
                                            <td>{item.userName}</td>
                                            <td>{item.count}</td>
                                        </tr>
                                    ))}

                                </tbody>



                        </Table>
                            </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header><strong>Best Point:Game Ratio</strong></Accordion.Header>
                    <Accordion.Body>
                    <div style={{ maxHeight: "200px", overflowY: "auto" }}>
                        <Table responsive size="md">
                            <thead>
                                <tr>
                                    <th>#</th><th>User Name</th><th>P:G Ratio</th>
                                </tr>
                            </thead>
                            <tbody>
                                {stats.highRatios.map((item, k) => (
                                    <tr>
                                        <td>{k + 1}</td>
                                        <td>{item.userName}</td>
                                        <td>{item.ratio}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                        </div>

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header><strong>Golden Children</strong></Accordion.Header>
                    <Accordion.Body>
                    <div style={{ maxHeight: "200px", overflowY: "auto" }}>

                        <Table responsive size="md">
                            <thead>
                                <tr>
                                    <th>#</th><th>User Name</th><th># of Games correct on 1st Guess</th>
                                </tr>
                            </thead>
                            <tbody>
                                {stats.goldenChildren.map((item, k) => (
                                    <tr>
                                        <td>{k + 1}</td>
                                        <td>{item.userName}</td>
                                        <td>{item.count}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                        </div>

                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>



        </>
    )
}