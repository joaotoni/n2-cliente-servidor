import { useCallback, useContext } from "react";
import { CartContext } from "../../Context/CartContext/CartContext";
import FormatValue from "../../Utils/FormatValue";
import { toast } from "react-toastify";

export default function Card({ info }) {
  const { addProductToCart } = useContext(CartContext);

  const handleAddProductToCart = useCallback(() => {
    const wasAdded = addProductToCart(info);

    if (wasAdded) {
      toast.success("Produto adicionado no carrinho");
    } else {
      toast.error("Este e-book já foi adicionado ao carrinho.");
    }
  }, [addProductToCart, info]);

  const truncateDescription = (description, maxLength) => {
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + "...";
    }
    return description;
  };

  return (
    <div className="p-4 mx-4 bg-opacity-50 bg-gradient-to-b from-orange-900 to-orange-400 flex flex-col items-center text-center rounded-lg shadow-lg">
      <div className="w-60 mt-4">
        <h2 className="text-black text-lg font-bold">{info.titulo}</h2>
        <p className="text-black text-md">{info.autor}</p>
        <p className="text-black text-md">
          {truncateDescription(info.descricao, 150)}
        </p>
        <p className="text-black text-md">{info.categoria}</p>
        <p className="text-black text-md">
          {FormatValue(info.preco)}
        </p>
        <button
          className="text-white bg-black py-2 px-4 rounded-lg text-lg mt-4 hover:bg-gray-800 transition-colors"
          onClick={handleAddProductToCart}
        >
          Adicionar no carrinho
        </button>
      </div>
    </div>
  );
}
