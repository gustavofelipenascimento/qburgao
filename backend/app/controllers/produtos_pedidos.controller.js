const Produto_PedidoModel = require("../models/produtos_pedidos.model");

exports.create = (req, res) => {
    if (!req.body.observacao || !req.body.produtos_idprodutos || !req.body.pedidos_idpedidos){
        res.status(400).send({
            message: "Conteúdo do corpo da requisição vazia."
        });
    }else{
        const produtos_pedidos = new Produto_PedidoModel ({
            observacao: req.body.observacao,
            produtos_idprodutos: req.body.produtos_idprodutos,
            pedidos_idpedidos: req.body.pedidos_idpedidos
        });
        Produto_PedidoModel.create(produtos_pedidos, (err, data) =>{
            if (err){
                res.status(500).send({
                    message: err.message || "Ocorreu ao inserir os dados"
                });
            }else {
                res.send(data);
            }
        })
    }
}
exports.findAll = (req, res) => {
    Produto_PedidoModel.getAll((err, data) =>{
        if(err){
            res.status(500).send({
                message: err.message || "Ocorreu erro desconhecido!"
            });
        } else{
            res.send(data);
        }
    })
}

exports.findById = (req, res) => {
    Produto_PedidoModel.findById(req.params.produto_pedidoId, (err, data)=> {
        if(err){
            if(err.type == "not_found"){
                res.status(404).send({
                    message: "Produto/Pedido não encrontrado com ID: "+req.params.produto_pedidoId
                });
            }else{
                res.status (500).send({
                    message: "Erro ao retornar o produto_pedido com ID"+req.params.produto_pedidoId
                });
            }
        }else {
            res.send(data);
        }
    })
}
exports.update = (req, res) => {
    if(!req.body.observacao || !req.body.produtos_idprodutos || !req.body.pedidos_idpedidos){
        res.status(400).send({
            message: "Conteúdo do corpo da requisição vazia."
        });
    }else { 
        const produtos_pedidos = new Produto_PedidoModel({
            observacao: req.body.observacao,
            produtos_idprodutos: req.body.produtos_idprodutos,
            pedidos_idpedidos: req.body.pedidos_idpedidos
        });
    Produto_PedidoModel.updateById(req.params.produto_pedidoId, produtos_pedidos, (err, data)=>{
        if(err){
            if (err.type == "not_found"){
                res.status(404).send({
                    message: "Produto/Pedido não encontrado."
                })
            }else {
                res.status(500).send({
                    message: "Erro ao atualizar produto_pedido."
                })
            }
        }else{
            res.send(data)
        }
    });
}
}

exports.delete = (req, res) => {
        Produto_PedidoModel.remove(req.params.produto_pedidoId, (err, data)=>{
            if(err){
                if (err.type == "not_found"){
                    res.status(404).send({message: "Produto/Pedido não encontrado."})
                }else{
                    res.status(500).send({message: "Erro ao deletar produto_pedido."})
                }
            }else {
                res.send({message: "Produto deletado com sucesso"});
            }
        })
}
exports.deleteAll = (req, res) => {
    Produto_PedidoModel.removeAll((err, data) =>{
        if(err){
            res.status(500).send({message: "Erro ao deletar produto_pedido."})
        }else{
            res.send({message: "TODOS os produtos/pedidos deletado com sucesso."});
        }
    })
}