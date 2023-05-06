console.log("models/index.js file starting")


const dbConfig = require("../config/database.js");

const Sequelize = require("sequelize");
// const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
// const sequelize = new Sequelize(process.env.DATABASE_URL, {
//   host: process.env.HOST,
//   dialect: 'postgres',
//   operatorsAliases: 0,

//   // pool: {
//   //   max: dbConfig.pool.max,
//   //   min: dbConfig.pool.min,
//   //   acquire: dbConfig.pool.acquire,
//   //   idle: dbConfig.pool.idle
//   // }
// });

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.HOST,
  port:process.env.PORT,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;



// db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
console.log("Is this printing? ")
db.user = require("../models/user.js")(sequelize, Sequelize);
db.role = require("../models/role.js")(sequelize, Sequelize);
db.word = require("../models/word.js")(sequelize, Sequelize);
db.game = require("../models/game.js")(sequelize, Sequelize);

db.user.belongsToMany(db.game, {
  as: 'user',
  through: "RandomWordGame",
  foreignKey: "userId",
  otherKey: "gameId"
})

db.game.hasOne(db.user, {
  through: "RandomWordGame",
  foreignKey: "gameId",
  otherKey: "userId"
})

db.game.hasOne(db.word)

db.word.belongsToMany(db.game, {
  through: "RandomWordGame",
  foreignKey: "wordId",
  otherKey: "gameId"
})



db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId",
});

db.ROLES = ["user", "admin", "moderator"];
console.log(db.ROLES)
console.log("models/index.js file ending")

module.exports = db;