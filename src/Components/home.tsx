import { Link } from "react-router-dom";
import { Products } from "./Products"

export default function Home({products}){
  console.log(products);
  return(
    <>
    {products.map((products:any, index: number) => (
      <Products key={index} products={products} />
            ))}
    </> 
  )
}