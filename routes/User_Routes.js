//express is the server name
const express = require('express')
//express uses routers so route requests need to go through it
const router = express.Router();
const userController = require('../controllers/userController')

router.get('/', userController.index)
//must add /year to change url to /year(to tell it what we're looking for) 
//then / w/ number of year
//router.get('/year/:year', nobelController.showYear)

router.get('/job/:{_id}', userController.showTitle)

router.post('/create/{_id}', userController.create)
router.put('/job/:{_id}', userController.edit)
router.delete('/job/:{_id}', userController.delete)

module.exports = router

