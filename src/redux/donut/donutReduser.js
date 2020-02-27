import { BUY_DONUT } from "./donutType";

const initialDonuts = {
  numOfDonuts: 15
};

function donutreduser(state = initialDonuts, action) {
  switch (action.type) {
    case BUY_DONUT:
      return {
        ...state,
        numOfDonuts: state.numOfDonuts - 1
      };
    default:
      return state;
  }
}

export default donutreduser;
