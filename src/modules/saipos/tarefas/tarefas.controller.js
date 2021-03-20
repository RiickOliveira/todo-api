const service = require("./tarefas.service");

class TarefaController {
  async getAll(req, res, next) {
    try {
      const records = await service.findAll();
      res.json(records);
    } catch (error) {
      return next(error);
    }
  }

  async save(req, res, next) {
    try {
      const newRecord = await service.save(req.body);
      res.status(201).json(newRecord);
    } catch (error) {
      return next(error);
    }
  }

  async update(req, res, next) {
    try {
      const updatedRecord = await service.update(req.params, req.body);
      res.json(updatedRecord);
    } catch (error) {
      return next(error);
    }
  }

  async removeById(req, res, next) {
    try {
      await service.remove(req.params.id);

      res.json({ message: `Registro excluído com sucesso` });
    } catch (error) {
      return next(error);
    }
  }

  async validaEmail(req, res, next) {
    try {
      const email = await service.validaEmail(req.body);
      res.json(email.data);
    } catch (error) {
      return next(error);
    }
  }
}

module.exports = new TarefaController();
