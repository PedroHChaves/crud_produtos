const express = require("express")
const app = express()

app.get("/", function(req, res){
    res.send("Servidor rodando")
})

app.listen(8181, function(){
    console.log("Servidor rodando na porta 8181")
})