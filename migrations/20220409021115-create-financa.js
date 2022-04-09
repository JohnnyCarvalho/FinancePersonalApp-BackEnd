'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Financas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      data: {
        allowNull: false,
        type: Sequelize.DATE,
        validator:{
          notEmpty: {msg:"Campo não pode ser vazio!"}
        } 
      },
      categoria_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        validator:{
          notEmpty: {msg:"Campo não pode ser vazio!"}
        },
        references: {
          model: 'Categorias',
          key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },

      titulo: {
        allowNull: false,
        type: Sequelize.STRING,
        validator:{
          notEmpty: {msg:"Campo não pode ser vazio!"}
        },
      },
      valor: {
        allowNull: false,
        type: Sequelize.DOUBLE,
        validator:{
          notEmpty: {msg:"Campo não pode ser vazio!"}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Financas');
  }
};