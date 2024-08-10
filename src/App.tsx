import  axios from 'axios'
import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Nav } from "./Components/Nav"
import {navMenu} from './Components/navLinks'
import {Cart} from './Components/Cart'
import { Shop } from './Pages/Shop'
import {About} from './Pages/About'
import {Events} from './Pages/Events'
import {Home} from './Pages/Home'

import './App.css'

const URL = "https://fnk-99-vinyl-server.onrender.com/api";
function App() {
  const [products, setProducts] = useState([]);
  console.log(products);

useEffect(()=>{
async function fetchData(){
  try {
    const response = await axios({
      url: URL,
      // https://fnk-99-vinyl-server.onrender.com/api
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
            <Routes>
            <Route path="/" element ={<Home products={products}/>}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/shop" element={<Shop products={products}/>} />
            <Route path="/about" element={<About />} />  
            <Route path="/events" element={<Events />} />
            </Routes>
      </>


  )
}

export default App
