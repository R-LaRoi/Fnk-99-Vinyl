import { useEffect, useState } from 'react'
import  axios from 'axios'
import { Layout } from './Components/Layout'

import './App.css'
import { Products } from './Components/Products'


function App() {
  const [products, setProducts] = useState([{}]);

  console.log(products);

useEffect(()=>{
async function fetchData(){
  try {
    const response = await axios({
      url: "/api/",
      method: "GET"
    })

   const {data} = response.data;
   const {allVinyl} = data;
   setProducts(allVinyl);

  } catch (error:any) {
    console.log(error.stack)
    
  }


}

   fetchData(); },[])

  return (
    <>
<Layout />

 {products.map((products:any, index: number) => (
        <Products key={index} products={products} />
      ))}
      <section>

</section>

{/* error ---> products={products}<--- 
Type '{}' is missing the following properties from type 'ProductsData': title, desc", */}

</>


  )
}

export default App
