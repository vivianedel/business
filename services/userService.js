
const bcrypt = require('bcrypt');
const userRepository = require('../repository/userRepository');

const userService = {
  getUser: async (req, res) => {
    try {
        let userData = await userRepository.SearchById(req.params.id);
        if (userData) {
            res.status(200).json({
                date: new Date(),
                code: 200,
                userData
            });
        } else {
            res.status(200).json({
                date: new Date(),
                code: 200,
                message: "User not found!"
            });
        }
    } catch (error) {
        res.status(500).json({

            date: new Date(),
            code: 500,
            message: error

        });
    }
},
  postUser: async (req, res) => {

    try {
        let bodyCopy = req.body;
        bodyCopy.password = bcrypt.hashSync(req.body.password, 10);

        let created = await userRepository.Register(bodyCopy);

        //let bearer = "";
        //if (criado.id) { bearer = await autenticacao.gerarJWT(criado.id, '1d'); } else { bearer = ""; }

        res.status(200).json({

            date: new Date(),
            code: 200,
            message: created

        });

    } catch (error) {
        console.error(error)
        res.status(500).json({

            date: new Date(),
            code: 500,
            message: error

        });

    }

},

};

module.exports = userService;
