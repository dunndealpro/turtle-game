import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';

import './LeaderBoard.css'

export default function LeaderBoard(props) {
    let stats = props.stats || props.userScore

    return (
        <>
            <div className="leader-board rounded mt-2">
                <Accordion defaultActiveKey="">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><strong>Highest Total Scores</strong></Accordion.Header>
                        <Accordion.Body >
                            <div style={{ maxHeight: "200px", overflowY: "auto" }}>
                                <Table responsive >
                                    <thead >
                                        <tr>
                                            <th>#</th><th>User Name</th><th>Score</th><th>Total Games</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {stats.userScores.map((item, k) => (
                                            <tr key={k}>
                                                <td>{k + 1}</td>
                                                <td>{item.userName}</td>
                                                <td>{item.total_score}</td>
                                                <td>{item.total_games}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                        <Accordion.Header><strong>Longest Streaks</strong></Accordion.Header>
                        <Accordion.Body>
                            <div style={{ maxHeight: "200px", overflowY: "auto" }}>
                                <Table responsive  size="md" >
                                    <thead>
                                        <tr>
                                            <th>#</th><th>User Name</th><th>Streak Count</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {stats.longStreak.map((item, k) => (
                                            <tr key={k}>
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
                        <Accordion.Header><strong>Best Point : Game Ratio</strong></Accordion.Header>
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
                                            <tr key={k}>
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
                        <Accordion.Header><strong>Golden Children</strong>(...aka lucky guessers)</Accordion.Header>
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
                                            <tr key={k}>
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
            </div>
        </>
    )
}