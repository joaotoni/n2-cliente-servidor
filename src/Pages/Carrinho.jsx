import { useContext, useEffect } from "react";
import { CartContext } from "../Context/CartContext/CartContext";
import { useLogin } from "../Context/LoginContext/LoginContext";
import { Link, useNavigate } from "react-router-dom";
import FormatValue from "../Utils/FormatValue";
import { toast } from "react-toastify";

export default function Cart() {
  const { productsCart, removeProductToCart, clearCart, finalizePurchase } = useContext(CartContext);
  const { cliente, isAuthenticated } = useLogin();
  const navigate = useNavigate();
  const totalPrice = productsCart.reduce((acc, current) => acc + (current.preco || 0) * (current.qtd || 1), 0);

  useEffect(() => {
    if (!isAuthenticated) {
      alert("Você precisa estar logado para acessar esta página.");
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  const handleFinalizePurchase = async () => {
    await finalizePurchase(cliente);
    toast.success("Compra realizada com sucesso!");
    navigate("/done")
  };

  if (!productsCart.length) {
    return (
      <section className="flex flex-col text-center justify-center items-center pt-10">
        <div className="bg-gradient-to-b from-orange-900 to-orange-400 p-2 mx-4 rounded-xl sm:p-6">
          <h1 className="text-white font-bold text-[24px] sm:pb-2">Carrinho vazio, vamos às compras?</h1>
          <Link to={"/venda-ebook"}>
            <p className="text-white bg-black p-2 rounded-xl text-[18px] mt-2 mx-[80px]">Voltar aos Produtos</p>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <main>
      <section className="flex flex-col justify-center items-center lg:flex-row-reverse lg:justify-around lg:items-start">
        <div className="flex flex-col mt-6 text-center bg-opacity-50 bg-gradient-to-b from-orange-900 to-orange-400 p-4 rounded-[12px] lg:p-10">
          <span className="text-white font-bold text-[24px] lg:pb-4">Resumo do pedido</span>
          <span className="text-black text-[20px] lg:pb-4">O valor total é de {FormatValue(totalPrice.toFixed(2))}</span>
          <button
            className="text-white bg-black p-2 rounded-xl text-[18px] mt-2 mx-8 lg:mb-4"
            onClick={handleFinalizePurchase}
          >
            Finalizar o pedido
          </button>
          <button
            className="text-white bg-black p-2 rounded-xl text-[18px] mt-2 lg:mb-4"
            onClick={() => clearCart()}
          >
            Limpar o carrinho de compras
          </button>
        </div>
        <div>
          {productsCart.map((card) => (
            <div
              className="p-4 bg-opacity-50 bg-gradient-to-b from-orange-900 to-orange-400 flex flex-wrap items-center justify-center text-center rounded-[12px] w-[300px] mb-6 lg:flex-nowrap lg:w-[350px] lg:justify-around lg:items-stretch"
              key={card.id}
            >
              <div className="w-[250px] lg:w-[500px]">
                <h2 className="text-black text-[16px] font-bold lg:text-[24px] lg:pb-4">{card.titulo}</h2>
                <p className="text-black text-[16px] lg:text-[22px] lg:pb-4">Autor: {card.autor}</p>
                <p className="text-black text-[16px] lg:text-[22px] lg:pb-4">Categoria: {card.categoria}</p>
                <p className="text-black text-[16px] lg:text-[22px] lg:pb-4">Preço: {FormatValue(card.preco || 0)}</p>
                <p className="text-black text-[16px] lg:text-[22px] lg:pb-4">Quantidade: {card.qtd || 1}</p>
                <button
                  className="text-white bg-black p-2 rounded-xl text-[18px] mt-2 lg:text-[22px]"
                  onClick={() => removeProductToCart(card.id)}
                >
                  Remover do carrinho
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
