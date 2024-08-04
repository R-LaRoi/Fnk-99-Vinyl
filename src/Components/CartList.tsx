

interface CartListProps {
  cartItems: CartBtnProps[];
}

export function CartList ( {cartItems}:CartListProps){


  return(

 <div className='cart-element'>
{cartItems.map((item:CartBtnProps, index: number) => (
        <div key={index}>
          <li>{item.title}</li>
        </div>
      ))}
      </div> 


  )



}