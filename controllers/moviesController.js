const moviesService = require('../services/moviesService');

//
const moviesController = {

    getMovies: async (req, res) => {
        try {
            await moviesService.getMovies(req, res);
        } catch (error) {
            return res.status(500).send({
                date: new Date(),
                code: 500,
                message: error
            });
        }
    },

}

module.exports = moviesController;