import { Container, Row, Col } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';


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
                <Accordion.Body>
                    <Table responsive size="md">
                        <thead>
                            <tr>
                                <th>#</th><th>User Name</th><th>Score</th><th>Total Games</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>1</td><td>{stats.userScores[0].userName}</td><td>{stats.userScores[0].total_score}</td><td>{stats.userScores[0].total_games}</td>
                            </tr>
                            <tr>
                                <td>2</td><td>{stats.userScores[1].userName}</td><td>{stats.userScores[1].total_score}</td><td>{stats.userScores[1].total_games}</td>
                            </tr>
                            <tr>
                                <td>3</td><td>{stats.userScores[2].userName}</td><td>{stats.userScores[2].total_score}</td><td>{stats.userScores[2].total_games}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
                <Accordion.Header><strong>Longest Streaks</strong></Accordion.Header>
                <Accordion.Body>
                    <Table responsive size="md">
                        <thead>
                            <tr>
                                <th>#</th><th>User Name</th><th>Streak Count</th>
                            </tr>
                        </thead>
                        <tbody>
                                <tr>
                                    <td>1</td><td>{stats.longStreak[0].userName}</td><td>{stats.longStreak[0].count}</td>
                                </tr>
                                <tr>
                                    <td>2</td><td>{stats.longStreak[1].userName}</td><td>{stats.longStreak[1].count}</td>
                                </tr>
                                <tr>
                                    <td>3</td><td>{stats.longStreak[2].userName}</td><td>{stats.longStreak[2].count}</td>
                                </tr>
                            </tbody>
                    </Table>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header><strong>Best Point:Game Ratio</strong></Accordion.Header>
                <Accordion.Body>
                    <Table responsive size="md">
                        <thead>
                            <tr>
                                <th>#</th><th>User Name</th><th>P:G Ratio</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td><td>{stats.highRatios[0].userName}</td><td>{stats.highRatios[0].ratio}</td>
                            </tr>
                            <tr>
                                <td>2</td><td>{stats.highRatios[1].userName}</td><td>{stats.highRatios[1].ratio}</td>
                            </tr>
                            <tr>
                                <td>3</td><td>{stats.highRatios[2].userName}</td><td>{stats.highRatios[2].ratio}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header><strong>Golden Children</strong></Accordion.Header>
                <Accordion.Body>
                    <Table responsive size="md">
                        <thead>
                            <tr>
                                <th>#</th><th>User Name</th><th># of Games correct on 1st Guess</th>
                            </tr>
                        </thead>
                        <tbody>
                                <tr>
                                    <td>1</td><td>{stats.goldenChildren[0].userName}</td><td>{stats.goldenChildren[0].count}</td>
                                </tr>
                                <tr>
                                    <td>2</td><td>{stats.goldenChildren[1].userName}</td><td>{stats.goldenChildren[1].count}</td>
                                </tr>
                                <tr>
                                    <td>3</td><td>{stats.goldenChildren[2].userName}</td><td>{stats.goldenChildren[2].count}</td>
                                </tr>
                            </tbody>
                    </Table>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>



    </>
)
}