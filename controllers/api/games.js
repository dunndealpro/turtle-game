const Sequelize = require("sequelize");

const db = require("../../models");

const User = db.user;
const Game = db.game;
const Word = db.word;

module.exports = {
  saveRandomScore,
  addRwfud,
  createNewGame,
  getUserScores,
};

async function getUserScores(req, res) {
  console.log("getting user scores", req.user);
  // const userScores = await Game.findAll({
  //   where: { userId: req.user.id },

  // });

  // console.log("getting user scores");
  // let userId = req.user.id
  const userScores = await Game.findAll({
    // where: { userId: req.user.id },
    attributes: [
      "userName", 'userId',

      [Sequelize.fn("SUM", Sequelize.col("score")), "total_score"],
    ],
    group: ['userName','userId'],

    order: [
      ['total_score', 'DESC']
    ]

    // include: [{
    //   model: User,
    //   attributes: []
    // }
  });
  // console.log(instance.n_score)
  // console.log(userScores);
  console.log("USER SCORES: ", userScores);
  res.json(userScores);
}



async function saveRandomScore(req, res) {
  console.log("BE Saving Game", req.body);
  await Game.destroy({ 
    where: {
      userId: null
    }
  
    // truncate: true
  })
  const newScore = await Game.create({
    wordId: req.body.wordId,
    userId: req.body.userId,
    userName: req.body.name,
    guess1: req.body.guess1,
    guess2: req.body.guess2,
    guess3: req.body.guess3,
    guess4: req.body.guess4,
    guess5: req.body.guess5,
    guess6: req.body.guess6,
    score: req.body.score,
  });
  console.log(req.body);
  console.log(newScore);

  //   let display = await Game.findAll({
  //     where: { userId: req.body.userId },
  //   });
  //   console.log(display);

  //   res.json(userScores);

  res.json(newScore);
}



async function createNewGame(req, res) {
  console.log("new game process started");
}

async function addRwfud(req, res) {
  console.log("NEW WORD? why", req.body.word);
  const [rwfud, create] = await Word.findOrCreate({
    where: { word: req.body.word },
  });
  console.log(rwfud);
  console.log(create);
  res.json(rwfud);
  // res.json()
}
