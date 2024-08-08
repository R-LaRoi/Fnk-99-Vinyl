

interface CartItem {
  id: string;
  title: string;
}

export function Cart() {
  const userCartData = localStorage.getItem('userCart');
  const userCart: CartItem[] = userCartData ? JSON.parse(userCartData) : [];

  console.log(userCartData);
  
  return (
    <section className="">
      <h1>Cart</h1>
      {
        userCart.map((element, index) => {
          return (
            <p key={index}>{element.title}</p>
          );
        })
      }
    </section>
  );
}