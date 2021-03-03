const express = require("express")
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
    Produto.all({order: [["id", "ASC"]]}).then(function(posts){
        res.send(posts)
    })
})

app.listen(8181, function(){
    console.log("Servidor rodando na porta 8181.")
})