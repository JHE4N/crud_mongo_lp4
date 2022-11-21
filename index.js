const express = require('express');
const api = express();
const porta = 3000;
const mongose = require('mongoose');

const enderecoBanco = 'mongodb+srv://gabriel:1234@cluster0.wd2vtba.mongodb.net/test';

mongose.connect(enderecoBanco);

mongose.connection.on('error', function (erro) {
    console.log('[ERRO]: conexao com BD' + erro);
});

mongose.connection.on('disconectado', function(){
    console.log('[AVISO]: Aplicação desconectada com BD');
});

mongose.connection.on('concectado', function(){
    console.log('[AVISO]: Aplicação concetada com BD');
});

//localhost:3000
api.listen(porta, function(){
    console.log('Servidor rodando na porta ' + porta);
})

// IP_API:3000/status
api.get('/status', function(req, res){
    res.send('Api  online');
});

// GET -> pedir informação
// POST -> enviar informação (criar/cadsatar1
// PUT -> enviar informação (atualizar/editar)
// DELETE -> deletar informação
const produtosController = require('./controller/produtos.js');
api.get('/produtos', produtosController.listarProdutos);
api.post('/produtos', produtosController.adicionarProduto);
api.delete('/produtos', produtosController.removerProduto);
api.put('/produtos', produtosController.editarProduto);


