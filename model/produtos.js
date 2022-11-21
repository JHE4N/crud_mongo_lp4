const mongose = require('mongoose');
const Schema = mongose.Schema; // Schema é uma classe do mongoose que define o modelo de dados que será armazenado no banco de dados MongoDB

const produtoSchema = new Schema({
    nome: {type: String, required: true, unique: true},
    preco: {type: Number, required: true},
    createdAt: {type: Date, default: Date.now}

});

module.exports = mongose.model('Produtos', produtoSchema);