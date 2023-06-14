module.exports = app => {
    const produtos_pedidoController = require("../controllers/produtos_pedidos.controller");
    //Rota para criar um novo registro produtos_pedido
    app.post("/produtos_pedidos", produtos_pedidoController.create);
    //Buscar todos os registros de produtos_pedidos
    app.get("/produtos_pedidos", produtos_pedidoController.findAll);
    //Buscar apenas um registro de produtos_pedido
    app.get("/produtos_pedidos/:produtos_pedidoId", produtos_pedidoController.findById);
    //Alterar um registro de produtos_pedido
    app.put("/produtos_pedidos/:produtos_pedidoId", produtos_pedidoController.update);
    //Excluir um regstro de produtos_pedido
    app.delete("/produtos_pedidos/:produtos_pedidoId", produtos_pedidoController.delete);
    //Excluir todos os registros de produtos_pedido
    app.delete("/produtos_pedidos", produtos_pedidoController.deleteAll);
}