const { application } = require('express');
const express = require('express');
const api1 = express();
const porta = 3000;
const mongoose = require('mongoose');
const enderecoBanco = 'mongodb+srv://jhean:123@cluster0.qvtelm2.mongodb.net/test';

mongoose.connect(enderecoBanco);
mongoose.connection.on('error', function (erro) {
    console.log('[ERRO]: conexão com BD ' + erro);
});

mongoose.connection.on('Desconectado', function () {
    console.log('[AVISO]: Aplicação desconectada com DB')
});

mongoose.connection.on('Conectado', function () {
    console.log('[AVISO]: Aplicação conectada com DB')
});

api1.listen(porta, function (){
    console.log('Ta rodando na porta 3k ai man')
});

api1.get('/status', function (req, res) {
   res.send('Api On Brow'); 
});