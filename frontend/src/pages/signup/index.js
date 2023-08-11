import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {Form, Container} from "./style";

import api from "../../services/api";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [tipo, setTipo] = useState("");
    const [error, setError] = useState("");


    const navigate = useNavigate();

    const handleSignUp = async e => {
        e.preventDefault();
        if (!email || !senha){
            setError("Preencha todos os dados para se cadastrar");
        } else {
            try {
                await api.post("/signup", {email, senha, tipo});
                navigate("/");
            } catch (err){
                console.log(err);
                setError("Ocirreu um erro ao registrar a sua conta");
            }
        }
    }

    return (
        <Container>
            <form>
                <input type="email"
                placeholder="Endereço de email"
                onChange={e => setEmail(e.target.value)}>
                </input>
                <input type="password"
                placeholder="Senha"
                onChange={e => setSenha(e.target.value)}>
                </input>
                <input type="number"
                placeholder="Tipo de Acesso"
                onChange={e => setTipo(e.target.value)}>
                </input>

                <button type="submit">Cadastre o usuario</button>
                <link to="/">Fazer Login</link>
            </form>
        </Container>
    )
}

export default SignUp;
