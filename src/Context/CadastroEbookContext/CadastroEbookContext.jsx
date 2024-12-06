import { createContext, useContext, useState } from "react";
import EbookService from "../../Service/EbookService";


const CadastroEbookContext = createContext();

export default function CadastroEbookProvider({ children }) {
  const [loading, setLoading] = useState(false);

  const cadastrarEbook = async (ebookData) => {
    setLoading(true);
    try {
      const response = await EbookService.cadastrarEbook(ebookData);
      console.log("E-book cadastrado com sucesso:", response);
      alert("E-book cadastrado com sucesso!");
    } catch (error) {
      console.error("Erro ao cadastrar e-book:", error.message);
      alert("Erro ao cadastrar e-book. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <CadastroEbookContext.Provider value={{ cadastrarEbook, loading }}>
      {children}
    </CadastroEbookContext.Provider>
  );
};

export function useCadastroEbook() {
  return useContext(CadastroEbookContext);
}
