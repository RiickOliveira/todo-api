const { Sequelize, connection } = require('../index');
const { Model } 				= Sequelize;

class Tarefas extends Model {}
Tarefas.init(  {
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
			defaultValue: false
		},
		reabertura: {
			type: Sequelize.INTEGER,
			allowNull: false,
			field: 'reabertura',
			defaultValue : 0
		},
		dataCriacao: {
			type: Sequelize.DATE,
			allowNull: false,
			field: 'data_criacao'
        }
	},{
		sequelize: connection,
		modelName: 'tarefas',
		freezeTableName : true,
		timestamps : true,
		updatedAt: false,
		createdAt: 'dataCriacao',//automatiza o log de data e hora de criação
		underscored : false
	}
);

module.exports = Tarefas;

