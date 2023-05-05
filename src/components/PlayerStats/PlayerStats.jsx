import Table from 'react-bootstrap/Table';

export default function PlayerStats(props){

    return(
        <>
        <Table responsive size="md">
                                <thead>
                                    <tr>
                                        {/* <th>Total Points</th> */}
                                        <th>Total Games</th>
                                        <th>Win %</th>
                                        {/* <th>Point:Game Ratio</th> */}
                                        <th>Current Streak</th>
                                        <th>Longest Streak</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        {/* <td>{totalScore}</td> */}
                                        <td>{props.totalGames}</td>
                                        <td>{props.winPercent}</td>
                                        {/* <td>{playerRatio}</td> */}
                                        <td>{props.currentStreak}</td>
                                        <td>{props.longStreak}</td>


                                    </tr>
                                </tbody>
                            </Table>
        </>
    )
}