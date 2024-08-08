import { Link } from "react-router-dom";
import { Products } from "../Components/Products"

interface Product {
  id: string;
  img_url: string;
  is_available: string;
  name: string;
  price: string;
  qty: string;
  title: string;
  type: string;
  _id: string;
  desc: string;
}

interface HomeProps {
  products: Product[];
}

export function Home({products}:HomeProps){
  console.log(products);
  return(
    <>

<h1>Featured item</h1>
    {products.length > 0 && (
      <Products key={products[0].id} products={products[0]} />
    )}

    <Link to="/shop">
<button>Shop</button>
    </Link>
    </> 
  )
}





