import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { motion } from "framer-motion";
import './UserScoreDisplay.css';

import * as gamesAPI from "../../utilities/games-api"


export default function UserScoreDisplay(props) {
    // const [userScore, setUserScore] = useState([])
    // const getUserScores = async (userId) => {
    //     let tempUserScore = await gamesAPI.getUserScores(userId)
    //     console.log(tempUserScore)
    //     props.setUserScore(tempUserScore)
    // }

    // const getUserScores = async (userId) => {
    //     let tempUserScore = await gamesAPI.getUserScores(userId)
    //     console.log(tempUserScore)
    //     props.setUserScore(tempUserScore)
    //   }

    let tempDisp

    // console.log("Huh", props.userScore)

    // getUserScores(props.user.id)
    if (props.userScore[0]) {
        // console.log(props.userScore[0].guess1)
        tempDisp = props.userScore[0].guess1
    }



    useEffect(() => {
        // console.log("USerScrore UseEffect Engaged ", props.user.id)
        props.getUserScores(props.user.id)

    }, [])

    return (
        <>
            <div className='p-2 streak-bg'>
                <h4>

                    Your Current win streak: {props.userScore.playerCurrentStreak} games!
                </h4>

            </div>
            {/* {tempDisp} */}
            {/* <br /> */}
            {/* {props.answer} */}
            {/* {userScore[0].guess1} */}
        </>
    )
}