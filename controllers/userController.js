
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
    postUser: async (req, res) => {
        try {
            await userService.postUser(req, res);
        } catch (error) {
            return res.status(500).send({
                date: new Date(),
                code: 500,
                message: error
            });
        }
    },

    userAuth: async (req, res) => {
        try {
            await userService.userAuth(req, res);
        } catch (error) {
            return res.status(500).send({
                date: new Date(),
                code: 500,
                message: error
            });
        }

    }

}

module.exports = userController;