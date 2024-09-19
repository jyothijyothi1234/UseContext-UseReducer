import React, { useReducer } from "react";

function countered(state,action){

//     switch(action.type){
// case "increse": return state+action.payload
// case "dec" : return state-1
// case "reset": return 0
// default : return "here it is the error"

//     }


if(action.type==="increse"){

    return state+1

}
else if(action.type==="dec"){

    return state-1

}else{

    return 0
}
}


export default function Reducter(){


    const[state,dispatch]=useReducer(countered,0);

    return(

        <div>

<button   onClick={()=>dispatch({type:"increse" ,payload: 3})}> + </button>
<button   onClick={()=>dispatch({type:"dec"})}> - </button>
<button   onClick={()=>dispatch({type:"reset"})}> reset </button>
<h1>{state}</h1>

        </div>

    );
}