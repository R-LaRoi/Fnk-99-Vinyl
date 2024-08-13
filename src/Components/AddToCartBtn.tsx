import { useState } from "react";

interface AddToCartBtnProps{
id: string;
title:string;


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

<button className="bg-gray-900 hover:bg-stone-700 text-white font-bold py-2 px-4 rounded text-xs mr-2" value={id} onClick={addToCart}>
  Add to Cart
</button>

</>


  )


}

export {userCart, AddToCartBtn}