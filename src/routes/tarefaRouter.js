const express = require('express')
const router = express.Router()
const tarefaController = require('../controllers/tarefaController')
const tarefaValidation = require('../util/tarefaValidation')

router.get('/', tarefaController.listar)
router.get('/:id', tarefaValidation.listarPorId, tarefaController.listarPorId)
router.post('/', tarefaValidation.inserir, tarefaController.inserir)
router.put('/:id', tarefaValidation.alterar, tarefaController.alterar)
router.delete('/:id', tarefaValidation.deletar, tarefaController.deletar)

module.exports = router