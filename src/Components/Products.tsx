import { AddToCartBtn } from "./AddToCartBtn";
import "../Styles/products.css";

interface ProductsData{
title:string;
desc: string;
_id: string;
}

interface ProductsProps{
  products: ProductsData

}

// shows the products collection from mongodb --- 
export function Products({products}:ProductsProps){

const {title, desc, _id } = products;
return(

<div className="product-card expanded ">
  <div className="pd-card">
<div className="text-3xl">{title}</div>
<div className="text-sm desc--">{desc}</div>
<AddToCartBtn title={title}  id={_id}/>
</div>
</div>


)


}

