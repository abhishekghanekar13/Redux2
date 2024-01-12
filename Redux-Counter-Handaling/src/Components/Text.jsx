import { useSelector } from "react-redux";

let Text=()=>{
  let counter =useSelector((store)=>store.counter)
    return(<>
    <p>Counter current value {counter}</p>
    </>)
}
export default Text;