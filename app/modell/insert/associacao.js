const db = require ('../db')
const Associacao = db.sequelize.define('fornecedor',{
  Id:{
    type: db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
  nome_asso:{
      type: db.Sequelize.STRING,
    },
  cnpj_asso:{
    type: db.Sequelize.DECIMAL(15),
    unique: true
  },
  insc_municipa_asso:{
    type: db.Sequelize.DECIMAL(11)
  },
})

//Associacao.sync({force:true});

module.exports = Associacao
