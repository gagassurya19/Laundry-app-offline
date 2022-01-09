'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.tb_outlet, {
        foreignKey: "id_outlet",
        as: "tb_outlet"
      })

      this.hasMany(models.tb_transaksi, {
        foreignKey: "id_user",
        as: "tb_transaksi"
      })
    }
  };
  tb_user.init({
    nama: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.TEXT,
    id_outlet: DataTypes.INTEGER,
    role: DataTypes.ENUM('admin', 'kasir', 'owner')
  }, {
    sequelize,
    modelName: 'tb_user',
    tableName: 'tb_user',
  });
  return tb_user;
};