
import { Cart } from "../Components/Cart";
import { useAuth0 } from "@auth0/auth0-react";

interface CheckoutProps {
  redirectUri?: string;
}

export function Checkout({ redirectUri }: CheckoutProps) {
  console.log('Checkout component rendered');
  const { logout, isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return (
      <>
        <div className="text-9xl">Checkout</div>
        <Cart />
        <form action=""> this is a form</form>

        <button
          className="btn btn-primary logoutBtn"
          onClick={() =>
            logout({
              logoutParams: { returnTo: redirectUri || window.location.origin }
            })
          }
        >
          Log Out
        </button>
      </>
    );
  }

  return null; 
}