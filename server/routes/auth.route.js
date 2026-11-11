const express = require('express')
const {signup, signin} = require('../controllers/authentication.controller')
const verifyToken = require('../middleware/auth.middleware')
const requireRole = require('../middleware/requireRole.middleware')
const router = express.Router()

router.post('/signup', signup)
router.post('/signin', signin)

module.exports = router