import { Routes as WrapperRoutes, Route, BrowserRouter } from "react-router-dom";
import Header from "./Components/Header/Header";
import CartProvider from "./Context/CartContext/CartContext";
import Cart from "./Pages/Carrinho";
import Done from "./Pages/Finalizacao";
import VendaEbook from "./Pages/VendaEbook";
import CadastroEbook from "./Pages/CadastroEbook";
import CadastroEbookProvider from "./Context/CadastroEbookContext/CadastroEbookContext";
import Home from "./Pages/Home";
import LoginPage from "./Pages/LoginPage";
import { LoginProvider } from "./Context/LoginContext/LoginContext";
import CadastroUsuarioPage from "./Pages/CadastroUsuarioPage";
import { CadastroUsuarioProvider } from "./Context/CadastroUsuarioContext/CadastroUsuarioContext";

export default function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <LoginProvider>
        <CartProvider>
          <CadastroUsuarioProvider>
            <CadastroEbookProvider>
              <WrapperRoutes>
                <Route path="/" element={<Home />} />
                <Route path="/venda-ebook" element={<VendaEbook />} />
                <Route path="/cadastro-ebook" element={<CadastroEbook />} />
                <Route path="/carrinho" element={<Cart />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/done" element={<Done />} />
                <Route path="/cadastro-usuario" element={<CadastroUsuarioPage />} />
              </WrapperRoutes>
            </CadastroEbookProvider>
          </CadastroUsuarioProvider>
        </CartProvider>
      </LoginProvider>
    </BrowserRouter>
  );
}
