import "../Styles/nav.css";
// import { useState } from "react";
import { Link } from "react-router-dom";
// import { Cart } from "./Cart";

interface NavProps {
  menu: {
    url: string;
    text: string;
  }[];
}

export function Nav({ menu }: NavProps) {
  // const [showCart, setShowCart] = useState(false);

  // function handleShowCart() {
  //   setShowCart(true);
  // }

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
        </div>
        <Link to="/cart">
          {/* <button onClick={handleShowCart}>cart</button> */}
           <button>cart</button>
        </Link>
    
      </ul>
{/* toggled cart */}
      {/* {showCart && (
        <div>
          <Cart />
          <button onClick={() => setShowCart(false)}>close</button>
        </div>
      )} */}
    </nav>
  );
}