const Sequelize = require('sequelize')
const sequelize = new Sequelize('tid', 'root', 'Resident16',{
  host: "localhost",
  dialect: "mysql"
})


module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize
}
