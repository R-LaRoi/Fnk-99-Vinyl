interface CartListProps {
  cartItems: { title: string }[];
}

export function CartList ( {cartItems}:CartListProps){


  return(

 <div className='cart-element'>
{cartItems.map((item, index) => (
          <li key={index}>{item.title}</li>
      
      ))}
      </div> 


  )



}