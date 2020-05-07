const db = require ('../db')
const Fornecedor = db.sequelize.define('fornecedor',{
  Id:{
    type: db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
  razao_social:{
      type: db.Sequelize.STRING,
    },
  cnpj:{
    type: db.Sequelize.DECIMAL(15),
    unique: true
  },
  insc_municipal:{
    type: db.Sequelize.DECIMAL(11)
  },
  insc_estadual:{
    type: db.Sequelize.DECIMAL(9)
  },
})

//Fornecedor.sync({force:true});

module.exports = Fornecedor
