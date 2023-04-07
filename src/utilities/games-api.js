import sendRequest from "./send-request";

const BASE_URL = '/api/games';

export function addWordToTurtleDB(rwfud){
    console.log("Add word to DB step ??", typeof(rwfud))
    return sendRequest(`${BASE_URL}/random-turtles/${rwfud}`, 'POST', {word: rwfud})
}

export function startRandomWordGame(score){
    console.log("Starting game?")
    console.log(score)

    return sendRequest(`${BASE_URL}/random-turtles/start-random`, 'POST', score)
}

export function saveRandomWordGame(score){
    console.log("Saving score?")
    console.log(score)

    return sendRequest(`${BASE_URL}/random-turtles/save-random`, 'PUT', score)
}

export function getUserScores(userId){
    console.log("Getting scoreS?")
    return sendRequest(`${BASE_URL}/random-turtles/${userId}`)
}

export function updateStreakCount(streakCount){
    console.log("updating streak count?")    
    return sendRequest(`${BASE_URL}/random-turtles/updateStreak`, "PUT", streakCount)
}

export function checkLastGame(userId){
    return sendRequest(`${BASE_URL}/random-turtles/checkLastGame/${userId}`)
}