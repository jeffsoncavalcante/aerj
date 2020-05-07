const db = require ('../db')
const Endereco = db.sequelize.define('endereco',{
  Id:{
    type: db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
  cidade:{
    type: db.Sequelize.STRING
  },
  rua:{
    type: db.Sequelize.STRING
  },
  cep:{
    type: db.Sequelize.INTEGER
  },
  bairro:{
    type: db.Sequelize.STRING
  },
  estado:{
    type: db.Sequelize.STRING
  }
})

//Endereco.sync({force:true});

module.exports = Endereco
