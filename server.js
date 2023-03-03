const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
// const pool = require('./config/datab')

require("dotenv").config();

// require('./config/database');

const app = express();

app.use(logger("dev"));
app.use(express.json());

app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));

// app.use(require('./config/checkToken'));
app.use(require('./config/checkToken'));

const db = require("./models");
console.log("DB connection starting");
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


// db.sequelize
//   .sync()
//   .then(() => {
//     console.log("Synced db.");
//   })
//   .catch((err) => {
//     console.log("Failed to sync db: " + err.message);
//   });

// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
//   });


// Put API routes here, before the "catch all" route

// require('./routes/api/auth')(app);
// require('./routes/api/users')(app);

app.use('/api/users', require('./routes/api/users'));

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});
