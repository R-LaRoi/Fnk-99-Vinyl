import { Link } from "react-router-dom";
import { Products } from "../Components/Products"
import { Hero } from '../Components/Hero'

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

const heroVideo = "https://github.com/user-attachments/assets/e82835d1-ba82-4180-b34e-a51755367df0"

export function Home({products}:HomeProps){
  console.log(products);
  return(
    <>
      <Hero video={heroVideo} title="FUNK 99"/>
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





