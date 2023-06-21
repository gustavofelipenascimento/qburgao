const sql = require("./db.js");

const Produto_PedidoModel = function(produtos_pedidos){
    this.observacao = produtos_pedidos.observacao;
    this.produtos_idprodutos = produtos_pedidos.produtos_idprodutos;
    this.pedidos_idpedidos = produtos_pedidos.pedidos_idpedidos;
}

Produto_PedidoModel.create = (produtos_pedidos, result) => {
    sql.query("insert produtos_pedidos set ?", produtos_pedidos, (err, res) =>{
        if (err){
            console.log("Erro: ", err);
            result(err, null);
            return;
        }
        console.log("Produto criado: ", {idprodutos_pedidos: res.insertId, ...produtos_pedidos});
        result(null, {idprodutos_pedidos: res.insertId, ...produtos_pedidos});
    })


};
Produto_PedidoModel.findById = (produto_pedidoId, result) => {
    sql.query("Select * from produtos_pedidos where idprodutos_pedidos = "+produto_pedidoId, (err, res) =>{
        if(err){
            console.log("erro: ", err);
            result(null, err);
            return;
        }
        if(res.length){
            console.log("Produto/Pedido Encontrado", res[0]);
            result(null,res[0]);
        }else {
            result({type: "not_found"}, null);
            console.log("Produto/Pedido não encontrado");
        }
    })
};
Produto_PedidoModel.getAll = result => {
    sql.query("SELECT * FROM produtos_pedidos", (err, res) => {
        if (err) {
            console.log("erro: ", err);
            result(null, err);
            return;
        }

        console.log("produtos_pedidos: ", res);
        result(null, res);
    })
};
Produto_PedidoModel.updateById = (produto_pedidoId, produtos_pedidos,result) => {
    sql.query("UPDATE produtos_pedidos SET observacao = ?, produtos_idprodutos =?, pedidos_idpedidos = ? WHERE idprodutos_pedidos = ?",
    [produtos_pedidos.observacao,produtos_pedidos.produtos_idprodutos,produtos_pedidos.pedidos_idpedidos , produto_pedidoId], (err, res) =>{
        if (err){
            console.log("erro: ", err);
            result(null, err);
        }else if(res.affectedRows == 0){
            result({type: "not_found"}, null);
        }else {
            console.log("Produto/Pedido atualizado: ",{idprodutos_pedidos: produto_pedidoId, ...produtos_pedidos});
            result(null, {idprodutos_pedidos: produto_pedidoId, ...produtos_pedidos});
        }
            
        
    })
};
Produto_PedidoModel.remove = (produto_pedidoId, result) => {
    sql.query("DELETE FROM produtos_pedidos WHERE idprodutos_pedidos = ?", produto_pedidoId, (err, res) => {
        if(err){
            console.log("erro: ", err);
            result(err, null);
        }else if (res.affectedRows == 0){
            result ({ type: "not_found"}, null);
        }else {
            result(null, res);
        }
    });
};

Produto_PedidoModel.removeAll = (result) => {
    sql.query("DELETE FROM produtos_pedidos", produto_pedidoId, (err, res) => {
        if(err){
            console.log("erro: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

module.exports = Produto_PedidoModel;