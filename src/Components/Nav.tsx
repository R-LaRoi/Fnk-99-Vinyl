import "../Styles/nav.css";
import { useState } from 'react';
// import { UserLoginBtn } from "./UserLoginBtn";
// import { UserLogoutBtn } from "./UserLogoutBtn";
import { Link } from "react-router-dom";
import logo from "../dist/assets/logo.png";

interface NavProps {
  menu: {
    url: string;
    text: string;
  }[];
}

export function Nav({ menu }: NavProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`nav-- z-90 ${isMenuOpen ? 'fixed top-0 left-0 w-full h-screen ' : ''}`}>
      <div className="flex items-center justify-between text-[#292929] tracking-wide">
        <div className="flex items-center space-x-4">
          <div>
            <img src={logo} alt="logo" className="logo h-10 w-auto" />
          </div>

          <button className="md:hidden" onClick={toggleMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden absolute top-16 left-0 right-0 bg-[#e2fd00] z-90 w-full h-[calc(100vh-4rem)] overflow-y-auto`}>
          <ul className="flex flex-col items-center py-4 gap-4">
            {menu.map((link, index) => (
              <li key={index} className="py-2">
                <Link
                  to={link.url}
                  className="text-[#292929] text-2xl hover:underline hover:underline-offset-2 hover:decoration-2 transition duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-4">
          {menu.map((link, index) => (
            <li key={index}>
              <Link to={link.url} className="hover:text-pink-700 hover:underline hover:underline-offset-2 hover:decoration-2 transition duration-300">{link.text}</Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center space-x-4">
          {/* <UserLoginBtn text="Login" />
          <UserLogoutBtn /> */}
          <Link to="/cart">
            <button className="text-gray-700 hover:bg-pink-700 hover:text-white font-bold py-2 px-4 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}