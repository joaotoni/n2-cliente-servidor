import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../Context/LoginContext/LoginContext";
import { useCadastroEbook } from "../Context/CadastroEbookContext/CadastroEbookContext";
import { useState } from "react";
import { NumericFormat } from "react-number-format";

export default function CadastroEbook() {
  const navigate = useNavigate();
  const { cliente, isAuthenticated } = useLogin();
  const { cadastrarEbook, loading } = useCadastroEbook();
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [categoria, setCategoria] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");
  const [urlArquivo, setUrlArquivo] = useState("");

  const categorias = [
    "Futurista",
    "Aventura",
    "Negócios",
    "Ficção Científica",
    "Romance",
    "Terror",
  ];

  useEffect(() => {
    if (!isAuthenticated) {
      alert("Você precisa estar logado para acessar esta página.");
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUrlArquivo(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!cliente) {
      alert("Erro: Cliente não identificado.");
      return;
    }

    const ebookData = {
      titulo,
      autor,
      preco: parseFloat(preco),
      categoria,
      descricao,
      urlArquivo,
      clienteId: cliente.id,
    };
    cadastrarEbook(ebookData);
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow-md rounded">
      <h2 className="text-xl font-bold mb-4">Cadastro de E-book</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Título</label>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Categoria</label>
          <select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            className="w-full p-2 border rounded"
            required
          >
            <option value="" disabled>
              Selecione uma categoria
            </option>
            {categorias.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Autor</label>
          <input
            type="text"
            value={autor}
            onChange={(e) => setAutor(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Descrição</label>
          <textarea
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            className="w-full p-2 border rounded"
            rows="4"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Preço (R$)</label>
          <NumericFormat
            value={preco}
            onValueChange={(values) => {
              setPreco(values.floatValue);
            }}
            thousandSeparator="."
            decimalSeparator=","
            prefix="R$ "
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Arquivo do E-book</label>
          <input
            type="file"
            accept=".pdf,.epub,.mobi"
            onChange={handleFileUpload}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? "Cadastrando..." : "Cadastrar E-book"}
        </button>
      </form>
    </div>
  );
}

