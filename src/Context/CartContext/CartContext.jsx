import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import CompraService from "../../Service/CompraService";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [productsCart, setProductsCart] = useState([]);

  const addProductToCart = (card) => {
    let wasAdded = false;

    setProductsCart((prevCart) => {
      const existingProduct = prevCart.find((product) => product.id === card.id);
      if (existingProduct) {
        return prevCart;
      }
      wasAdded = true;
      return [...prevCart, { ...card, qtd: 1 }];
    });

    return wasAdded;
  };

  const removeProductToCart = (id) => {
    setProductsCart((prevCart) => {
      const productToRemove = prevCart.find((product) => product.id === id);
      if (productToRemove && productToRemove.qtd > 1) {
        return prevCart.map((product) =>
          product.id === id ? { ...product, qtd: product.qtd - 1 } : product
        );
      }
      return prevCart.filter((product) => product.id !== id);
    });
  };

  const clearCart = () => setProductsCart([]);

  const finalizePurchase = async (clienteId) => {
    if (!productsCart.length) {
      toast.error("O carrinho está vazio.");
      return;
    }

    const compraData = {
      clienteId,
      itens: productsCart.map((product) => ({
        produtoId: product.id,
        quantidade: product.qtd,
        preco: product.price,
      })),
      valorTotal: productsCart.reduce((acc, product) => acc + product.price * product.qtd, 0),
    };

    try {
      await CompraService.registrarCompra(compraData);
      toast.success("Compra realizada com sucesso!");
      clearCart(); // Limpa o carrinho após a compra
    } catch (error) {
      console.error("Erro ao finalizar a compra:", error.message);
      toast.error("Erro ao finalizar a compra. Tente novamente.");
    }
  };

  return (
    <CartContext.Provider
      value={{
        productsCart,
        addProductToCart,
        removeProductToCart,
        clearCart,
        finalizePurchase,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
