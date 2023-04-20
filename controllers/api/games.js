const Sequelize = require("sequelize");
const { QueryTypes } = require("sequelize");

const db = require("../../models");

const User = db.user;
const Game = db.game;
const Word = db.word;

module.exports = {
  saveRandomScore,
  addRwfud,
  // createNewGame,
  getUserScores,
  updateStreak,
  startRandomGame,
  checkLastGame,
  getLongStreak,
};

async function getLongStreak(req, res) {
  console.log("long streak search");
  let result = await db.sequelize.query(
    `
  select "userName", "gameWon", count(*)
  from (select *,
    (row_number() over (order by id) - 
    row_number() over (partition by "gameWon" order by id)
    )as grp
    from "Games"
    )"Games" where "gameWon" = 't'
    group by grp, "gameWon", "userName"
    order by count desc;
  `,
    { type: QueryTypes.SELECT }
  );
  console.log(result);
  return result;
}

/*
- Need to write query that finds last game played by user
- if last game was won, then carry streak over



*/

async function checkLastGame(req, res) {
  console.log("checking last game: ", req.user.id);
  lastgame = await Game.findAll({
    where: {
      userId: req.user.id,
    },
    order: [["updatedAt", "DESC"]],
    limit: 1,
  });
  console.log("LAST GAME ", lastgame);
  streakcount = await User.findAll({
    where: {
      id: req.user.id,
    },
  });
  console.log("STREAK ", streakcount[0].dataValues.streakcount);
  getLongStreak();
  res.json({ lastgame, streakcount, getLongStreak });
}

async function getUserScores(req, res) {
  console.log("getting user scores", req.user);
  const userScores = await Game.findAll({
    // where: { userId: req.user.id },
    attributes: [
      "userName",
      "userId",

      [Sequelize.fn("SUM", Sequelize.col("score")), "total_score"],
    ],
    group: ["userName", "userId"],
    order: [["total_score", "DESC"]],
  });

  const totalScore = await Game.findAll({
    where: { userId: req.user.id },
    attributes: [
      "userName",
      "userId",

      [Sequelize.fn("SUM", Sequelize.col("score")), "total_score"],
    ],
    group: ["userName", "userId"],
    order: [["total_score", "DESC"]],
    limit: 1,
  });

  console.log("USER SCORES: ", userScores);
  let userName = req.user.name;

  //active players current win streak
  // let playerCurrentStreak = await db.sequelize.query(`
  // select "userName", "gameWon", "updatedAt", count(*)
  // from (select *,
  //   (row_number() over (order by id) -
  //   row_number() over (partition by "gameWon" order by id)
  //   )as grp
  //   from "Games"
  //   )"Games" where "gameWon" = 't' AND "userName" = '${userName}'
  //   group by grp, "gameWon", "userName", "updatedAt"
  //   order by count desc, "updatedAt" desc

  //   ;
  // `, {type: QueryTypes.SELECT})

  let playerCurrentStreak = 0;
  let tempPlayerCurrentStreak = await Game.findAll({
    where: { userId: req.user.id },
    order: [["id", "DESC"]],
    
  });

  console.log("STREAK STREAK:  ", tempPlayerCurrentStreak)
  
  if (tempPlayerCurrentStreak[0].gameWon){
    console.log("PLAYER STREAK is TRUE")
    for(let i=0; i<tempPlayerCurrentStreak.length; i++){
      if(tempPlayerCurrentStreak[i].gameWon){
        playerCurrentStreak =  playerCurrentStreak +1
        console.log("PLAYER STREAK: COUNTING IN PROGRESS", playerCurrentStreak)
      }else{
        
        break
      }
    }
  }else{
    playerCurrentStreak=0
  }

  console.log("PLAYER STREAK: ", playerCurrentStreak)

  //active player's longest win streak
  // let playerLongStreak = await db.sequelize.query(
  //   `
  // select "userName", "gameWon", count(*)
  // from (select *,
  //   (row_number() over (order by id) - 
  //   row_number() over (partition by "gameWon" order by id)
  //   )as grp
  //   from "Games"
  //   )"Games" where "gameWon" = 't' AND "userName" = '${userName}'
  //   group by grp, "gameWon", "userName"
  //   order by count desc
  //   limit 10
  //   ;
  // `,
  //   { type: QueryTypes.SELECT }
  // );

  let tempPlayerLongStreak = await Game.findAll({
    where: { userId: req.user.id },
    order: [["id", "DESC"]],
    
  });

  console.log("STREAK STREAK:  ", tempPlayerLongStreak)

  let playerLongStreak = 0
  let winStreak = 0
  let loseStreak = 0
  
    for(let i=0; i<tempPlayerLongStreak.length; i++){
      if(tempPlayerLongStreak[i].gameWon){
        loseStreak = 0
       winStreak =  winStreak +1
        if(winStreak > playerLongStreak){
          playerLongStreak = winStreak
        }
      }else{
        winStreak = 0
        loseStreak = loseStreak +1
        
      }
    }
  

  // longest win streak of all players
  let longStreak = await db.sequelize.query(
    `
  select "userName", "gameWon", count(*)
  from (select *,
    (row_number() over (order by id) - 
    row_number() over (partition by "gameWon" order by id)
    )as grp
    from "Games"
    )"Games" where "gameWon" = 't'
    group by grp, "gameWon", "userName"
    order by count desc
    limit 1;
  `,
    { type: QueryTypes.SELECT }
  );

  let playerHighScore = await Game.findAll({
    where: { userId: req.user.id },
    attributes: ["userName", "userId", "score"],
    group: ["userName", "userId", "score"],
    order: [["score", "DESC"]],
    limit: 5,
  });

  res.json({
    userScores,
    longStreak,
    playerLongStreak,
    totalScore,
    playerHighScore,
    playerCurrentStreak,
    tempPlayerCurrentStreak
  });
}

async function updateStreak(req, res) {
  console.log("Get Streak Count", req.body);
  const user = await User.findAll({
    where: {
      id: req.body.userId,
    },
  });
  console.log("user retrieved: ", user);

  const updatedUser = await User.update(
    {
      streakcount: req.body.streakCount,
      // gameWon: req.body.gameWon
    },
    {
      where: {
        id: req.body.userId,
      },
    }
  );

  console.log("user updated?: ", updatedUser.streakCount);

  let user2 = await User.findAll({
    where: {
      id: req.user.id,
    },
  });
  console.log("USER 2 ", user2);

  res.json(updatedUser);
}

async function startRandomGame(req, res) {
  console.log("new game process started");

  const newRandomGame = await Game.create({
    wordId: req.body.wordId,
    userId: req.body.userId,
    userName: req.body.name,
    guess1: "",
    guess2: "",
    guess3: "",
    guess4: "",
    guess5: "",
    guess6: "",
    score: 0,
    gameWon: false,
  });
  console.log(req.body);
  console.log(newRandomGame);

  // const updatedUser = await User.update(
  //   { gameWon: req.body.gameWon},
  //   {
  //     where: {
  //       id: req.body.userId,
  //     },
  //   }
  // );
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

  const newScore = await Game.update(
    {
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
      gameWon: req.body.gameWon,
    },
    {
      where: { id: req.body.gameId },
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
