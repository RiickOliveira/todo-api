# README #

Projeto de TODO List solicitado pela SAIPOS.
Tecnologias
    * NodeJS
    * PostgreeSQL

### O que este repositório se propõe a fazer? ###

* Uma lista de tarefas simples feito / pendente
* Um controle que gere tarefas aleatórias quando não houver tarefas pendentes
* Uma sugestão de email quando o usuário informar um email inválido
* Impedir uma tarefa de ser "reaberta" mais que duas vezes 
* Somente permitir "reabrir" tarefa mediante a senha

### Como fazer o setup? ###

* Você precisará ter um servidor de POSTGRESQL
* Precisará configurar usuário, senha, servidor, porta e banco de dados no arquivo ".env.example" 
  na raiz do projeto, basta remover o ".example" do arquivo.
* Abrir o terminal e rodar os comandos: 
    - "npm i" para instalar as dependencias
    - "npm run db:build" para criar o banco de dados e as migrations
    - "npm start" para iniciar a api


### Para falar comigo? ###

* Email para "rcdoliveira98@hotmail.com"
 