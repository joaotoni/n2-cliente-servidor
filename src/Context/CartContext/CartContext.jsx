import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [productsCart, setProductsCart] = useState([]);

  const addProductToCart = (card) => {
    setProductsCart((prevCart) => {
      const existingProduct = prevCart.find((product) => product.id === card.id);
      if (existingProduct) {
        return prevCart.map((product) =>
          product.id === card.id
            ? { ...product, qtd: product.qtd + 1 }
            : product
        );
      }
      return [...prevCart, { ...card, qtd: 1 }];
    });
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

  return (
    <CartContext.Provider
      value={{ productsCart, addProductToCart, removeProductToCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
