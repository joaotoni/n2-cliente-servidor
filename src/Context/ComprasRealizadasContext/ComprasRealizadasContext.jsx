import { createContext, useContext, useState, useCallback } from "react";
import { toast } from "react-toastify";
import CompraService from "../../Service/CompraService";

const ComprasRealizadasContext = createContext();

export default function ComprasRealizadasContextProvider({ children }) {
  const [compras, setCompras] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchComprasByCliente = useCallback(async (usuarioId) => {
    setIsLoading(true);
    try {
      const comprasList = await CompraService.listarComprasPorCliente(usuarioId);
  
      const comprasFiltradas = comprasList.filter((compra) => compra.usuario.id === usuarioId);
  
      setCompras(comprasFiltradas);
      setError(null);
    } catch (err) {
      setError("Erro ao listar compras do cliente.");
      toast.error("Erro ao listar compras do cliente.");
    } finally {
      setIsLoading(false);
    }
  }, []);
  

  return (
    <ComprasRealizadasContext.Provider
      value={{
        compras,
        isLoading,
        error,
        fetchComprasByCliente,
      }}
    >
      {children}
    </ComprasRealizadasContext.Provider>
  );
}

export function useComprasRealizadas() {
  return useContext(ComprasRealizadasContext);
}
