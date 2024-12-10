import { useState } from "react";
import { Link } from "react-router-dom";
import CartIcon from "/Assets/Icons/cart-icon.svg";
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="flex items-center justify-between p-4 bg-gradient-to-b from-orange-900 to-orange-500 mb-2">
        <div className="">
          <button
            onClick={toggleMenu}
            className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
            type="button"
          >
            <MenuIcon />
          </button>

          {isOpen && (
            <ul
              role="menu"
              className="absolute z-10 min-w-[180px] overflow-auto rounded-lg border border-slate-200 bg-white p-1.5 shadow-lg focus:outline-none"
            >
              <Link to="/">
              <li
                role="menuitem"
                className="cursor-pointer text-slate-800 flex w-full text-sm items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
              >
                  <p className="text-black text-[14px] font-bold">Home</p>
              </li>
                </Link>
              <Link to="/cadastro-ebook">
              <li
                role="menuitem"
                className="cursor-pointer text-slate-800 flex w-full text-sm items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
              >
                  <p className="text-black text-[14px] font-bold">Cadastro de E-book</p>
              </li>
                </Link>
              <Link to="/carrinho">
              <li
                role="menuitem"
                className="cursor-pointer text-slate-800 flex w-full text-sm items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
              >
                  <p className="text-black text-[14px] font-bold">Carrinho</p>
              </li>
                </Link>
              <Link to="/venda-ebook">
                <li
                  role="menuitem"
                  className="cursor-pointer text-slate-800 flex w-full text-sm items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
                >
                  <p className="text-black text-[14px] font-bold">E-books</p>
                </li>
              </Link>
              <Link to="/login">
                <li
                  role="menuitem"
                  className="cursor-pointer text-slate-800 flex w-full text-sm items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
                >
                  <p className="text-black text-[14px] font-bold">Login</p>
                </li>
              </Link>
              <Link to="/cadastro-usuario">
                <li
                  role="menuitem"
                  className="cursor-pointer text-slate-800 flex w-full text-sm items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
                >
                  <p className="text-black text-[14px] font-bold">Registrar</p>
                </li>
              </Link>
              <Link to="/historico-compras">
                <li
                  role="menuitem"
                  className="cursor-pointer text-slate-800 flex w-full text-sm items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
                >
                  <p className="text-black text-[14px] font-bold">Histórico de compras</p>
                </li>
              </Link>
            </ul>
          )}
        </div>

        <div className="items-center">
          <Link to="/">
            <h1 className="text-white text-[32px] font-bold">E-BOOK NEWS</h1>
          </Link>
        </div>

        <div>
          <Link to="/carrinho" aria-label="Cart">
            <img src={CartIcon} alt="Cart Icon" width={50} />
          </Link>
        </div>
      </nav>
    </header>
  );
}
