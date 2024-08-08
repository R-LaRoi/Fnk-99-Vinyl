import "./styles/nav.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Cart } from "./Cart";

interface NavProps {
  menu: {
    url: string;
    text: string;
  }[];
}

export function Nav({ menu }: NavProps) {
  const [showCart, setShowCart] = useState(false);

  function handleShowCart() {
    setShowCart(true);
  }

  return (
    <nav style={{ border: "1px solid red" }}>
      <ul className="nav">
        <div>logo</div>
        {menu.map((link, index) => (
          <li key={index}>
            <Link to={link.url}>{link.text}</Link>
          </li>
        ))}
        <Link to="/cart">
          <button onClick={handleShowCart}>cart</button>
        </Link>
    
      </ul>

      {showCart && (
        <div>
          <Cart />
          <button onClick={() => setShowCart(false)}>close</button>
        </div>
      )}
    </nav>
  );
}