module.exports = (sequelize, DataTypes) => {
    const Userid = sequelize.define("Userid", {
            username: {
                type: DataTypes.STRING,
                allowNull: true,
            },

            password: {
                type: DataTypes.STRING,
                allowNull: true,
            },


            roll: {
                type: DataTypes.STRING,
                allowNull: true,
            },

            image: {
                type: DataTypes.STRING,
                allowNull: true



            },
            phonenumber: {
                type: DataTypes.STRING,
                allowNull: true,
                unique: true
            }



        }, {
            timestamps: false
        }

    );

    return Userid

};