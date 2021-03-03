const express = require("express")
const app = express()

const Sequelize = require("sequelize")
const sequelize = new Sequelize("produto", "root", "123456", {
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(function(){
    console.log("Banco de dados conectado.")
}).catch(function(erro){
    console.log("Falha ao se conectar com o banco, erro: " + erro)
})

const Produto = sequelize.define("produtos", {
    titulo: {
        type: Sequelize.STRING
    },
    descricao: {
        type: Sequelize.TEXT
    },
    preco: {
        type: Sequelize.FLOAT
    },
    categoria: {
        type: Sequelize.STRING
    }
})

Produto.sync()

app.get("/", function(req, res){
    res.send("Servidor rodando.")
})

app.post("/insert", function(req, res){
    Produto.create({
        titulo: req.body.titulo,
        descricao: req.body.descricao,
        preco: parseFloat(req.body.preco),
        categoria: req.body.categoria
    })

    res.send("Usuário inserido.")
})

app.listen(8181, function(){
    console.log("Servidor rodando na porta 8181.")
})