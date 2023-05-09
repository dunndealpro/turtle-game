const express = require('express');
const router = express.Router();
const gamesCtrl = require('../../controllers/api/games');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// router.post('/new-game', ensureLoggedIn, gamesCtrl.createNewGame)
router.post('/random-turtles/start-random', gamesCtrl.startRandomGame)
router.put('/random-turtles/save-random', gamesCtrl.saveRandomScore)
router.post('/random-turtles/:rwfud',  gamesCtrl.addRwfud)

router.get('/random-turtles/:userId', ensureLoggedIn, gamesCtrl.getUserScores)

router.put('/random-turtles/updateStreak', ensureLoggedIn, gamesCtrl.updateStreak)

router.get('/random-turtles/checkLastGame/:userId', ensureLoggedIn, gamesCtrl.checkLastGame)

module.exports = router;
