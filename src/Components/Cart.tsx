

interface CartBtnProps{
id: string;

}

export function CartBtn({id}:CartBtnProps){

  return(
<>

<button value={id} onClick={()=>{
console.log(`clicked item ${id}`)
}}> add to cart </button>
</>


  )


}