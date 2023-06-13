module.exports = app => {
    const pedidosController = require("../controllers/pedidos.controller");
    //Rota para criar um novo registro pedidos
    app.post("/pedidos", pedidosController.create);
    //Buscar todos os registros de pedidoss
    app.get("/pedidos", pedidosController.findAll);
    //Buscar apenas um registro de pedidos
    app.get("/pedidos/:pedidosId", pedidosController.findById);
    //Alterar um registro de pedidos
    app.put("/pedidos/:pedidosId", pedidosController.update);
    //Excluir um regstro de pedidos
    app.delete("/pedidos/:pedidosId", pedidosController.delete);
    //Excluir todos os registros de pedidos
    app.delete("/pedidos", pedidosController.deleteAll);
}
