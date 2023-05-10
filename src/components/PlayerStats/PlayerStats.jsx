import Table from 'react-bootstrap/Table';

export default function PlayerStats(props){

    let winPercent
    let totalGames
    let longStreak
    let totalScore
    let currentStreak


console.log(props.userScore)

    if (props.userScore.totalWinPercent) {
        winPercent = props.userScore.totalWinPercent
    }
    if (props.userScore.totalScore) {
        totalGames = props.userScore.totalGames
    }
    // if(props.userScore.playerLongStreak){
    longStreak = props.userScore.playerLongStreak
    // }
    if (props.userScore.totalScore) {
        totalScore = props.userScore.totalScore[0].total_score
    }
    if (props.userScore.playerCurrentStreak) {
        currentStreak = props.userScore.playerCurrentStreak
    } else { currentStreak = 0 }

    return(
        <>
        <Table responsive size="md" className='fs-4'>
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
                                        <td>{totalGames}</td>
                                        <td>{winPercent}</td>
                                        {/* <td>{playerRatio}</td> */}
                                        <td>{currentStreak}</td>
                                        <td>{longStreak}</td>


                                    </tr>
                                </tbody>
                            </Table>
        </>
    )
}