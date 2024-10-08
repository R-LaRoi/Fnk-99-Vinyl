import { useState, useEffect } from "react";
import { ItemAddedModal } from "./ItemAddedModal";
interface CartItem {
  id: string;
  title: string;
  price: string;
  quantity: number;


}

const userCart: CartItem[] = []

function AddToCartBtn({ id, title, price }: CartItem) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem('userCart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  console.log(cartItems)

  const [isAdded, setIsAdded] = useState(false);

  function handleShowPopup() {
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 2500);
  }

  useEffect(() => {

    localStorage.setItem('userCart', JSON.stringify(cartItems));
  }, [cartItems]);


  function addToCart() {
    handleShowPopup()
    setCartItems(prevItems => {
      const productItemIndex = prevItems.findIndex(item => item.id === id);

      if (productItemIndex !== -1) {

        const updatedItems = [...prevItems];
        updatedItems[productItemIndex] = {
          ...updatedItems[productItemIndex],
          quantity: updatedItems[productItemIndex].quantity + 1
        };
        return updatedItems;
      } else {

        return [...prevItems, { id, title, price, quantity: 1 }];
      }
    });
  }

  return (
    <>
      <button
        className="bg-gray-900 hover:bg-stone-700 text-white font-bold py-2 px-4 rounded text-xs mr-2"
        onClick={addToCart}
      >
        Add to Cart
      </button>
      {isAdded && (
        <ItemAddedModal title={title} />
      )}
    </>
  );
}



export { userCart, AddToCartBtn }