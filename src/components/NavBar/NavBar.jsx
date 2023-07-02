import React, {  useState } from "react";
import "./NavBar.css";
import Select from "../Select/Select";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import NavBarBoostrap from "../NavBar Boostrap/NavBarBoostrap";

function NavBar() {
  
  const [navColor, setNavColor] = useState("blue")
  const [fontSizeGet, setFontSize] = useState("15px")
  
  const onChangeColor = (event)=>{ 
    const color = event.target.value
    setNavColor(color)
  }

  const onChangeFontSize = (event)=>{
    const fontSize = event.target.value
    setFontSize(fontSize)
  }
  
 
  /* {//*EstilosS CSS*///} */
  return (  //codigo JSX Mezcla entre HTML y JAVASCRIPT
      <div className="barrita">    
        <NavBarBoostrap/>  
                         
      </div>
   
  );
}

export default NavBar;