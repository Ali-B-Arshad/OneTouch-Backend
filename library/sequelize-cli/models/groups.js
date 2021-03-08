'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class groups extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      groups.hasMany(models.messages, {
        foreignKey: 'group_id',
      })

      groups.hasOne(models.team_informations,{
        foreignKey: 'team_id'
      })
    }
  };
  groups.init({
    group_name: DataTypes.STRING,
    team_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'groups',
  });
  return groups;
};