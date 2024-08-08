
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

interface ShopProps {
  products: Product[];
}

export function Shop({products}:ShopProps) {
  return (
    <div>
      
      <h1>shop</h1> 
    <>
    {products.map((products:any, index: number) => (
      <Products key={index} products={products} />
            ))}
    </> 



    </div>
  )
}

