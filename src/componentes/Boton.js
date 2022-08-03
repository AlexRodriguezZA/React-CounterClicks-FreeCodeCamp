import React from "react";
import '../style/Boton.css'

// Utilizamos operadores ternarios para poder ver que tipo de clase osea de boton vamos a utilizar
// true -> boton-click  false -> boton reinciar
function Boton({ texto, esBotonDeclick, manejarClick }){
  return(
    <button className={esBotonDeclick ? "boton-click": "boton-reiniciar" }
    onClick={manejarClick}>
      {texto}
    </button>
  )

}
export default Boton;