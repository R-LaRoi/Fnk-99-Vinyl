import "../Styles/productmodal.css";
import ReactDOM from 'react-dom';
import { AddToCartBtn } from "./AddToCartBtn";
import { Link } from "react-router-dom";

interface ViewItemBtnProps {
  id: string;
  title: string;
  desc: string;
  img_url: string;
  price: string;
}

export function Modal({ item, onClose }: { item: ViewItemBtnProps, onClose: () => void }) {
  return ReactDOM.createPortal(
    <div className="modal-- fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-99 p-4">
      <div className="bg-white rounded-lg w-full max-w-5xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-4 md:p-8">
            <img
              src={item.img_url}
              alt={item.title}
              className="w-full h-auto md:h-full object-contain md:object-cover"
            />
          </div>
          <div className="modal-text p-4 md:p-10 md:w-1/2 flex flex-col justify-between">
            <button className="close-modal" onClick={onClose}>
              x
            </button>
            <div>
              <h2 className="modal-title mb-2 md:mb-4">{item.title}</h2>
              <p className="mb-2 md:mb-4 text-sm md:text-md">{item.desc}</p>
              <p className="font-bold text-lg md:text-xl mb-4 md:mb-6">Price: {item.price}</p>
            </div>
            <div className="flex flex-col gap-2 md:gap-4">
              <AddToCartBtn title={item.title} id={item.id} price={item.price} quantity={1} />
              <Link to="/cart">
                <button className="modal-checkout-btn border border-black text-black font-bold py-2 px-4 rounded text-xs w-full">Checkout</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('modal-root') ?? document.body
  );
}