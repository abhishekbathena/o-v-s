module.exports = (sequelize, DataTypes) => {


    const VoterT = sequelize.define("VoterT", {





        },


        {}

    );


    VoterT.associate = (models) => {
        models.CandidateT.hasMany(VoterT, { onDelete: 'CASCADE' });
        VoterT.belongsTo(models.CandidateT, { onDelete: 'CASCADE' })




        models.Userid.belongsToMany(models.PositionT, { through: 'VoterT' });

        models.PositionT.belongsToMany(models.Userid, { through: 'VoterT' });

    }



    return VoterT
};