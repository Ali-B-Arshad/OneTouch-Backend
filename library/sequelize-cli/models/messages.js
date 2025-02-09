'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class messages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      messages.belongsTo(models.groups, {
        foreignKey: 'id',
        onDelete: 'CASCADE'
      })

      messages.belongsTo(models.user_details, {
        foreignKey: 'user_id',
        onDelete: 'CASCADE'
      })
    }
  };
  messages.init({
    content: DataTypes.STRING,
    group_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'messages',
  });
  return messages;
};