const express = require('express');
const router = express.Router();
const gamesCtrl = require('../../controllers/api/games');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/random-turtles/start-random', ensureLoggedIn, gamesCtrl.startRandomGame)
router.put('/random-turtles/save-random', ensureLoggedIn, gamesCtrl.saveRandomScore)
router.post('/random-turtles/:rwfud', ensureLoggedIn,  gamesCtrl.addRwfud)
router.get('/random-turtles/:userId', ensureLoggedIn, gamesCtrl.getUserScores)
router.get('/random-turtles/:userId', ensureLoggedIn, gamesCtrl.getUserScores)
router.put('/random-turtles/updateStreak',  ensureLoggedIn, gamesCtrl.updateStreak)
router.get('/random-turtles/checkLastGame/:userId', ensureLoggedIn, gamesCtrl.checkLastGame)

module.exports = router;
