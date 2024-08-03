import { CartBtn } from "./Cart";


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
<CartBtn id={_id}/>
</section>

)


}