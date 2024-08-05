import "./styles/nav.css"
import { useState } from "react";

interface NavProps{
menu: string[];

}


export function Nav({menu}: NavProps){

const [showCart, setShowCart] = useState(false)

  function handleShowCart(){
    setShowCart(true);

  }
return(

<nav>

  <ul className="nav--">
      <div>logo</div>{menu.map((item, index) => (
      <li key={index}>{item}</li>
        ))}
        <button onClick={handleShowCart}>cart</button>
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