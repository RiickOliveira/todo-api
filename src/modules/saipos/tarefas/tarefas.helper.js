const TarefaModel   = require('../../../dao/models/tarefas');
const yup = require('yup'); 

const schema = yup.array().of(
    yup.object().shape({
        tarefa  : yup.string().max(250, "Tarefa: Limite máximo de 250 caracteres").required("A descrição da tarefa é obrigatória"),
        responsavel : yup.string().max(60, "Responsavel: Limite máximo de 60 caracteres").required("O responsável da tarefa é obrigatório"),
        email: yup.string().email().max(60, "Email: Limite máximo de 60 caracteres").required("O email do responsável da tarefa é obrigatório"),
    })
)

class TarefaHelper {
    
    async isValidCreate(payload) {
        return schema.validate(payload).then(function (valid) {
            return valid;
        }).catch(err => {
            return { error : err.message };
        });
    }

    permiteReabrirTarefa(senha) {
        const senhaLiberacao = 'TrabalheNaSaipos'
        return senha === senhaLiberacao;
    }
     
}

module.exports = new TarefaHelper();