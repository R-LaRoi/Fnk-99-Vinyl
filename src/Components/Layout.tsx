import { Nav } from "./Nav"
// import { Products } from "./Products"

const navMenu = ["shop", "events", "cart", ]



export function Layout(){

return(
<>
<Nav menu={navMenu}/>
{/* <Products  products={} /> */}

{/* {productsData.map((products:string, index: number) => (
        <Products key={index} products={products} />
      ))} */}

</>

)


}