const jwt = require('jsonwebtoken');
const config = require('../config/config.json');


const autenticacao = {
    generateJWT: async (userId, duration) => {
        try {
            const token = jwt.sign({ sub: userId }, config.secret, { expiresIn: duration });
            
            return token;
        }
        catch (error) {
            return error;
        }
    },


}

module.exports = autenticacao;