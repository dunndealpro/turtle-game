const express = require('express');
const router = express.Router();
const gamesCtrl = require('../../controllers/api/games');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/new-game', ensureLoggedIn, gamesCtrl.createNewGame)
router.post('/random-turtles/save-random', gamesCtrl.saveRandomScore)
router.post('/random-turtles/:rwfud',  gamesCtrl.addRwfud)

router.get('/random-turtles/:userId', gamesCtrl.getUserScores)


module.exports = router;
