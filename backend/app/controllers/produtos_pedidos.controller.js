const produtos_pedidosModel = require("../models/produtos_pedidos.model.js");

exports.create = (req, res) => {
    if (!req.body.nome || !req.body.valor){
        res.status(400).send({
            message: "Conteúdo do corpo da requisição vazia."
        });
    } else {
        const produtos_pedidos = new produtos_pedidosModel({
            nome: req.body.nome,
            valor: req.body.valor
        });

        produtos_pedidosModel.create(produtos_pedidos, (err, data) => {
            if (err){
                res.status(500).send({
                    message: err.message || "Ocorreu um erro ao inserir os dados"
                });
            } else {
                res.send(data);
            }
        });
    }
}

exports.findAll = (req, res) => {
    produtos_pedidosModel.getAll((err, data) =>{
        if (err) {
            res.status(500).send({
                message: err.message || "Ocorreu erro desconhecido!."
            });
        } else {
            res.send(data);
        }
    });
}
    exports.findById = (req, res) => {
        produtos_pedidosModel.findById(req.params.produtos_pedidosId, (err,data) => {
            if (err) {
                if(err.type == "not_found"){
                    res.status(404).send({
                        message: "produtos_pedidos não encontrado! . ID: " + req.params.produtos_pedidosId
                    });
                }else{
                    res.status(500).send({
                        message: "Erro ao retornar o produtos_pedidos com ID: "+req.params.produtos_pedidosId
                    })
                }
        }else {
            res.send(data);
        }
    });
};
    exports.update = (req, res) => {
        if(!req.body.nome || !req.body.valor){
            res.status(400).send({
                message: "Conteúdo do corpo da requisição vazia."
            });
        }else { 
            const produtos_pedidos = new produtos_pedidosModel({
                nome: req.body.nome,
                valor: req.body.valor
            });
            produtos_pedidosModel.updateById(req.params.produtos_pedidosId, produtos_pedidos, (err, data) =>{
            if (err){
                if (err.type == "not found") {
                    res.status(404).send({
                        message: "produtos_pedidos não encontrado."
                    })
                } else {
                    res.status(500).send({
                        message: "Erro ao atualizar produtos_pedidos."
                    })
                } 
            } else {
                    res.send(data);
            }
        });
     }
        }
          
    exports.delete = (req, res) => {
        produtos_pedidosModel.remove(req.params.produtos_pedidosId, (err, data) => {
            if (err){
                if(err.type == "not_found"){
                    res.status(404).send({message:"produtos_pedidos não encontrado."})
                } else {
                    res.status(500).send({message: "Erro ao deletar produtos_pedidos."})
                }
            } else {
                res.send({message: "produtos_pedidos deletado com sucesso"});
            }
        })
     }
    exports.deleteAll = (req, res) => {
        produtos_pedidosModel.removeAll((err, data) => { 
            if (err){
                res.status(500).send({message: "Erro ao deletar produtos_pedidos."})
            } else {
                res.send({message: "TODOS os produtos_pedidos deletado com sucesso."});
            }
        })
     }



