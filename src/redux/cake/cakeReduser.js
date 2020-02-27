import { BUY_CAKE } from "./cakeType";

const initialState = {
  numberOfCake: 10
};

const cakeReduser = (state = initialState, action) => {
  console.log("action type ******", action.type);
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCake: state.numberOfCake - 1
      };
    default:
      return state;
  }
};
export default cakeReduser;
