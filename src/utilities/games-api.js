import sendRequest from "./send-request";

const BASE_URL = '/api/games';

export function addWordToTurtleDB(rwfud){    
    return sendRequest(`${BASE_URL}/random-turtles/${rwfud}`, 'POST', {word: rwfud})
}

export function startRandomWordGame(score){
    return sendRequest(`${BASE_URL}/random-turtles/start-random`, 'POST', score)
}

export function saveRandomWordGame(score){
    return sendRequest(`${BASE_URL}/random-turtles/save-random`, 'PUT', score)
}

export function getUserScores(userId){
    return sendRequest(`${BASE_URL}/random-turtles/${userId}`)
}

export function updateStreakCount(streakCount){
    return sendRequest(`${BASE_URL}/random-turtles/updateStreak`, "PUT", streakCount)
}

export function checkLastGame(userId){
    return sendRequest(`${BASE_URL}/random-turtles/checkLastGame/${userId}`)
}