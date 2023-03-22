const db = require("../../models");

const User = db.user;
const Game = db.game;

module.exports = {
    createNewGame,
    saveScore,
}

async function createNewGame(req, res){
    console.log("new game process started")
}