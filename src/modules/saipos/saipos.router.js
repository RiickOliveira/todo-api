const tarefaRouter    = require('./tarefas/tarefas.router');

function route(app) {
    app.use(tarefaRouter)
}

module.exports = { route }