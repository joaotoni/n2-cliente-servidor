const EbookService = {
    cadastrarEbook: async (ebookData) => {
        try {
            const response = await fetch('api/ebooks', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(ebookData),
            });

            if (!response.ok) {
                throw new Error("Erro ao cadastrar e-book");
            }

            return await response.json(); 
        } catch (error) {
            console.error("Erro ao cadastrar e-book:", error.message);
            throw error;
        }
    },

    listarEbooks: async () => {
        try {
            const response = await fetch('api/ebooks', {
                method: "GET",
            });

            if (!response.ok) {
                throw new Error("Erro ao listar e-books");
            }

            return await response.json(); 
        } catch (error) {
            console.error("Erro ao listar e-books:", error.message);
            throw error;
        }
    },

    buscarEbookPorId: async (id) => {
        try {
            const response = await fetch(`api/ebooks/${id}`, {
                method: "GET",
            });

            if (!response.ok) {
                throw new Error("Erro ao buscar e-book");
            }

            return await response.json();
        } catch (error) {
            console.error("Erro ao buscar e-book:", error.message);
            throw error;
        }
    },

    deletarEbook: async (id) => {
        try {
            const response = await fetch(`api/ebooks/${id}`, {
                method: "DELETE",
            });

            if (!response.ok) {
                throw new Error("Erro ao deletar e-book");
            }

            return { message: "E-book deletado com sucesso" }; 
        } catch (error) {
            console.error("Erro ao deletar e-book:", error.message);
            throw error;
        }
    },
};

export default EbookService;
