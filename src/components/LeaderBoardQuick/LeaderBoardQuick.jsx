import { Container, Row, Col } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';


export default function LeaderBoard(props) {
    console.log(props.userScore)
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
                                    {stats.userScores[0].userName ?
                                        <>
                                            <td>1</td>
                                            <td>{stats.userScores[0].userName}</td>
                                            <td>{stats.userScores[0].total_score}</td>
                                            <td>{stats.userScores[0].total_games}</td>

                                        </>
                                        :
                                        <></>

                                    }
                                </tr>
                                <tr>
                                    {stats.userScores[1] && stats.userScores[1].userName ? (
                                        <>
                                            <td>2</td><td>{stats.userScores[1].userName}</td><td>{stats.userScores[1].total_score}</td><td>{stats.userScores[1].total_games}</td>
                                        </>
                                    ) : (<></>)}
                                </tr>
                                <tr>
                                    {stats.userScores[2] && stats.userScores[2].userName ?
                                        <>
                                            <td>3</td><td>{stats.userScores[2].userName}</td><td>{stats.userScores[2].total_score}</td><td>{stats.userScores[2].total_games}</td>
                                        </> : <></>
                                    }
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
                                    {stats.longStreak[0] && stats.longStreak[0].userName ?
                                        <>
                                            <td>1</td><td>{stats.longStreak[0].userName}</td><td>{stats.longStreak[0].count}</td>
                                        </>
                                        : <></>
                                    }
                                </tr>
                                <tr>
                                    {stats.longStreak[1] && stats.longStreak[1].userName ?
                                        <>
                                            <td>2</td><td>{stats.longStreak[1].userName}</td><td>{stats.longStreak[1].count}</td>
                                        </> : <>
                                        </>
                                    }
                                </tr>
                                <tr>
                                    {stats.longStreak[2] && stats.longStreak[2].userName ?
                                        <>
                                            <td>3</td><td>{stats.longStreak[2].userName}</td><td>{stats.longStreak[2].count}</td>
                                        </> : <></>
                                    }
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
                                    {stats.highRatios[0] && stats.highRatios[0].userName ?
                                        <>
                                            <td>1</td><td>{stats.highRatios[0].userName}</td><td>{stats.highRatios[0].ratio}</td>
                                        </> : <></>
                                    }
                                </tr>
                                <tr>
                                    {stats.highRatios[1] && stats.highRatios[1].userName ?
                                        <>
                                            <td>2</td><td>{stats.highRatios[1].userName}</td><td>{stats.highRatios[1].ratio}</td>
                                        </> : <></>
                                    }

                                </tr>
                                <tr>
                                    {stats.highRatios[2] && stats.highRatios[2].userName ?
                                        <>
                                            <td>3</td><td>{stats.highRatios[2].userName}</td><td>{stats.highRatios[2].ratio}</td>
                                        </> : <></>
                                    }

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
                                    {stats.goldenChildren[0] && stats.goldenChildren[0].userName ?
                                        <>
                                            <td>1</td><td>{stats.goldenChildren[0].userName}</td><td>{stats.goldenChildren[0].count}</td>
                                        </> : <></>
                                    }
                                </tr>
                                <tr>
                                    {stats.goldenChildren[1] && stats.goldenChildren[1].userName ?
                                        <>
                                            <td>2</td><td>{stats.goldenChildren[1].userName}</td><td>{stats.goldenChildren[1].count}</td>
                                        </> : <></>
                                    }

                                </tr>
                                <tr>
                                    {stats.goldenChildren[2] && stats.goldenChildren[2].userName ?
                                        <>
                                            <td>3</td><td>{stats.goldenChildren[2].userName}</td><td>{stats.goldenChildren[2].count}</td>
                                        </> : <></>
                                    }

                                </tr>
                            </tbody>
                        </Table>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>



        </>
    )
}