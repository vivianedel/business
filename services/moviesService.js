
const moviesService = {
    getMovies: async (req, res) => {
      try {
        
        res.status(200).json("get moviesgit path");
      } catch (error) {
        res.status(500).json({
          date: new Date(),
          code: 500,
          message: error,
        });
      }
    },
  
  };
  
  module.exports = moviesService;