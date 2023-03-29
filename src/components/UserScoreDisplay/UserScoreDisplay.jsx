import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import * as gamesAPI from "../../utilities/games-api"


export default function UserScoreDisplay(props) {
    // const [userScore, setUserScore] = useState([])
    const getUserScores = async (userId) => {
        let tempUserScore = await gamesAPI.getUserScores(userId)
        console.log(tempUserScore)
        props.setUserScore(tempUserScore)
    }

    let tempDisp

    console.log("Huh", props.userScore)

    // getUserScores(props.user.id)
    if (props.userScore[0]) {
        console.log(props.userScore[0].guess1)
        tempDisp = props.userScore[0].guess1
    }

    useEffect(() => {
        console.log("UseEffect Engaged ", props.user.id)
        getUserScores(props.user.id)

    }, [])

    return (
        <>
            {props.user.name}
            <br />
            {tempDisp}
            <br />
            {props.answer}
            {/* {userScore[0].guess1} */}
        </>
    )
}