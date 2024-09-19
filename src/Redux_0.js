import React, { useReducer } from "react";
import { ReactReduxContext } from "react-redux";
import { createStore } from "redux";

const initialState = {
  mobile: "null",
  balance: 0,
  fullname: "jyothi",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "incre":
      return { ...state, fullname: action.payload };
      case "dec" : 
      return { ...state,balance: state.balance+action.payload }
    default:
      return state;
  }
}

const store = createStore(reducer);

store.dispatch({ type: "incre", payload: "jyothirlatha" });
store.dispatch({type:"dec",payload: 10})


console.log(store.getState()); 



