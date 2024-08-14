import "../Styles/nav.css";
import { UserLoginBtn } from "./UserLoginBtn";
import { UserLogoutBtn } from "./UserLogoutBtn";

import { Link } from "react-router-dom";


interface NavProps {
  menu: {
    url: string;
    text: string;
  }[];
}

export function Nav({ menu }: NavProps) {
  
  return (
    <nav className="nav-- ">
      <ul className="flex items-center justify-between text-gray-900 tracking-wide">
        <div className="flex space-x-4">
        <div className="text-3xl">logo</div>
        {menu.map((link, index) => (
          <li key={index}>
            <Link to={link.url}>{link.text}</Link>
          </li>
        ))}

<UserLoginBtn text="Login"/>
<UserLogoutBtn/>
        </div>
        <Link to="/cart">
        
           <button>cart</button>
        </Link>
    
      </ul>

    </nav>
  );
}