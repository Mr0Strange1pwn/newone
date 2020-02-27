import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";

function HooksCake() {
  const numOfCake = useSelector(state => state.cake.numberOfCake);
  const dispatch = useDispatch();
  return (
    <div style={{ background: "blue", color: "gray" }}>
      <h2>by hook ....</h2>
      <h2>cakes in Store {numOfCake}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy a Cake</button>
    </div>
  );
}

export default HooksCake;
