const db = require ('../db')
const Instituicao = db.sequelize.define('instituicao',{
  Id:{
    type: db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
  nome_inst:{
    type: db.Sequelize.STRING
  },
  semestre:{
    type: db.Sequelize.INTEGER
  },
  curso:{
    type: db.Sequelize.STRING
  }
})

//Instituicao.sync({force:true});

module.exports = Instituicao
