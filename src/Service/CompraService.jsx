const CompraService = {
    registrarCompra: async (compraData) => {
        try {
          const response = await fetch('api/compras', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(compraData),
          });
    
          if (!response.ok) {
            throw new Error("Erro ao registrar compra.");
          }
    
          return await response.json();
        } catch (error) {
          console.error("Erro ao registrar compra:", error.message);
          throw error;
        }
      },

    listarCompras: async () => {
        try {
            const response = await fetch('api/compras', {
                method: "GET",
            });

            if (!response.ok) {
                throw new Error("Erro ao listar compras");
            }

            return await response.json();
        } catch (error) {
            console.error("Erro ao listar compras:", error.message);
            throw error;
        }
    },

    buscarCompraPorId: async (id) => {
        try {
            const response = await fetch(`api/compras/${id}`, {
                method: "GET",
            });

            if (!response.ok) {
                throw new Error("Erro ao buscar compra");
            }

            return await response.json();
        } catch (error) {
            console.error("Erro ao buscar compra:", error.message);
            throw error;
        }
    },

    listarComprasPorCliente: async (usuarioId) => {
        try {
            const response = await fetch(`api/compras/usuarios/${usuarioId}`, {
                method: "GET",
            });

            if (!response.ok) {
                throw new Error("Erro ao listar compras do cliente");
            }

            return await response.json();
        } catch (error) {
            console.error("Erro ao listar compras do cliente:", error.message);
            throw error;
        }
    },

    deletarCompra: async (id) => {
        try {
            const response = await fetch(`api/compras/${id}`, {
                method: "DELETE",
            });

            if (!response.ok) {
                throw new Error("Erro ao deletar compra");
            }

            return { message: "Compra deletada com sucesso" };
        } catch (error) {
            console.error("Erro ao deletar compra:", error.message);
            throw error;
        }
    },
};

export default CompraService;
