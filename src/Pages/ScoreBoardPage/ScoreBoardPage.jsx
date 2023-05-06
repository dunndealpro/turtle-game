import PlayerStats from "../../components/PlayerStats/PlayerStats"
import LeaderBoard from "../../components/LeaderBoard/LeaderBoard"
// import LeaderBoardCopy from "../../components/LeaderBoard/LeaderBoardCopy"
import { useState, useEffect } from 'react'
import * as gamesAPI from "../../utilities/games-api"
import { Container, Col, Row } from "react-bootstrap"


export default function ScoreBoardPage(props) {

    const [stats, setStats] = useState(null)
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        getUserScores()
    }, [])

    const getUserScores = async (userId) => {
        let tempUserScore = await gamesAPI.getUserScores(userId)
        console.log(tempUserScore)
        setStats(tempUserScore)
        setIsLoading(false)
    }
    // props.getUserScores()

    // useEffect(() => {
    //     console.log("UseEffect Engaged")
    //      props.getUserScores()

    //   }, [])
    // props.getUserScores()
    // console.log(props.userScore)
    // let stats
    // if(props.userScore){
    //     stats = props.userScore
    // }

    // const [stats, setStats] = useState(props.userScore)


    // useEffect(() => {
    //     console.log("UseEffect Engaged")
    //     setStats(props.userScore)
    //     console.log(stats)
    // }, [stats])

    // console.log(stats)
    // 
    // const [tempStats, setTempStats] = useState(stats)
    // 
    // console.log(tempStats)

    // let stats = props.userScore
    return (
        <>
            {isLoading ? (
                <div>Loading Spinnger</div>
            ) : (
                <Container >
                    <Row className="justify-content-md-center">
                        <Col xs='12' md="6">
                            <div>
                                <h1>
                                    ScoreBoard Page
                                </h1>
                                {props.user.name}'s Stats
                                <PlayerStats userScore={stats} />
                                <h1>

                                    Leaders
                                </h1>
                                <LeaderBoard stuff={stats} />

                            </div>

                        </Col>

                    </Row>

                </Container>

            )}

        </>
    )
}