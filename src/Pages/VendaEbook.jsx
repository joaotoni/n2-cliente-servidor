import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Card from "../Components/Card/Card";
import EbookService from "../Service/EbookService";

export default function VendaEbook() {
  const [ebooks, setEbooks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEbooks = async () => {
      try {
        const ebookList = await EbookService.listarEbooks();
        setEbooks(ebookList);
      } catch (err) {
        setError(err.message || "Erro ao carregar os e-books.");
      }
    };

    fetchEbooks();
  }, []);

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

      <section className="flex py-6">
        <div className="flex overflow-x-auto scrollbar scrollbar-track-[#1d1d1d] py-6">
          {ebooks.length > 0 ? (
            ebooks.map((card) => <Card info={card} key={card.id} />)
          ) : (
            <p className="text-center text-gray-500">Carregando e-books...</p>
          )}
        </div>
      </section>

      <ToastContainer theme="dark" />
    </main>
  );
}
