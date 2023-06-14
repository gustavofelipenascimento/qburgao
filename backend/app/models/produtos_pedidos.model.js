const sql = require("./db.js");
//Construtor
const pedidos_produtosModel = function (pedidos_produtos) {
    this.observacao = pedidos_produtos.observacao;
    this.idpedidos_produtos = pedidos_produtos.idpedidos_produtos;
    this.produtos_idprodutos = pedidos_produtos.produtos_idprodutos;
    this.pedidos_idpedidos = this.produtos_idprodutos.pedidos_idpedidos;
}
//Cria novo pedidos_produtos no banco
pedidos_produtosModel.create = (pedidos_produtos, result) => {
    sql.query("insert into pedidos_produtos set ?", pedidos_produtos, (err, res) => {
        if (err){
            console.log("Erro: ", err);
            result(err, null);
            return;
        }

        console.log("pedidos_produtos criado: ", {idpedidos_produtos: res.insertId, ...pedidos_produtos});
        result(null, {idpedidos_produtos: res.insertId, ...pedidos_produtos});
    })
};


//Seleciona pedidos_produtos por ID
pedidos_produtosModel.findById = (pedidos_produtosId, result) => {
    
    sql.query("SELECT * FROM pedidos_produtos where idpedidos_produtos = "+pedidos_produtosId, (err,res) => {
        if (err) {
            console.log("Erro: ", err);
            result(null, err);
            return;
    }
    if (res.length){
        console.log("pedidos_produtos Encontrado", res[0]);
        result(null, res[0]);
    }else {
        result({type: "not_found"},null);
        console.log("pedidos_produtos não encontrado");
    }
 })
};
//Seleciona todos os pedidos_produtos
pedidos_produtosModel.getAll = result => {
    sql.query("SELECT * FROM pedidos_produtos", (err, res) => {
        if (err) {
            console.log("Erro:",err);
            result(null, err);
            return;
        }
        console.log("pedidos_produtos:", res);
        result(null, res);
    })

};
//Atualizar pedidos_produtos por id
pedidos_produtosModel.updateById = (pedidos_produtosId, pedidos_produtos, result) => {
    sql.query("UPDATE pedidos_produtos SET nome = ?, valor = ? WHERE idpedidos_produtos = ?",
        [pedidos_produtos.nome, pedidos_produtos.valor, pedidos_produtosId], (err, res) => {
            if(err){
                console.log("erro: ",err);
                result(null, err);
            }else if (res.affectdRows == 0){
                result({ type: "not_found"}, null);
            }else {
                console.log("pedidos_produtos Atualizado", {idpedidos_produtos: pedidos_produtosId, ...pedidos_produtos});
                result(null, {idpedidos_produtos: pedidos_produtosId, ...pedidos_produtos});
    }
        });

 };
//Remover pedidos_produtos por id
pedidos_produtosModel.remove = (pedidos_produtosId, result) => {
    sql.query("DELETE FROM pedidos_produtos WHERE idpedidos_produtos = ?", pedidos_produtosId, (err, res) =>{
        if (err) {
            console.log("erro: ", err);
            result(err, null);
        } else if (res.affectedRows == 0){
            result({ tyoe: "not_found"},null);
        } else { 
            result(null, res);
        }
    });
 };
//Remover todos os pedidos_produtos
pedidos_produtosModel.removeAll = (result) => {
    sql.query("DELETE FROM pedidos_produtos", pedidos_produtosId, (err, res) =>{
        if (err) {
            console.log("erro: ", err);
            result(err, null);
        } else { 
            result(null, res);
        }
    });
 };

module.exports = pedidos_produtosModel;