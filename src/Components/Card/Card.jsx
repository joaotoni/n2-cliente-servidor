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

  return (
    <div className="p-4 mx-4 bg-opacity-50 bg-gradient-to-b from-orange-900 to-orange-400 flex flex-col items-center text-center rounded-lg shadow-lg">
      <div>
        <img
          className="rounded-lg object-cover w-full h-48"
          src={`/Assets/Imgs/${info.image}`}
          alt={info.name}
        />
      </div>
      <div className="w-60 mt-4">
        <h2 className="text-black text-lg font-bold">{info.name}</h2>
        <p className="text-black text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ligula massa, consequat ut vulputate id, scelerisque nec nisl. In sed consectetur massa, nec malesuada mi. Etiam finibus magna in volutpat pulvinar. Nullam quam mauris, rutrum a scelerisque a, consequat non leo. Proin id molestie diam...</p>
        <p className="text-black text-md">{FormatValue(info.price)}</p>
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
