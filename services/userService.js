

const userService = {
  getUser: async (req, res) => {
    try {
      
      res.status(200).json("get users path");
    } catch (error) {
      res.status(500).json({
        date: new Date(),
        code: 500,
        message: error,
      });
    }
  },

};

module.exports = userService;
