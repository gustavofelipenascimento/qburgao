const sql = require("./db.js");
const pedidoModel = function (pedido) {
    this.hora = pedido.hora;
    this.status = pedido.status;
}
pedidoModel.create = (pedido, result) => {
    sql.query("insert into pedidos set ?", pedido, (err, res) => {
        if (err){
            console.log("Erro: ", err);
            result(err, null);
            return;
        }

        console.log("pedido criado: ", {idpedidos: res.insertId, ...pedido});
        result(null, {idpedidos: res.insertId, ...pedido});
    })
};
pedidoModel.findById = (pedidosId, result) => {
    
    sql.query("SELECT * FROM pedidos where idpedidos = "+pedidosId, (err,res) => {
        if (err) {
            console.log("Erro: ", err);
            result(null, err);
            return;
    }
    if (res.length){
        console.log("pedido Encontrado", res[0]);
        result(null, res[0]);
    }else {
        result({type: "not_found"},null);
        console.log("pedido não encontrado");
    }
 })
};
pedidoModel.getAll = result => {
    sql.query("SELECT * FROM pedidos", (err, res) => {
        if (err) {
            console.log("Erro:",err);
            result(null, err);
            return;
        }
        console.log("pedido:", res);
        result(null, res);
    })

};
pedidoModel.updateById = (pedidosId, pedido, result) => {
    sql.query("UPDATE pedidos SET status = ?, hora = ? WHERE idpedidos = ?",
        [pedido.status, pedido.hora, pedidosId], (err, res) => {
            if(err){
                console.log("erro: ",err);
                result(null, err);
            }else if (res.affectdRows == 0){
                result({ type: "not_found"}, null);
            }else {
                console.log("pedido Atualizado", {idpedidos: pedidosId, ...pedido});
                result(null, {idpedidos: pedidosId, ...pedido});
    }
        });

 };

pedidoModel.remove = (pedidosId, result) => {
    sql.query("DELETE FROM pedidos WHERE idpedidos = ?", pedidosId, (err, res) =>{
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
pedidoModel.removeAll = (result) => {
    sql.query("DELETE FROM pedidos", pedidosId, (err, res) =>{
        if (err) {
            console.log("erro: ", err);
            result(err, null);
        } else { 
            result(null, res);
        }
    });
 };

module.exports = pedidoModel;