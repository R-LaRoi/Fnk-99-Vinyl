interface ProductsData{
title:string;
description: string;

}


interface ProductsProps{
  products: ProductsData
}


export function Products({products}:ProductsProps){

  const{title, description } = products
return(

<section>
<div>vinyl</div>
<div>{title}</div>
<div>{description}</div>
<button>add to cart</button>
</section>

)


}