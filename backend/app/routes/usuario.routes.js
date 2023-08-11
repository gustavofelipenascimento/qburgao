module.exports = app =>{
    const usuarioController = require("../controllers/usuario.controller");

    app.post("/signup", usuarioController.signUp);
    app.post("/signin", usuarioController.signIn);
    app.get("/usuarios", usuarioController.findAll);
    app.get("/usuarios/:idusuarios", usuarioController.findById);
    app.put("/usuarios/:idusuarios",usuarioController.update);
    app.delete("/usuarios/:idusuarios", usuarioController.delete);
}