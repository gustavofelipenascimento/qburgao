const sql = require("./db.js");

const Usuario = function (usuarios){
    this.email = usuarios.email;
    this.senha = usuarios.senha;
    this.tipo = usuarios.tipo;
}

Usuario.create = (usuarios, result) => {
    sql.query("INSERT INTO usuarios SET ?", usuarios, (err, res) => {
        if(err){
            result(err,null);
        }else {
            result(null, "Usuário criado com sucesso")
        }
    })
}

Usuario.findByEmail = (emailUsuario, result) => {
    sql.query("SELECT * FROM usuarios WHERE email = ?", emailUsuario, (err,res)=> {
        if(err){
            result(err, null);
        } else if (res.length){
            result(null, res[0])
        } else{
            result({type: "not_found"}, null);
        }
    })
}

Usuario.findByid = (idUsuario, result) => {
    sql.query("SELECT * FROM usuarios WHERE idusuario = ?", emailUsuario, (err,res)=> {
        if(err){
            result(err, null);
        } else if (res.length){
            result(null, res[0])
        } else{
            result({type: "not_found"}, null);
        }
    })
}


Usuario.updateById = (idUsuario, usuarios, result) => {
    sql.query("UPDATE usuarios SET email = ?, senha = ?, tipo = ? WHERE idusuarios = ?",
    [usuarios.email, usuarios.senha, usuarios.tipo, idUsuario], (err,res) => {
        if (err){
            console.log("erro: ", err);
            result(null, err);
        } else if (res.affectedRows == 0){
            result ({ type: "not_found"}, null);
        } else {
            console.log("Usuário atualizado: ", {idUsuario: idUsuario, ...usuarios});
            result(null, {idUsuario: idUsuario, ...usuarios});
        }
    });
}


Usuario.findById = (idusuario, result) => {
    sql.query("Select * from usuarios where idusuarios = "+idusuario, (err, res) =>{
        if(err){
            console.log("erro: ", err);
            result(null, err);
            return;
        }
        if(res.length){
            console.log("Usuario Encontrado", res[0]);
            result(null,res[0]);
        }else {
            result({type: "not_found"}, null);
            console.log("Usuario não encontrado");
        }
    })
};
Usuario.getAll = result => {
    sql.query("SELECT * FROM usuarios", (err, res) => {
        if (err) {
            console.log("erro: ", err);
            result(null, err);
            return;
        }

        console.log("usuarios: ", res);
        result(null, res);
    })
};

Usuario.remove = (idUsuario, result) => {
    sql.query("DELETE FROM usuarios WHERE idusuarios = ?", idUsuario, (err, res) =>{
    if (err){
        console.log("erro: ", err);
        result(err, null);
    } else if (res.affectedRows == 0){
        result({ type: "not_found"}, null);
    } else {
        result(null, res);
    }
});
};

module.exports = Usuario;