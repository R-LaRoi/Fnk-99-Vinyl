import { useState } from "react";

interface AddToCartBtnProps{
id: string;
title:string;
// addToCart: (id: string, title: string) => void;

}

const userCart:  AddToCartBtnProps[] = []

export function AddToCartBtn({id, title, }:AddToCartBtnProps){

  const [cartItems, setCartItems] = useState<AddToCartBtnProps[]>([]);

function addToCart(){
const cartItem: AddToCartBtnProps = {id, title};
userCart.push(cartItem)
setCartItems(userCart)
console.log(userCart)

return cartItems

  }

  return(
<>
<button value={id} onClick={addToCart}> add to cart </button>

</>


  )


}


