const model         = require('../../../dao/models/tarefas');
const helper        = require('./tarefas.helper');
const {SaiposError} = require('../saipos.exceptions');
const axios         = require('axios').default;
class TarefaService {
    
    async findAll() {
    
        return await model.findAll({order : [['id', 'DESC']]})
    }
    
    async save(payload){    

        const validPayload = await helper.isValidCreate(payload);
        
        if (validPayload.error) throw new SaiposError(validPayload.error)
        
        let record = await model.bulkCreate(payload)
        
        return record;
    }

    async update({ id }, { senha }){
        const record = await model.findByPk(id)
        
        if (!record) throw new SaiposError('Registro não encontrado!');

        if (record.reabertura > 2 && record.concluida) {
            throw new SaiposError('Esta tarefa não pode ser reaberta pois atingiu o máximo de duas reaberturas!');     
        }

        if (record.concluida) {
            if (!helper.permiteReabrirTarefa(senha)) 
                throw new SaiposError('A senha para liberar a tarefa está incorreta.')
        }

        if (record.concluida || record.reabertura) {
            record.reabertura++;
        }

        record.concluida = !record.concluida;
        
        /// só permito atualizar a situacao "concluida" e quantidade de reabertura
        let updatedRecord =  await record.update({ 
            concluida  : record.concluida, 
            reabertura : record.reabertura 
        })
        
        return updatedRecord;
    }

    async remove(id){
        return await model.destroy(
            { 
                where: { 
                    id  
                } 
            }
        )
        
    }
    
    async validaEmail({ email }) {
        const url = `http://apilayer.net/api/check`;

        const emailValido = await axios.get(url, {
            params : {
                access_key : process.env.MAIL_BOX_KEY,
                email : email
            }
        });

        return emailValido;
    }   
}

module.exports = new TarefaService();
