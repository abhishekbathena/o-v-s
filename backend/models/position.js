module.exports = (sequelize, DataTypes) => {


    const PositionT = sequelize.define("PositionT", {
            description: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            Month: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            Date: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            Year: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            Hours: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            Minutes: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            Seconds: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            Status: {
                type: DataTypes.STRING,
                allowNull: true
            }





        }

    );

    PositionT.associate = (models) => {
        PositionT.hasMany(models.CandidateT, { onDelete: 'CASCADE' });
        models.CandidateT.belongsTo(PositionT, { onDelete: 'CASCADE' })
    }


    return PositionT

};