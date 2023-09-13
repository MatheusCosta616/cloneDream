import React from 'react';
import './Login.css';
import { Link } from "react-router-dom"

export default function Login() {
  return (
    <div id="formLogin" className="formLogin">
    <h1 id="LoginTitulo">Login</h1>
      <form className="formCom" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="usuario">Nome de usuário:</label><br />
        <input type="text" id="usuario" required /><br />
        <label htmlFor="senha">Senha:</label><br />
        <input type="password" id="senha" required /><br /><br />
        <input type="submit" id="entrar" value="Entrar" />
      </form>
      <p id="pForm">Ainda não possui uma conta? <Link id="links" to="/Cadastro">CLIQUE AQUI</Link></p>
    </div>
  );
}
