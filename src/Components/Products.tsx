import { CartBtn } from "./CartBtn";

interface ProductsData{
title:string;
desc: string;
_id: string;
}

interface ProductsProps{
  products: ProductsData

}


export function Products({products}:ProductsProps){

const {title, desc, _id } = products;
return(

<section>
<div>vinyl</div>
<div>{title}</div>
<div>{desc}</div>
<CartBtn title={title}  id={_id}/>

</section>


)


}