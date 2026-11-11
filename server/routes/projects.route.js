const express = require('express')
const verifyToken = require('../middleware/auth.middleware')
const requireRole = require('../middleware/requireRole.middleware')
const { createProject, getProjects } = require('../controllers/projects.controller')
const { getProjectById } = require('../controllers/projectDetails.controller')
const router = express.Router()


router.post('/create-project', verifyToken, requireRole("client"), createProject)
router.get('/browse', verifyToken, getProjects)
router.get('/:id', verifyToken, getProjectById)


module.exports = router