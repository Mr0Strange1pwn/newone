import React from "react";
import { buyIcecream } from "../redux/index";
import { connect } from "react-redux";

const Icecream = props => {
  return (
    <div style={{ background: "gray", color: "blue" }}>
      <h1>ICECREAM SHOP</h1>
      <p>avalable Icecreams -{props.numOfIcecream}</p>
      <button onClick={props.buyCake}>BUY ICECREAM</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    numOfIcecream: state.icecream.numberOfIcecream
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyIcecream())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Icecream);
