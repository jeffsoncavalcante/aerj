const db = require ('./db')
const bcrypt = require('bcryptjs');

const User = db.sequelize.define('auth',{
      email:{
        type: db.Sequelize.STRING,
        require: true,
        unique: true
      },
      senha:{
        type: db.Sequelize.STRING,
        require: true,
      }
    })
    User.beforeCreate((user, options) => {

        return bcrypt.hash(user.senha, 10)
            .then(hash => {
                user.senha = hash;
            })
            .catch(err => {
                throw new Error();
            });
    });
    
//User.sync({force:true});

module.exports = User
