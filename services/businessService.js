
const businessService = {
    getBusiness: async (req, res) => {
      try {
        
        res.status(200).json("get businessgit path");
      } catch (error) {
        res.status(500).json({
          date: new Date(),
          code: 500,
          message: error,
        });
      }
    },
  
  };
  
  module.exports = businessService;
