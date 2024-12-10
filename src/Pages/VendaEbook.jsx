import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Card from "../Components/Card/Card";
import EbookService from "../Service/EbookService";

export default function VendaEbook() {
  const [ebooks, setEbooks] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasFetched, setHasFetched] = useState(false); 

  useEffect(() => {
    const fetchEbooks = async () => {
      setIsLoading(true);
      try {
        const ebookList = await EbookService.listarEbooks();
        console.log("Ebooks retornados:", ebookList);
        setEbooks(ebookList);
        setError(null); 
      } catch (err) {
        setError(err.message || "Erro ao carregar os e-books.");
      } finally {
        setIsLoading(false);
      }
    };

    if (!hasFetched) { 
      fetchEbooks();
      setHasFetched(true); 
    }
  }, [hasFetched]);

  return (
    <main>
      <h2 className="text-red-800 text-center text-[28px] font-bold">
        Conheça os nossos E-Books!!
      </h2>

      {error && (
        <div className="text-red-500 text-center font-semibold">
          {'API Offline. Tente novamente mais tarde.'}
        </div>
      )}
      {isLoading ? ( 
        <p className="text-center text-gray-500">Carregando e-books...</p>
      ) : (
        <section className="flex flex-wrap justify-center gap-4 py-6">
          {ebooks.length > 0 ? (
            ebooks.map((card) => <Card info={card} key={card.id} />)
          ) : (
            <p className="text-center text-gray-500">Nenhum e-book encontrado.</p>
          )}
        </section>
      )}
      <ToastContainer theme="dark" />
    </main>
  );
}
