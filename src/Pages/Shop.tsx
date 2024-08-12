
import { Products } from "../Components/Products"
import "../Styles/products.css";

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

interface ShopProps {
  products: Product[];
}

export function Shop({products}:ShopProps) {
  return (
    <section className="shop-body">
      <div>
      <h1 className="text-6xl text-left text-gray-900 tracking-wide p-11">RECENTLY ADDED</h1>
      <div className=" filter- text-xl text-left text-gray-900 ml-11 tracking-wide">Check out our latest collection</div>
      </div>
    <div className="products-container">
    {products.map((products:any, index: number) => (
      <Products key={index} products={products} />
            ))}
    </div> 

   
    </section>

  )
}

