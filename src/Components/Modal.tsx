import "../Styles/productmodal.css";
import ReactDOM from 'react-dom';
import { AddToCartBtn } from "./AddToCartBtn";
import { Link } from "react-router-dom";

interface ViewItemBtnProps{
id: string;
title:string;
desc: string;
img_url: string;
price:string;

}


export function Modal({ item, onClose }: { item: ViewItemBtnProps, onClose: () => void }) {
  return ReactDOM.createPortal(
    <div className="modal-- fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-5xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-8">
            <img 
              src={item.img_url} 
              alt={item.title} 
              className="w-full h-64 md:h-full object-cover"
            />
          </div>  
          <div className="modal-text p-10 md:w-1/2 flex flex-col justify-between">
            <button
              className="close-modal"
              onClick={onClose}
            >
           x
            </button>
            <div>
              <h2 className="modal-title mb-4">{item.title}</h2>
              <p className="mb-4 text-md">{item.desc}</p>
              <p className="font-bold text-xl mb-6">Price: {item.price}</p>
            </div>
            <AddToCartBtn title={item.title} id={item.id}/>
            <Link to="/cart" >
            <button className="modal-checkout-btn border border-black text-black font-bold py-2 px-4 rounded text-xs w-full">Checkout</button></Link>
            
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('modal-root') ?? document.body
  );
}


