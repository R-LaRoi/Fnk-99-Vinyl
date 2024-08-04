import { useState } from "react";

interface CartBtnProps{
id: string;
title:string;
//  addToCart: (id: string, title: string) => void;

}
const userCart:  CartBtnProps[] = []

export function CartBtn({id, title, }:CartBtnProps){
const [cartItems, setCartItems] = useState<CartBtnProps[]>([]);

function addToCart(){
const cartItem: CartBtnProps = {id, title};
userCart.push(cartItem)
setCartItems(userCart)
console.log(userCart)

  }

  return(
<>

<button value={id} onClick={addToCart}> add to cart </button>

</>


  )


}

