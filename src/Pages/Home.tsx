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
      <Hero video={heroVideo} title="FNK 99"/>
      <div className="text-center mb-10">
      <h1 className="text-7xl mt-10 text-center text-gray-900 ">THIS JUST IN</h1>
      <h3 className="text-4xl text-center text-gray-900 ">Check out our latest collection</h3>
      </div>
    
    <div className="products-container">
{products.length > 0 && (
  products.slice(0, 4).map(product => (
    <Products key={product.id} products={product} />
  ))
)}
</div>
    <Link to="/shop">
        <button>Shop</button>
    </Link>
    </> 
  )
}





