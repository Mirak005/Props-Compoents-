import React from "react"
import "./NavBar.css"



const NavBar = (props) =>{
    
console.log("my props" , props)
//props is an object that contains all attributes from the parent element
    return(
    <header className="nav-bar"  >
      <h1>GoMyCode</h1>
    
      <ul>
        
        { 
         props.items.map((item , i)=> <li key={i} ><a href="#!"> {item} </a>  </li>)

        }



      </ul>
    </header>
)}

export default NavBar