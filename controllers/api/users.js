const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require("../../models");
const config = require("../../config/auth");
const User = db.user;
const Role = db.role;

const Op = db.Sequelize.Op;

module.exports = {
    create,
    login,
    checkToken
  };

  function checkToken(req, res) {
    console.log(req.user);
    res.json(req.exp);
  }

  async function login(req, res) {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) throw new Error();
      const match = await bcrypt.compare(req.body.password, user.password);
      if (!match) throw new Error();
      res.json( createJWT(user) );
    } catch {
      res.status(400).json('Bad Credentials');
    }
  }
  
  async function create(req, res) {
    try {
        // Add the user to the database
        // const user = await User.create(req.body);
      //   const user = await User.findOne({where: {
      //     username: req.body.username
      //   } });
      // if (user) throw new Error();
         const user = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8)
          })
            .then(user => {
              if (req.body.roles) {
                Role.findAll({
                  where: {
                    name: {
                      [Op.or]: req.body.roles
                    }
                  }
                }).then(roles => {
                  user.setRoles(roles).then(() => {
                    res.send();
                  });
                });
              } else {
                // user role = 1
                user.setRoles([1]).then(() => {
                  res.send();
                });
              }
            })
            .catch(err => {
              res.status(500).send({ message: err.message });
            });
            console.log(user.username)
        const token = createJWT(user);
        console.log("creating a token perhaps?")
    // Yes, we can use res.json to send back just a string
    // The client code needs to take this into consideration
    res.json(token);
      } catch (err) {
        // Client will check for non-2xx status code 
        // 400 = Bad Request
        console.log("NO token perhaps?")
        res.status(400).json(err);
      }
  }

  /*-- Helper Functions --*/

function createJWT(user) {
    console.log("Create JWT")
    return jwt.sign(
      // data payload
      { user },
      process.env.SECRET,
      { expiresIn: '24h' }
    );
  }