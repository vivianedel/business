
const userService = require('../services/userService');

//
const userController = {

    getUser: async (req, res) => {
        try {
            await userService.getUser(req, res);
        } catch (error) {
            return res.status(500).send({
                date: new Date(),
                code: 500,
                message: error
            });
        }
    },

}

module.exports = userController;