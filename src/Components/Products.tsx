import { AddToCartBtn } from "./AddToCartBtn";


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

<div className="product-container">
<div>{title}</div>
<div>{desc}</div>

<AddToCartBtn title={title}  id={_id}/>

</div>


)


}

