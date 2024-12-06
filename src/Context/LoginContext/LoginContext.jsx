import { createContext, useContext, useState } from "react";
import ClienteService from "../../Service/ClienteService";

const LoginContext = createContext();

export function LoginProvider({ children }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [cliente, setCliente] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false); 

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const clienteData = await ClienteService.autenticarCliente({ email, senha: password });
      
      setCliente(clienteData);
      setIsAuthenticated(true); 
    } catch (err) {
      setError(err.message || "Erro ao realizar login");
    }
  };

  const handleLogout = () => {
    setCliente(null);
    setIsAuthenticated(false);
    setEmail("");
    setPassword("");
  };

  return (
    <LoginContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        error,
        handleLogin,
        cliente, 
        isAuthenticated, 
        handleLogout,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}

export function useLogin() {
  return useContext(LoginContext);
}
