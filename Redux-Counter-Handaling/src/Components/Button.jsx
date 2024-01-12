import { useDispatch } from "react-redux";

let Button=()=>{
 let dispach= useDispatch()

 let handalIncrement=()=>{
  dispach({type: "Increment"});
 }

 let handalDecrement=()=>{
  dispach({type: "Decrement"});
 }
    return(<>
    <div className="col-lg-6 mx-auto">
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" class="btn btn-primary" onClick={handalIncrement}>+1</button>
            <button type="button" class="btn btn-secondary" onClick={handalDecrement}>-1</button>
            </div>
          </div>
    </>)
}

export default Button;