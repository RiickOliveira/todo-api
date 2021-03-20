const router        = require('express').Router();
const controller    = require('./tarefas.controller');

router.get('/tarefas', async (req, res, next) => { await controller.getAll(req, res, next) });

router.post('/tarefas', async (req, res, next) => { await controller.save(req, res, next) });

router.put('/tarefas/:id', async (req, res, next) => { await controller.update(req, res, next) });

router.delete('/tarefas/:id', async (req, res, next) => { await controller.removeById(req, res, next) });

router.post('/tarefas/valida-email', async (req, res, next) => { await controller.validaEmail(req, res, next) });

module.exports = router;