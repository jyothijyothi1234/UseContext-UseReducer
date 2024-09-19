import React, { useRef } from "react";



export default function Reducters(){

let Serts=useRef(0);

    return(


        <div>

            <h1  ref={Serts}>useref</h1>
<button   onClick={()=>{
 
Serts.current.innerHTML="CHANGED"

console.log(Serts.current)
}
    
   }>+</button>
        </div>
    );
}