console.log("Database.js file starting step 1");

const db = require("../models");

// db.sequelize
//   .sync()
//   .then(() => {
//     console.log("Synced db.");
//   })
//   .catch((err) => {
//     console.log("Failed to sync db: " + err.message);
//   });

// const db = require("./models");
// console.log("DB connection starting");
// console.log(db.sequelize)


// const db = require("./app/models");

const Role = db.role;
db.sequelize.sync()

// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync Db');
//   initial();
// });

function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}

console.log("Database.js file starting step 2");

module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "$unBe4r!",
  DB: "postgres",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
