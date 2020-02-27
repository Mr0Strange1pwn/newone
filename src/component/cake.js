import React from "react";
import { buyCake } from "../redux/index";
import { connect } from "react-redux";

const Cake = props => {
  return (
    <div style={{ background: "blue", color: "gray" }}>
      <h1>CAKE SHOP</h1>
      <p>avalable Cake -{props.numOfCakes}</p>
      <button onClick={props.buyCake}>BUY CAKE</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    numOfCakes: state.cake.numberOfCake
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cake);
