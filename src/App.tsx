import { useEffect, useState } from 'react'
import  axios, { Axios, all }  from 'axios'

import { Layout } from './Components/Layout'

import './App.css'

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
<Layout />
  )
}

export default App
