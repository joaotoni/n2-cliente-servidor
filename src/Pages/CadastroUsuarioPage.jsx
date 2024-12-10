import { useCadastroUsuario } from "../Context/CadastroUsuarioContext/CadastroUsuarioContext";

export default function CadastroUsuarioPage() {
  const {
    nome,
    setNome,
    email,
    setEmail,
    tipo,
    setTipo,
    senha,
    setSenha,
    confirmaSenha,
    setConfirmaSenha,
    error,
    success,
    handleCadastro,
  } = useCadastroUsuario();

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-6">Cadastro de Usuário</h1>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4">
            {'Erro ao cadastrar usuário. Verifique os dados e tente novamente.'}
          </div>
        )}

        {success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded mb-4">
            Cadastro realizado com sucesso!
          </div>
        )}

        <form onSubmit={handleCadastro} className="space-y-4">
          <div>
            <label htmlFor="nome" className="block text-gray-700 font-medium">
              Nome
            </label>
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 outline-none"
              placeholder="Digite seu nome"
              required
            />
          </div>

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
            <label htmlFor="role" className="block text-gray-700 font-medium">
              Tipo de Usuário
            </label>
            <select
              id="role"
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 outline-none"
            >
              <option value="cliente">Cliente</option>
              <option value="funcionario">Funcionário</option>
            </select>
          </div>
          <div>
            <label htmlFor="senha" className="block text-gray-700 font-medium">
              Senha
            </label>
            <input
              type="password"
              id="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 outline-none"
              placeholder="Digite sua senha"
              required
            />
          </div>

          <div>
            <label htmlFor="confirmaSenha" className="block text-gray-700 font-medium">
              Confirmar Senha
            </label>
            <input
              type="password"
              id="confirmaSenha"
              value={confirmaSenha}
              onChange={(e) => setConfirmaSenha(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 outline-none"
              placeholder="Confirme sua senha"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 w-full rounded-md shadow-md hover:bg-blue-700 transition-all"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
