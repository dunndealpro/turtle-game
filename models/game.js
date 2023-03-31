const db = require("../models");


const Word = db.word;
const User = db.user;


console.log("models/game.js file starting");

module.exports = (sequelize, Sequelize) => {
  const Game = sequelize.define("Games", {
    wordId: {
      type: Sequelize.INTEGER,
      references: {
        model: "Words",
        key: 'id'
      }
    },
    userId: {
      type: Sequelize.INTEGER,
      references: {
        model: "Users",
        key: 'id'
      }
    },
    userName: {
      type: Sequelize.STRING,
    
    },
    guess1: {
      type: Sequelize.STRING,
    },
    guess2: {
      type: Sequelize.STRING,
    },
    guess3: {
      type: Sequelize.STRING,
    },
    guess4: {
      type: Sequelize.STRING,
    },
    guess5: {
      type: Sequelize.STRING,
    },
    guess6: {
      type: Sequelize.STRING,
    },
    score: {
      type: Sequelize.INTEGER,
    },

    gameWon: {
      type: Sequelize.BOOLEAN, 
      defaultValue: false
    }

  });
  console.log("models/game.js file ending");
  return Game;
};
