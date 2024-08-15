import "../Styles/nav.css";
import { UserLoginBtn } from "./UserLoginBtn";
import { UserLogoutBtn } from "./UserLogoutBtn";

import { Link } from "react-router-dom";
import logo from "../dist/assets/logo.png";
interface NavProps {
  menu: {
    url: string;
    text: string;
  }[];
}

export function Nav({ menu }: NavProps) {

  return (
    <nav className="nav-- px-4 py-2 ">
      <div className="flex items-center justify-between text-gray-900 tracking-wide">

        <div className="flex items-center space-x-4">
          <div>
            <img src={logo} alt="logo" className="logo h-14 w-auto" />
          </div>
          <ul className="hidden md:flex space-x-4">
            {menu.map((link, index) => (
              <li key={index}>
                <Link to={link.url} className="hover:text-pink-700 hover:underline hover:underline-offset-2 hover:decoration-2 transition duration-300">{link.text}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center space-x-4">
          <UserLoginBtn text="Login" />
          <UserLogoutBtn />
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