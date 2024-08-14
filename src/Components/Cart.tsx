import { UserLoginBtn } from "./UserLoginBtn";
import { PaymentForm } from "./PaymentForm";
import "../Styles/checkout.css";

interface CartItem {
  id: string;
  title: string;
  price: string;
}


export function Cart() {
  const userCartData = localStorage.getItem('userCart');
  const userCart: CartItem[] = userCartData ? JSON.parse(userCartData) : [];

  console.log(userCartData);


  return (
    <section className="cart-container">
      <PaymentForm />
      <div className="cart-body">
        <h1>FNK 99 Records</h1>
        {userCart.length > 0 ? (
          <ul className="cart-list">
            {userCart.map((element) => (
              <li key={element.id} className="cart-item">
                <span className="item-title">{element.title}</span>
                <span className="item-price">{element.price}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty.</p>
        )}

        <UserLoginBtn text="Create Account" />
      </div>
      <div>
        <div>

        </div>
      </div>

    </section>
  );
}

