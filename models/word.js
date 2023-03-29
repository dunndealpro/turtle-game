console.log("models/word.js file starting");

module.exports = (sequelize, Sequelize) => {
  const Word = sequelize.define("words", {
    word: {
      type: Sequelize.STRING,
    }
   
  });
  console.log("models/word.js file ending");
  return Word;
};
