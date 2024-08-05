import { userCart } from "./AddToCartBtn";

interface Cart{


}

export function Cart () {
  console.log(userCart);
  return(
    
    <>
      <h1>Shopping Cart</h1>
      {
        userCart.map((element, index) => {
          return(
            <p key={index}>{element.title}</p>
          )
        })
      }
    </>
  )
}