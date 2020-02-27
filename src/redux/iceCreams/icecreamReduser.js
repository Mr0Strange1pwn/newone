import { BUY_ICECREAM } from "./icecreamType";

const initialIcecream = {
  numberOfIcecream: 25
};

function icecreamReduser(state = initialIcecream, action) {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numberOfIcecream: state.numberOfIcecream - 1
      };
    default:
      return state;
  }
}
export default icecreamReduser;
