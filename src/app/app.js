require('dotenv').config();
const express    = require('express');
const bodyParser = require('body-parser');
const cors       = require('cors');

/// rotas do app 
const tarefaRouter  = require('../modules/saipos/tarefas/tarefas.router');

const app = express();

app.use(bodyParser.json({limit: '5mb'})); 
app.use(bodyParser.urlencoded({limit: '5mb', extended: true}));

// Ativar CORS
app.use(cors());

/// Rota de login
app.use(tarefaRouter)

// catch 404
app.use(function(req, res, next) {
  /// Joga o erro para ser tratado pelo manipulador padrao
  return next(new Error('URL não encontrada'))
});


// Tratamento de erro
app.use(function errorHandler(err, req, res, next) {

  console.log(err);
  
  let statusCode = 500;
  let message    = `Ops, ocorreu um erro durante sua requisição.`; 

  /// Se for um dos erros tratados envio o erro ao usuario, senão só envio um erro 500
  if (err.statusCode) {
    res.status(err.statusCode).json({message: err.message})
  } else {
    res.status(statusCode).json({error: message});
  }
  
});

module.exports = app;
