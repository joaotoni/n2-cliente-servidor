import { createContext, useContext, useState } from "react";
import ClienteService from "../../Service/ClienteService";

const CadastroUsuarioContext = createContext();

export function CadastroUsuarioProvider({ children }) {
  const [cliente, setCliente] = useState(null);
  const [isLogged, setIsLogged] = useState(false);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const logarUsuario = (clienteData) => {
    setCliente(clienteData);
    setIsLogged(true);
  };

  const deslogarUsuario = () => {
    setCliente(null);
    setIsLogged(false);
  };

  const handleCadastro = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
  
    if (!nome || !email || !senha || !confirmaSenha) {
      setError("Todos os campos são obrigatórios.");
      return;
    }
  
    if (senha !== confirmaSenha) {
      setError("As senhas não coincidem.");
      return;
    }
  
    try {
      const clienteData = await ClienteService.cadastrarCliente({
        id: null, // Enviar null ou o valor padrão esperado
        nome,
        email,
        senha,
      });
  
      setSuccess(true);
      setNome("");
      setEmail("");
      setSenha("");
      setConfirmaSenha("");
      logarUsuario(clienteData);
    } catch (err) {
      setError(err.message || "Erro desconhecido ao realizar o cadastro.");
    }
  };
  

  return (
    <CadastroUsuarioContext.Provider
      value={{
        cliente,
        isLogged,
        logarUsuario,
        deslogarUsuario,
        nome,
        setNome,
        email,
        setEmail,
        senha,
        setSenha,
        confirmaSenha,
        setConfirmaSenha,
        error,
        success,
        handleCadastro,
      }}
    >
      {children}
    </CadastroUsuarioContext.Provider>
  );
}

export function useCadastroUsuario() {
  return useContext(CadastroUsuarioContext);
}
