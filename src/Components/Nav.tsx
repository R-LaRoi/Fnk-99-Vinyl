import "./styles/nav.css"
import { useState } from "react";
import { Link } from "react-router-dom";

interface NavProps{
menu: string[];

}


export function Nav({menu}: NavProps){

const [showCart, setShowCart] = useState(false)

  function handleShowCart(){
    setShowCart(true);

  }
return(

<nav style={{border:"1px solid red"}}>

  <ul className="nav--">
      <div>logo</div>{menu.map((item, index) => (
      <li key={index}>{item}</li>
        ))}
        <Link to="/cart">
        <button onClick={handleShowCart}>cart</button>
        </Link>
        </ul>
  {showCart ? (
        <div>
          <h2>show items</h2>
          {/* <ul>
             {cartItems.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul> */}
          <button onClick={() => setShowCart(false)}>Go Back</button>
        </div>
      ) : (
       null
      )}
        </nav>
)


}