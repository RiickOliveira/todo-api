'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tarefas', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'id'
      },
      tarefa: {
        type: Sequelize.STRING(250),
        allowNull: false,
        field: 'tarefa'
      },
      responsavel: {
        type: Sequelize.STRING(60),
        allowNull: false,
        field: 'responsavel'
      },
      email: {
        type: Sequelize.STRING(60),
        allowNull: false,
        field: 'email' 
      },
      concluida: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        field: 'concluida',
        default: false              
      },
      reabertura: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'reabertura',
        default: 0
      },
      dataCriacao: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'data_criacao'
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.dropTable('tarefas');
    
  }
};
