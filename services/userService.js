
const bcrypt = require('bcrypt');
const userRepository = require('../repository/userRepository');
const auth = require('../common/auth')

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

        let bearer = "";
        if (created.id) { bearer = await auth.gerarJWT(created.id, '1d'); } else { bearer = ""; }

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

 userAuth: async (req, res) => {

        try {

            let { email, password } = req.body;

            let found = await userRepository.searchByEmail(email);


            if (found && bcrypt.compareSync(password, found.dataValues.password)) {


                let bearer = await auth.generateJWT(found.dataValues.id, '1d');
                res.status(200).send(

                    {
                        date: new Date(),
                        code: 200,
                        id: found.id,
                        nome: found.nome,
                        token: bearer
                    }

                );

            } else {
                res.status(200).send(
                    {
                        date: new Date(),
                        code: 200,
                        message: "Usuário ou senha inválidos"
                    }

                );
            }

        } catch (error) {
            console.log(error)
            res.status(500).send(
                {
                    date: new Date(),
                    code: 500,
                    message: error
                }

            );
        }
    },

  

};

module.exports = userService;
