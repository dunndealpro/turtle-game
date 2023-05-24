import Table from 'react-bootstrap/Table';

export default function PlayerStats(props){

    let winPercent
    let totalGames
    let longStreak
    let totalScore
    let currentStreak



    if (props.userScore.totalWinPercent) {
        winPercent = props.userScore.totalWinPercent
    }
    if (props.userScore.totalScore) {
        totalGames = props.userScore.totalGames
    }
    longStreak = props.userScore.playerLongStreak
    if (props.userScore.totalScore[0] && props.userScore.totalScore[0].total_score) {
        totalScore = props.userScore.totalScore[0].total_score
    }
    if (props.userScore.playerCurrentStreak) {
        currentStreak = props.userScore.playerCurrentStreak
    } else { currentStreak = 0 }

    return(
        <>
        <div className='player-stats p-2 mt-2 mb-3 rounded'>
        <Table responsive size="md" className='fs-6'>
                                <thead>
                                    <tr>
                                        <th>Total Games</th>
                                        <th>Win %</th>
                                        <th>Current Streak</th>
                                        <th>Longest Streak</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{totalGames}</td>
                                        <td>{winPercent}</td>
                                        <td>{currentStreak}</td>
                                        <td>{longStreak}</td>
                                    </tr>
                                </tbody>
                            </Table>
        </div>
        </>
    )
}