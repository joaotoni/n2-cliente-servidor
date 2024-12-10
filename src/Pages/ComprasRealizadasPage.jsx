import { useEffect } from "react";
import { useLogin } from "../Context/LoginContext/LoginContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useComprasRealizadas } from "../Context/ComprasRealizadasContext/ComprasRealizadasContext";

export default function ComprasRealizadasPage() {
  const { compras, isLoading, error, fetchComprasByCliente } = useComprasRealizadas();
  const { cliente } = useLogin();

  useEffect(() => {
    if (cliente?.id) {
      fetchComprasByCliente(cliente.id);
    }
  }, [cliente, fetchComprasByCliente]);

  return (
    <main className="p-4">
      <h2 className="text-center text-[28px] font-bold text-black">
        Suas Compras Realizadas
      </h2>

      <ToastContainer theme="dark" />

      {isLoading ? (
        <p className="text-center text-gray-500">Carregando suas compras realizadas...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : compras.length === 0 ? (
        <p className="text-center text-gray-500">Você ainda não realizou nenhuma compra.</p>
      ) : (
        <section className="flex flex-col gap-4 py-6">
          {compras.map((compra) => (
            <div
              key={compra.id}
              className="p-4 border border-gray-300 rounded-lg shadow-sm"
            >
              <h3 className="text-lg font-semibold">Compra #{compra.id}</h3>
              <p>
                <strong>Data da Compra:</strong>{" "}
                {new Date(compra.dataCompra).toLocaleDateString()}
              </p>
              <p>
                <strong>Total:</strong> R$ {compra.total.toFixed(2)}
              </p>
              <div>
                <h4 className="font-medium mt-4">E-books Comprados:</h4>
                <ul className="list-disc list-inside">
                  {compra.ebooks.map((ebook) => (
                    <li key={ebook.id}>
                      <strong>Título:</strong> {ebook.titulo},{" "}
                      <strong>Autor:</strong> {ebook.autor},{" "}
                      <strong>Categoria:</strong> {ebook.categoria},{" "}
                      <strong>Preço:</strong> R$ {ebook.preco.toFixed(2)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>
      )}
    </main>
  );
}
