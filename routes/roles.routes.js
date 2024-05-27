const router = require('express').Router()
const roles = require('../controllers/roles.controller')
const Authorize = require('../middlewares/auth.middleware')

// GET: api/auth
router.get('/', roles.getAll)

module.exports = router