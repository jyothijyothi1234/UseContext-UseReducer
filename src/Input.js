import React, { useEffect, useState } from "react";

export default function Input(){

const[state,setState]=useState("")
const[update,setUpdate]=useState("");
const Handler=(e)=>
{
    setState(e.target.value)

}

    const Handle=()=>
    {
        
        setUpdate(state)
        
    }


    const deleted=()=>{
        setUpdate("")
    }


    const saverbutt=()=>{
        setUpdate(state)

    }
    return(


        <div>
            <h1>Input Text</h1>
            <input  onChange={Handler} placeholder="enter the value"  />
            <button  onClick={Handle} >click</button>
            {update}
            <button  onClick={deleted} >delete</button>
            <button  onClick={saverbutt} >save</button>

        </div>
    );
}