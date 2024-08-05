import { useEffect, useState } from 'react'
import { Nav } from "./Components/Nav"
import { Products } from './Components/Products'
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
      <Nav menu={navMenu}/>
      {products.map((products:any, index: number) => (
      <Products key={index} products={products} />
            ))}
</>


  )
}

export default App
