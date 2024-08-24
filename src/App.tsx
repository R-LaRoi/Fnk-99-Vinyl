import axios from 'axios'
import { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import { Nav } from "./Components/Nav"
import { navMenu } from './Components/navLinks'
import { Cart } from './Components/Cart'
import { Shop } from './Pages/Shop'
import { About } from './Pages/About'
import { ArtistProfiles } from './Pages/ArtistProfiles'
import { Home } from './Pages/Home'
import { Loading } from './Components/Loading'
import { Checkout } from './Pages/Checkout'
import './App.css'
import { OrderConfirmation } from './Pages/OrderConfirmation';



// const URL = "https://fnk-99-vinyl-server.onrender.com/api";
// const AP_URL = "https://fnk-99-vinyl-server.onrender.com/api/artist-profiles"

const URL = "/api";
const AP_URL = "api/artist-profiles"


function App() {
  const [products, setProducts] = useState([]);
  const [profiles, setProfiles] = useState([]);
  console.log(products);
  console.log(profiles)
  const [loading, setLoading] = useState(true)
  const { isAuthenticated } = useAuth0();

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])

  useEffect(() => {

    async function fetchData() {
      axios.get(URL)
        .then(response => {
          const { data } = response.data;
          const { allVinyl } = data;
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

    async function fetchProfiles() {
      axios.get(AP_URL)
        .then(response => {
          const { data } = response.data;
          const { allProfiles } = data;
          setProfiles(allProfiles);
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
    fetchProfiles();


  }, [])





  return (
    <>
      {loading === false ? (

        <>
          <section className='app-main'>
            <Nav menu={navMenu} />

            <Routes>
              <Route path="/" element={<Home products={products} />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/shop" element={<Shop products={products} />} />
              <Route path="/about" element={<About />} />
              <Route path="/artists" element={<ArtistProfiles profiles={profiles} />} />
              <Route path="/order-confirmation" element={<OrderConfirmation />} />``
              {isAuthenticated ? (
                <Route path="/checkout" element={<Checkout />} />
              ) : (
                <Route path="/shop" element={<Navigate to="/shop" />} />
              )}
            </Routes>
          </section>
        </>

      ) : (
        <Loading title="FUNK 99" />)}

    </>


  )
}

export default App
