const db = require("./db")

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
