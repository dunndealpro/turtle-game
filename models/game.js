console.log("models/game.js file starting");

module.exports = (sequelize, Sequelize) => {
  const Game = sequelize.define("games", {
    word: {
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
      type: Sequelize.NUMBER,
    },
  });
  console.log("models/game.js file ending");
  return Game;
};
