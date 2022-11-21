const Produtos = require('../model/produtos.js');
// let produtos = [
//     {nome: 'Arroz', preco: 10.00},
//     {nome: 'Feijão', preco: 5.70},
//     {nome: 'Macarrão', preco: 2.50}
// ];

exports.listarProdutos = function(requisicao, resposta){
    // resposta.send(produtos);
    Produtos.find({}, function(erro, produtos){ // find() é um método do mongoose que retorna todos os dados do banco de dados
        if(erro){
            return resposta.send({mensagem: '[ERRO]: consutal BD'});
        }
        return resposta.send(produtos);
    });
}

exports.adicionarProduto = (requisicao, resposta) => {
    const novoProduto = requisicao.query;
    if(!novoProduto.nome || !novoProduto.preco) {
        resposta.send({ mensagem: '[ERRO]: informar nome e preco!'});
    } else {
        // produtos.push(novoProduto);
        // resposta.send({ mensagem: '[SUCESSO]: produto adicionado!'});
        Produtos.create(novoProduto, function(erro, produto){
            if(erro){
                return resposta.send({mensagem: '[ERRO]: add BD'});
            }
            return resposta.send({mensagem: '[SUCESSO]: produto adicionado!'});
        }); 
    }
}

exports.removerProduto = function(requisicao, resposta)  {
    const produto = requisicao.query;
    if(!produto.nome || !produto.preco) {
        resposta.send({ mensagem: '[ERRO]: informar nome e preco!'});
    } else {
        Produtos.findOneAndDelete({ nome: produto.nome }, function (erro, dados) { // findOneAndDelete() é um método do mongoose que remove um dado do banco de dados
            if (erro) {
                return resposta.send({ mensagem: '[ERRO]: delete BD' });
            }
            if (dados != null) {
                return resposta.send({ mensagem: '[SUCESSO]: dados removido!' });
            }
            return resposta.send({ mensagem: '[AVISO]: dados não existe no BD!' });
        });
    }
}
