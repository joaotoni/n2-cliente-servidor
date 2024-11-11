import { createContext, useContext, useState } from "react";

const CadastroEbookContext = createContext();

export default function CadastroEbookProvider({ children }) {
    const [loading, setLoading] = useState(false);

    const cadastrarEbook = async (ebookData) => {
        // setLoading(true);
        // try {
        //     const response = await fetch("/api/ebooks", {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify(ebookData),
        //     });
    
        //     if (!response.ok) {
        //         throw new Error("Erro ao cadastrar e-book");
        //     }
    
        //     const data = await response.json();
        //     console.log("E-book cadastrado com sucesso:", data);
        // } catch (error) {
        //     console.error("Erro:", error.message);
        // } finally {
        //     setLoading(false);
        // }
    };

    return (
        <CadastroEbookContext.Provider value={{ cadastrarEbook, loading }}>
            {children}
        </CadastroEbookContext.Provider>
    );
}

// Hook personalizado para usar o contexto
export const useCadastroEbook = () => {
    return useContext(CadastroEbookContext);
};
