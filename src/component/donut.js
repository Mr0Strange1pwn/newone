import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyDonut } from "../redux";
function Donut() {
  const numOfDonuts = useSelector(state => state.donut.numOfDonuts);
  const dispatch = useDispatch();
  return (
    <div style={{ background: "brown" }}>
      <h1>donut store</h1>
      <h3>remain donuts - {numOfDonuts} </h3>
      <button onClick={() => dispatch(buyDonut())}>BUY a DONUT</button>
    </div>
  );
}

export default Donut;
