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