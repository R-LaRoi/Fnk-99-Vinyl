import { useEffect, useState } from 'react'
import  axios, { Axios }  from 'axios'

import { Layout } from './Components/Layout'

import './App.css'

function App() {
  const [products, setProducts] = useState([]);

useEffect(()=>{
async function fetchData(){
  try {
    const response = await axios({
      url: "/",
      method: "GET"
    })

   console.log(response)

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
