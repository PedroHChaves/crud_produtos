const express = require("express")
const { where } = require("sequelize/types")
const app = express()

const Produto = require("./models/Produto")

app.get("/", function(req, res){
    res.send("Servidor rodando.")
})

app.post("/insert", function(req, res){
    Produto.create({
        titulo: req.body.titulo,
        descricao: req.body.descricao,
        preco: parseFloat(req.body.preco),
        categoria: req.body.categoria
    }).then(function(){
        res.send("Produto inserido com sucesso.")
    }).catch(function(erro){
        res.send("Falha ao adicionar o produto, erro: " + erro + ".")
    })
})

app.get("/list", function(req, res){
    Produto.all({
        order: [["id", "ASC"]]
    }).then(function(posts){
        res.send(posts)
    })
})

app.get("/delete/:id", function(req, res){
    Produto.destroy({
        where: {
            "id": req.params.id
        }
    }).then(function(){
        res.send("Produto excluído com sucesso.")
    }).catch(function(erro){
        res.send("Produto inexistente.")
    })
})

app.post("/update/:id", function(req, res){
    Produto.update({
        titulo: req.body.titulo,
        descricao: req.body.descricao,
        preco: parseFloat(req.body.preco),
        categoria: req.body.categoria
    }, {
        where: {
            id: req.params.id
        }
    }).then(function(){
        res.send("Produto alterado com sucesso.")
    }).catch(function(erro){
        res.send("Produto inexistente.")
    })
})

app.listen(8181, function(){
    console.log("Servidor rodando na porta 8181.")
})