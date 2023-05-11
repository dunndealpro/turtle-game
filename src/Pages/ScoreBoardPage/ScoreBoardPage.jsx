import { useState, useEffect } from 'react'
import { Container, Col, Row } from "react-bootstrap"

import LeaderBoard from "../../components/LeaderBoard/LeaderBoard"
import PlayerStats from "../../components/PlayerStats/PlayerStats"

import * as gamesAPI from "../../utilities/games-api"

export default function ScoreBoardPage(props) {

    const [stats, setStats] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getUserScores()
    }, [])

    const getUserScores = async (userId) => {
        let tempUserScore = await gamesAPI.getUserScores(userId)
        setStats(tempUserScore)
        setIsLoading(false)
    }

    return (
        <>
            {isLoading ? (
                <div>Loading Spinnger</div>
            ) : (
                <div >
                    <Container  className='mt-5 p-1 score-board-page' >
                        <Row className="p-5 justify-content-md-center">
                            <Col xs='12' md="6">
                                <div>
                                    <h1>
                                        Score Board Page
                                    </h1>
                                    <span className='fs-2 '>{props.user.name}'s Stats </span>
                                    <PlayerStats userScore={stats} />
                                    <h1>

                                        Leaders
                                    </h1>
                                    <LeaderBoard stuff={stats} />

                                </div>

                            </Col>

                        </Row>

                    </Container>

                </div>

            )}

        </>
    )
}