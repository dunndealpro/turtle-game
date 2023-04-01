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
  updateStreak,
  startRandomGame
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
      "userName",
      "userId",

      [Sequelize.fn("SUM", Sequelize.col("score")), "total_score"],
    ],
    group: ["userName", "userId"],

    order: [["total_score", "DESC"]],

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

async function updateStreak(req, res) {
  console.log("Get Streak Count" ,req.body);
  const user = await User.findAll({
    where: {
      id: req.user.id,
    },
  });
console.log("user retrieved: ", user)
//   user.streakcount = req.body.streakCount;

  const updatedUser = await User.update(
    { streakcount: req.body.streakCount },
    {
      where: {
        id: req.body.userId,
      },
    }
  );
  // await  updatedUser.save()
  // await updatedUser.reload()
  // console.log(updatedUser);
  console.log("user updated?: ", updatedUser.streakcount)
  
  let user2 = await User.findAll({
    where: {
      id: req.user.id,
    },
  });
  console.log(user2)

  res.json(updatedUser);
}

async function startRandomGame(req, res) {
  console.log("new game process started");

  const newRandomGame = await Game.create({
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
    gameWon: req.body.gameWon
  });
  console.log(req.body);
  console.log(newRandomGame);  

  const updatedUser = await User.update(
    { gameWone: false },
    {
      where: {
        id: req.body.userId,
      },
    }
  );
  res.json(newRandomGame);
  }


async function saveRandomScore(req, res) {
  console.log("BE Saving Game", req.body);

  // const userTest = await User.findAll({
  //   where: {
  //     id: req.user.id,
  //   },
  // });

  // user.set({streakcount: req.body.streakcount})

  // userTest.streakCount = req.body.streakcount;
  // console.log("USERTEST ", userTest.streakCount);

  // const updatedUser = await User.save(userTest.streakCount = req.body.streakcount)

  // const updatedUser = await User.update({streakcount: req.body.streakcount},{
  //     where:{
  //       id: req.body.userId}
  //     })
  // await user.save({streakcount: req.body.streakcount})
  //  await User.update({streakcount: req.body.streakcount},{
  //   where:{
  //     id: req.body.userId}
  //   })
  // console.log("User test: ", updatedUser);

  const newScore = await Game.update({
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
    gameWon: req.body.gameWon
  },
  {
    where:{ id: req.body.gameId},
  }
  );
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
