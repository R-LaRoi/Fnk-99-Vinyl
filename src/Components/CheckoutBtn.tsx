import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";


export function CheckoutBtn() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
    if (!isAuthenticated) {

 return (<>
       <Link to="/checkout">
        <button className="bg-gray-900 hover:bg-stone-700 text-white font-bold py-2 px-4 rounded" onClick={() => loginWithRedirect()}>checkout btn</button>
    </Link>
    </>
  )

    }
 
}

