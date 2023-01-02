'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class users extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    users.init({
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        email: DataTypes.STRING,
        user_type: DataTypes.STRING,
        categories_ids: DataTypes.STRING,
        birth_date: DataTypes.DATE,
        password: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'users',
        timestamps: false,
        underscored:true,
        createdAt:false,
        updatedAt:false
    });
    return users;
};