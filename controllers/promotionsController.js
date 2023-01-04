const promotionsService = require('../services/moviesService');

//
const promotionsController = {

    getPromotions: async (req, res) => {
        try {
            await promotionsService.getPromotions(req, res);
        } catch (error) {
            return res.status(500).send({
                date: new Date(),
                code: 500,
                message: error
            });
        }
    },

}

module.exports = promotionsController;
