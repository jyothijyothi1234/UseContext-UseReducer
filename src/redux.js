import React from "react";
import { createStore } from "redux";

const initialState = {
  fullname: "null",
  balance: 10,
  deposite: 2000,
};

export default function Reduxter(state = initialState, action) {

    
        switch (action.type) {

            case "incr":
              return { ...state, balance: state.balance + action.payload };
              case "decr":
              return { ...state, deposite: state.deposite + action.payload };
              case "exchange":
              return { ...state, fullname: action.payload };
            default:
              return state;
          }
    
  
}

const store = createStore(Reduxter);
console.log(store.getState());


store.dispatch({ type: "incr", payload: 1000 });
console.log(store.getState());

store.dispatch({ type: "decr", payload: 1000 });
console.log(store.getState());

store.dispatch({ type: "exchange", payload:"jyothi" });

    console.log(store.getState());




