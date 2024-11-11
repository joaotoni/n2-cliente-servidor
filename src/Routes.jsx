import { Routes as WrapperRoutes, Route, BrowserRouter } from "react-router-dom";
import Header from "./Components/Header/Header";
import CartProvider from "./Context/CartContext/CartContext";
import Cart from "./Pages/Carrinho";
import Done from "./Pages/Finalizacao";
import Home from "./Pages/VendaEbook";
import CadastroEbook from "./Pages/CadastroEbook";
import CadastroEbookProvider from "./Context/CadastroEbookContext/CadastroEbookContext";

export default function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <CartProvider>
        <CadastroEbookProvider>
        <WrapperRoutes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro-ebook" element={<CadastroEbook />} />
          <Route path="/carrinho" element={<Cart />} />
          <Route path="/done" element={<Done />} />
        </WrapperRoutes>
        </CadastroEbookProvider>
      </CartProvider>
    </BrowserRouter>
  );
}
