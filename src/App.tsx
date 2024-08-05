import { useEffect, useState } from 'react'
import { Nav } from "./Components/Nav"
// import { Products } from './Components/Products'
import { Routes, Route } from 'react-router-dom'
import {Cart} from './Components/Cart'
import Home from './Components/home'
import  axios from 'axios'
import './App.css'


const navMenu = ["shop", "events"]

function App() {
  const [products, setProducts] = useState([]);
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

      <Nav menu={navMenu} />
      {/* {products.map((products:any, index: number) => (
      <Products key={index} products={products} />
            ))} */}
            <Routes>
              <Route path="/"
              element ={<Home products={products}/>}
              />
              <Route
              path="/cart"
              element={<Cart products={products}/>}
              />
            </Routes>
</>


  )
}

export default App
