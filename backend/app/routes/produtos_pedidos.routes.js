module.exports = app  =>{
    const produto_pedidoController = require("../controllers/produtos_pedidos.controller");
    //Rota para criar um novo registro produto
    app.post("/produtos_pedidos", produto_pedidoController.create);
    //Buscar todos os registros de Produtos
    app.get("/produtos_pedidos", produto_pedidoController.findAll);
    //Buscar apenas um registro de Produto
    app.get("/produtos_pedidos/:produto_pedidoId", produto_pedidoController.findById);
    //Alterar um registro de produto 
    app.put("/produtos_pedidos/:produto_pedidoId", produto_pedidoController.update);
    //Excluir um registro de produto
    app.delete("/produtos_pedidos/:produto_pedidoId", produto_pedidoController.delete);
    //Excluir todos os registros de produto
    app.delete("/produtos_pedidos", produto_pedidoController.deleteAll);
}