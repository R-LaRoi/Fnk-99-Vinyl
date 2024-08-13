
import { Cart } from "../Components/Cart";
import { UserLogoutBtn } from "../Components/UserLogoutBtn";

interface CheckoutProps {
  redirectUri?: string;
}

export function Checkout({}: CheckoutProps) {

 {
    return (
      <>
        <div className="text-9xl">Checkout</div>
        <Cart />
        <form action=""> this is a form</form>

   <UserLogoutBtn />
      </>
    );
  }


}