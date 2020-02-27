import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIcecream } from "../redux";

function HookIcecream() {
  const numberOfIcecreams = useSelector(
    state => state.icecream.numberOfIcecream
  );
  const dispatch = useDispatch();
  return (
    <div style={{ background: "gray", color: "blue" }}>
      <h2> icecream store with hooks</h2>
      <p>avalable icecreams - {numberOfIcecreams} </p>
      <button onClick={() => dispatch(buyIcecream())}>buy a icecream</button>
    </div>
  );
}
export default HookIcecream;
