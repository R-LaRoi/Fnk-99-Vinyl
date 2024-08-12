import  axios from 'axios'
import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import { Nav } from "./Components/Nav"
import {navMenu} from './Components/navLinks'
import {Cart} from './Components/Cart'
import { Shop } from './Pages/Shop'
import {About} from './Pages/About'
import {Events} from './Pages/Events'
import {Home} from './Pages/Home'
import {Loading} from './Components/Loading'
import{Checkout} from './Pages/Checkout'

import './App.css'

const URL = "https://fnk-99-vinyl-server.onrender.com/api";



function App() {
const [products, setProducts] = useState([]);
  console.log(products);
const [loading, setLoading] = useState(true)
const { isAuthenticated } = useAuth0();

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])




useEffect(()=>{

async function fetchData() {axios.get(URL)
  .then(response => {
   const {data} = response.data;
   const {allVinyl} = data;
   setProducts(allVinyl);
  })
  .catch(error => {
    if (error.response) {
      console.log('Error response:', error.response);
    } else if (error.request) {

      console.log('Error request:', error.request);
    } else {
      
      console.log('Error message:', error.message);
    }
  });

}
fetchData();
},[])


  return (
    <>
    { loading === false ?  (

       <>
<section className='app-main'>
       <Nav menu={navMenu} />
        <Routes>
          <Route path="/" element={<Home products={products} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop" element={<Shop products={products} />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
      
{isAuthenticated ? (
          <Routes>
             <Route path="/checkout" element={<Checkout />}/>
          </Routes>
        ) : (
          <Route path="/cart" element={<Cart />} />
        )}


          </Routes>
        </section>
        </>
        
        ) : (
          <Loading title="FUNK 99" />) }


      </>


  )
}

export default App
