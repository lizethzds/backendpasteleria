const router = require('express').Router()
const productos = require('../controllers/productos.controller')


router.get('/', productos.getAll)
router.get('/:id', productos.get)
router.post('/', productos.create)
router.put('/:id', productos.update)
router.delete('/:id', productos.delete)


module.exports = router