module.exports = (sequelize, DataTypes) => {
    const Db = sequelize.define("Db", {
            username: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },


            roll: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            email: {
                type: DataTypes.STRING,
                allowNull: false,
            },


        }, {}

    );







    return Db



};