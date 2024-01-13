import {createStore} from "redux";
let INISTAL_VALUE={
  counter:0,
}
let counterstore=(store=INISTAL_VALUE,action)=>{
    if(action.type==="Increment"){
     return {counter: store.counter+1}
    }
    else if(action.type==="Decrement"){
    return {counter: store.counter-1}
    }
    else if(action.type==="Add"){
      return{counter:store.counter + Number(action.payload.num)}
    }
    return store;
}
let reducestore=createStore(counterstore);
export default reducestore;
