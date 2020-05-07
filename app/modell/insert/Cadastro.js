const db = require ('../db')
const bcrypt = require('bcryptjs');
const Cadastro = db.sequelize.define('usuarios',{
  Id:{
    type: db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nome_completo:{
        type: db.Sequelize.STRING
          },
      cpf_user:{
        type: db.Sequelize.DECIMAL(11),
        unique: true
      },
      rg_user:{
        type: db.Sequelize.DECIMAL(11)
      },
      d_nascimento:{
        type: db.Sequelize.STRING
      },
      nome_da_mae:{
        type: db.Sequelize.STRING
      },
      nome_do_pai:{
        type: db.Sequelize.STRING
      },
      cargo:{
        type: db.Sequelize.STRING
      },
      email:{
        type: db.Sequelize.STRING
      },
      senha:{
        type: db.Sequelize.TEXT
      }
    })
    Cadastro.beforeCreate((user, options) => {

        return bcrypt.hash(user.senha, 10)
            .then(hash => {
                user.senha = hash;
            })
            .catch(err => {
                throw new Error();
            });
    });

    //Cadastro.sync({force:true});

    module.exports = Cadastro
