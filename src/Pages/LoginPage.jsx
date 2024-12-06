import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../Context/LoginContext/LoginContext";

export default function LoginPage() {
  const { email, setEmail, password, setPassword, error, handleLogin, cliente } = useLogin();
  const navigate = useNavigate();

  useEffect(() => {
    if (cliente) {
      navigate("/");
    }
  }, [cliente, navigate]);

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-sm w-full">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4">
            {"Verifique os dados e tente novamente. Ou cadastre-se se ainda não tiver uma conta."}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 outline-none"
              placeholder="Digite seu email"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium">
              Senha
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 outline-none"
              placeholder="Digite sua senha"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 w-full rounded-md shadow-md hover:bg-blue-700 transition-all"
          >
            Entrar
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-4">
          Não tem uma conta?{" "}
          <a href="/cadastro-usuario" className="text-blue-600 hover:underline">
            Cadastre-se
          </a>
        </p>
      </div>
    </div>
  );
}
