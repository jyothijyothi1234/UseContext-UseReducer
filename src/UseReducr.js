import React, { useReducer } from "react";

function counterReduce(count,val){
    console.log(count,val)

    return count+val;
}



export default function Reducert(){

const[count,dispatch]=useReducer(counterReduce,0);

    return(

<div>

    <h1>UseReducer</h1>
    <button  onClick={()=>dispatch(1)}  >click+</button>
    {count}

    <button   onClick={()=>dispatch(-1)} >click-</button>
</div>

    );
}