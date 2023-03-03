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

console.log("Database.js file starting step 2");

module.exports = {
  HOST: process.env.DATABASE_URL,
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
