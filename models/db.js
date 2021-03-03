const Sequelize = require("sequelize")
const sequelize = new Sequelize("produto", "root", "123456", {
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(function(){
    console.log("Banco de dados conectado.")
}).catch(function(erro){
    console.log("Falha ao se conectar com o banco, erro: " + erro + ".")
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}