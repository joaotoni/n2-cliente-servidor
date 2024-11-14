import { useState } from "react";
import { useCadastroEbook } from "../Context/CadastroEbookContext/CadastroEbookContext";

export default function CadastroEbook() {
    const { cadastrarEbook, loading } = useCadastroEbook();
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [tema, setTema] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [link, setLink] = useState("");
    const temas = ["Futurista", "Aventura", "Negócios", "Ficção Ciêntifica", "Românce", "Terror"];

    const handleFileUpload = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setLink(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const ebookData = { title, author, description, price, link, tema };
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
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Tema</label>
                    <select
                        value={tema}
                        onChange={(e) => setTema(e.target.value)}
                        className="w-full p-2 border rounded"
                        required
                    >
                        <option value="" disabled>
                            Selecione um tema
                        </option>
                        {temas.map((item, index) => (
                            <option key={index} value={item.toLowerCase()}>
                                {item}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Autor</label>
                    <input
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Descrição</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full p-2 border rounded"
                        rows="4"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Preço (R$)</label>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Arquivo do E-book</label>
                    <input
                        type="file"
                        accept=".pdf,.epub,.mobi"
                        onChange={(e) => handleFileUpload(e)}
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
