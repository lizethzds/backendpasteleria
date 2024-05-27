const router = require('express').Router()
const productos = require('../controllers/productos.controller')
const Authorize = require('../middlewares/auth.middleware')

router.get('/', Authorize('Usuario,Administrador'), productos.getAll)
router.get('/:id', Authorize('Usuario,Administrador'), productos.get)
router.post('/', Authorize('Administrador'), productos.create)
router.put('/:id', Authorize('Administrador'), productos.update)
router.delete('/:id', Authorize('Administrador'), productos.delete)


module.exports = router