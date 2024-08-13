import { useState } from "react";
import { Modal } from "./Modal";

interface ViewItemBtnProps{
id: string;
title:string;
desc: string;
img_url: string;
price:string;

}

const userCart: ViewItemBtnProps[] = []


function ViewItemBtn({id, title,desc,img_url,price }:ViewItemBtnProps){
  const [showProductModal, setShowProductModal] = useState(false);

  function viewItem(){
    const previewItem: ViewItemBtnProps = {id, title,desc,img_url,price};
    console.log(previewItem)
    console.log("show item modal ")
    setShowProductModal(true)
  }

  function closeModal(){
    setShowProductModal(false)
  }

  return (
    <>
      <button className="bg-gray-900 hover:bg-stone-700 text-white font-bold py-2 px-4 rounded text-xs" value={id} onClick={viewItem}>
        View 
      </button>
      {showProductModal && (
        <Modal
          item={{ id, title, desc, img_url, price }}
          onClose={closeModal}
        />
      )}
    </>
  )
}

export {userCart, ViewItemBtn}