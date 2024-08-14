interface CartListProps {
  cartItems: { title: string, price: string }[];
}

export function CartList({ cartItems }: CartListProps) {


  return (

    <div className='cart-element'>
      {cartItems.map((item, index,) => (
        <><ul>
          <li key={index}>{item.title}</li>
          <li key={index}>{item.price}</li>
        </ul>
        </>
      ))}
    </div>


  )



}