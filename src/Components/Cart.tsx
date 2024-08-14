import { UserLoginBtn } from "./UserLoginBtn";
import { PaymentForm } from "./PaymentForm";
import "../Styles/checkout.css";
import { useEffect, useState } from "react";
import { nanoid } from 'nanoid'

interface CartItem {
  id: string;
  title: string;
  price: string;
  quantity: number;
}

const orderId = nanoid(5);

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

      <PaymentForm subtotal={cartTotal()} orderId={orderId} />
      <div className="cart-body">
        <h1>FNK 99 Records</h1>
        <UserLoginBtn text="Create Account" />
        <div>Order:{orderId}</div>
        {userCart.length > 0 ? (
          <ol className="cart-list">
            {userCart.map((element) => (
              <li key={element.id} className="cart-item">
                <span className="qty-btn ">
                  <button className=" p-3" onClick={() => updateQuantity(element.id, element.quantity - 1)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4">
                    <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM6.75 9.25a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Z" clipRule="evenodd" />
                  </svg>
                  </button>
                  <span className="text-sm"> {element.quantity}</span>
                  <button className="p-3" onClick={() => updateQuantity(element.id, element.quantity + 1)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4">
                    <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z" clipRule="evenodd" />
                  </svg>
                  </button>
                </span>
                <span className="item-title p-12"> {element.title}</span>

                <span className="item-price">${(parseFloat(element.price) * element.quantity).toFixed(2)}</span>
              </li>
            ))}
            <div className="cart-subtotal">Subtotal: ${cartTotal()}</div>
          </ol>

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