// const { authJwt } = require("../../middleware");
// const controller = require("../../controllers/user");

// module.exports = function(app) {
//   app.use(function(req, res, next) {
//     res.header(
//       "Access-Control-Allow-Headers",
//       "x-access-token, Origin, Content-Type, Accept"
//     );
//     next();
//   });

//   app.get("/api/test/all", controller.allAccess);

//   app.get(
//     "/api/test/user",
//     [authJwt.verifyToken],
//     controller.userBoard
//   );

//   app.get(
//     "/api/test/mod",
//     [authJwt.verifyToken, authJwt.isModerator],
//     controller.moderatorBoard
//   );

//   app.get(
//     "/api/test/admin",
//     [authJwt.verifyToken, authJwt.isAdmin],
//     controller.adminBoard
//   );
// };

const { verifySignUp } = require("../../middleware");
const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// GET /api/users/check-token
router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);
// POST /api/users
router.post('/', verifySignUp.checkDuplicateUsernameOrEmail, usersCtrl.create);
// POST /api/users/login
router.post('/login', usersCtrl.login);


module.exports = router;