module.exports = (sequelize, DataTypes) => {
    const CandidateT = sequelize.define("CandidateT", {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            photo: {
                type: DataTypes.BLOB,
                allowNull: true,

            },
            description: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            votes: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: '0'
            }

        }

    );





    return CandidateT
};