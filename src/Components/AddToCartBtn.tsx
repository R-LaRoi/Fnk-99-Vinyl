import { useState } from "react";

interface AddToCartBtnProps{
id: string;
title:string;
// addToCart: (id: string, title: string) => void;

}

const userCart: AddToCartBtnProps[] = []

function AddToCartBtn({id, title, }:AddToCartBtnProps){
  const [cartItems, setCartItems] = useState<AddToCartBtnProps[]>([]);

function addToCart(){
const cartItem: AddToCartBtnProps = {id, title};

userCart.push(cartItem)
setCartItems(userCart)
console.log(userCart)

localStorage.setItem('userCart', JSON.stringify(userCart));

return cartItems

  }



  
  return(
<>

<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded m-2" value={id} onClick={addToCart}>
  Add to Cart
</button>



</>


  )


}

export {userCart, AddToCartBtn}