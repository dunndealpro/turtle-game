const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const db = require("../../models");
const config = require("../../config/auth");
const { QueryInterface, DataTypes } = require("sequelize");
const { Sequelize } = require("../../models");
const User = db.user;
const Role = db.role;

const Op = db.Sequelize.Op;

const queryInterface = db.sequelize;

module.exports = {
  create,
  login,
  checkToken,
};

function checkToken(req, res) {
  console.log(req.user);
  res.json(req.exp);
}

async function login(req, res) {
  try {
    console.log("login start");
    const user = await User.findOne({
      where: { email: req.body.email },
    });
    if (!user) throw new Error();
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error();
    res.json(createJWT(user));
    console.log("Login works!");
  } catch {
    res.status(400).json("Bad Credentials");
  }
}

async function create(req, res) {
  console.log("Create starting");
  try {
    user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
      streakCount: 0,
    });

    const token = createJWT(user);
    console.log("creating a token perhaps?");
    console.log(user.toJSON);
    res.json(token);
  } catch (err) {
    console.log("NO token perhaps?");
    res.status(400).json(err);
  }
  console.log("UserName: ", user.name);
}

/*-- Helper Functions --*/

function createJWT(user) {
  return jwt.sign(
    { user },
    process.env.SECRET,
    { expiresIn: "24h" }
  );
}
