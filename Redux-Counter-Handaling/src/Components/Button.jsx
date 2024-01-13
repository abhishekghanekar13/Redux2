import { useRef } from "react";
import { useDispatch } from "react-redux";

let Button = () => {
  let numbercounter = useRef();

  let dispach = useDispatch();

  let handalIncrement = () => {
    dispach({ type: "Increment" });
  };

  let handalDecrement = () => {
    dispach({ type: "Decrement" });
  };

  let handal = () => {
    dispach({
      type: "Add",
      payload: {
        num: numbercounter.current.value,
      },
    });
  };
  return (
    <>
      <div className="col-lg-6 mx-auto">
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button
            type="button"
            class="btn btn-primary"
            onClick={handalIncrement}
          >
            +1
          </button>
          <button
            type="button"
            class="btn btn-secondary"
            onClick={handalDecrement}
          >
            -1
          </button>
        </div>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <input
            type="text"
            placeholder="Enter the number"
            className="input"
            ref={numbercounter}
          />

          <button type="button" class="btn btn-secondary" onClick={handal}>
            add
          </button>
        </div>
      </div>
    </>
  );
};

export default Button;
