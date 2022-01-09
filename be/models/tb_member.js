'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_member extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.tb_transaksi, {
        foreignKey: "id_member",
        as: "tb_transaksi"
      })
    }
  };
  tb_member.init({
    nama: DataTypes.STRING,
    alamat: DataTypes.TEXT,
    jenis_kelamin: DataTypes.ENUM('L', 'P'),
    tlp: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tb_member',
    tableName: 'tb_member',
  });
  return tb_member;
};