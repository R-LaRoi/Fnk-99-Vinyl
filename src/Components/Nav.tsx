import "./styles/nav.css"

interface NavProps{
menu: string[];

}


export function Nav({menu}: NavProps){

return(

<nav>

  <ul className="nav--">
      <div>logo</div>{menu.map((item, index) => (
      <li key={index}>{item}</li>
        ))}</ul></nav>
)


}