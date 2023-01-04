const models = require('../models')

const userRepository = {

    BuscarTodas: async () => {
        try {
            const todosUsuarios = await models.usuarios.findAll({})
            return todosUsuarios
        } catch (error) {
            return error
        }
    },

    Register: async data => {
        try {
            const userCreated = await models.users.create(data);
            return userCreated;
        } catch (error) {

            return error.original.sqlMessage
        }
    },

    Atualizar: async (data, id) => {
     
        try {
            const atualizado = await models.usuarios.update(data, id)
            return atualizado
        } catch (error) {
            return error
        }
    },

    SearchById: async (id) => {
        try {
            const userData = await models.users.findByPk(id)
            return userData
        } catch (error) {
            return error
        }
    },

    PesquisarEmail: async (email) => {
        try {
            let localizado = await models.usuarios.findOne({
                where: {
                    email: email
                }
            });
            return localizado
        } catch (error) {
            return error
        }
    },

    Deletar: async (where) => {
        try {
            const deletado = await models.usuarios.destroy(where)
            return deletado
        } catch (error) {
            return error
        }
    }

}

module.exports = userRepository;