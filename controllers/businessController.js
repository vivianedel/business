const businessService = require('../services/businessService');

//
const businessController = {

    getBusiness: async (req, res) => {
        try {
            await businessService.getBusiness(req, res);
        } catch (error) {
            return res.status(500).send({
                date: new Date(),
                code: 500,
                message: error
            });
        }
    },

}

module.exports = businessController;
