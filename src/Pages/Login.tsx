import { useState } from "react";
import { api } from "../services/api";
import Bear from "/bear.svg";
import Details from "/details.svg";

export function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPass, setErrorPass] = useState("");

  const handleLogin = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    let valid = true;

    if (email.trim() === '') {
      setErrorEmail("Digite seu e-mail");
      valid = false;
    } else {
      setErrorEmail("");
    }

    if (senha.trim() === '') {
      setErrorPass("Digite sua senha");
      valid = false;
    } else {
      setErrorPass("");
    }

    if (!valid) {
      return;
    }

    try {
      const response = await api.post("/login", { email, senha });
      console.log(response.data);
      // Redirecione o usuário para a página inicial ou painel
    } catch (error) {
      setErrorMessage("Email ou senha incorretos");
    }
  };

  return (
    <div
      style={{ background: "var(--gray-25)" }}
      className="d-flex justify-content-end"
    >
      <img
        src={Details}
        alt="Details"
        className="position-absolute start-0 w-75"
      />
      <img
        src={Bear}
        alt="Urso"
        className="position-absolute bottom-0 start-0 h-75"
      />
      <span className="position-absolute start-0">Mais que venda, CONCEITO</span>
      <form
        onSubmit={handleLogin}
        className="d-flex flex-column w-25 px-5 vh-100 justify-content-center"
        style={{ background: "var(--gray-75)" }}
      >
        <h1 className="text-white fw-bold m-0">Bem-vindo!</h1>
        <small style={{ color: "var(--gray-25)" }} className="mb-4">
          Entre para continuar
        </small>
        <div data-mdb-input-init className="form-outline mb-4">
          <label className="form-label text-white" htmlFor="form2Example1">
            E-mail
          </label>
          <input
            type="email"
            id="form2Example1"
            className={`form-control ${
              (errorMessage || errorEmail) && "is-invalid"
            } bg-transparent border-top-0 border-end-0 border-start-0 rounded-0`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errorEmail && (
            <small className="text-danger">{errorEmail}</small>
          )}
        </div>

        <div data-mdb-input-init className="form-outline mb-4">
          <label className="form-label text-white" htmlFor="form2Example2">
            Senha
          </label>
          <input
            type="password"
            id="form2Example2"
            className={`form-control ${
              (errorMessage || errorPass) && "is-invalid"
            } bg-transparent border-top-0 border-end-0 border-start-0 rounded-0`}
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          {errorPass && (
            <small className="text-danger">{errorPass}</small>
          )}
        </div>

        {errorMessage && (
          <small className="text-danger w-100 justify-content-center d-flex mb-3">{errorMessage}</small>
        )}

        <div className="row mb-4">
          <button
            type="submit"
            className="btn btn-light btn-block fw-bold mb-2"
          >
            Entrar
          </button>
          <div className="col d-flex justify-content-center">
            <a
              href="#!"
              className="text-decoration-none mb-4"
              style={{ color: "var(--gray-25)" }}
            >
              Esqueceu a senha?
            </a>
          </div>
        <a
        href="#"
          className="btn btn-block fw-bold"
          style={{ background: "var(--gray-25)" }}
        >
          Cadastrar
        </a>
        </div>
      </form>
    </div>
  );
}
