import { AddToCartBtn } from "./AddToCartBtn";
import "../Styles/products.css";
import { ViewItemBtn } from "./ViewItemBtn";

interface ProductsData {
  title: string;
  desc: string;
  _id: string;
  img_url: string;
  price: string;
}

interface ProductsProps {
  products: ProductsData

}


// shows the products collection from mongodb --- 
export function Products({ products }: ProductsProps) {


  const { title, desc, _id, img_url, price } = products;
  return (

    <div className="product-card expanded ">
      <div className="pd-card">
        <div className="img--">
          <img src={img_url} alt="product image"></img>
          <div className="price" id="price">{price}</div>
        </div>

        <div className="pd-desc"> <div className="text-4xl">{title}</div>
          <div className="text-sm desc--">{desc}</div>
          <AddToCartBtn title={title} id={_id} price={price} quantity={1} />
          <ViewItemBtn id={_id} title={title} desc={desc} img_url={img_url} price={price} />

        </div>


      </div>
    </div>


  )


}

