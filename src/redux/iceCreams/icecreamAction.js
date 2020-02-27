import { BUY_ICECREAM } from "./icecreamType";

export function buyIcecream() {
  return {
    type: BUY_ICECREAM,
    info: "for icecream store"
  };
}
