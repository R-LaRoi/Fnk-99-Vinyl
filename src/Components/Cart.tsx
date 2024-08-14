import { UserLoginBtn } from "./UserLoginBtn";
import { PaymentForm } from "./PaymentForm";
import "../Styles/checkout.css";
import { useEffect, useState } from "react";

interface CartItem {
  id: string;
  title: string;
  price: string;
  quantity: number;
}


export function Cart() {
  const [userCart, setUserCart] = useState<CartItem[]>([])

  useEffect(() => {
    const userCartData = localStorage.getItem('userCart');
    if (userCartData) {
      setUserCart(JSON.parse(userCartData));
    }
  }, []);

  console.log(userCart)

  function updateQuantity(id: string, newQuantity: number) {
    const updatedCart = userCart.map(item =>
      item.id === id ? { ...item, quantity: Math.max(0, newQuantity) } : item
    ).filter(item => item.quantity > 0);

    setUserCart(updatedCart);
    localStorage.setItem('userCart', JSON.stringify(updatedCart));

  }

  function cartTotal() {
    return userCart.reduce((total, item) =>
      total + parseFloat(item.price) * item.quantity, 0
    )

  }


  return (
    <section className="cart-container">

      <PaymentForm subtotal={cartTotal()} />
      <div className="cart-body">
        <h1>FNK 99 Records</h1>
        <UserLoginBtn text="Create Account" />
        {userCart.length > 0 ? (
          <ul className="cart-list">
            {userCart.map((element) => (
              <li key={element.id} className="cart-item">
                <span className="item-title pr-8">{element.title}</span>
                <span className="item-quantity mr-2">
                  <button onClick={() => updateQuantity(element.id, element.quantity - 1)}>-</button>
                  {element.quantity}
                  <button onClick={() => updateQuantity(element.id, element.quantity + 1)}>+</button>
                </span>
                <span className="item-price">${(parseFloat(element.price) * element.quantity).toFixed(2)}</span>
              </li>
            ))}
            <div className="cart-subtotal">Subtotal: ${cartTotal()}</div>
          </ul>

        ) : (
          <p>Your cart is empty.</p>
        )}


      </div>
      <div>
        <div>

        </div>
      </div>

    </section>
  );


}