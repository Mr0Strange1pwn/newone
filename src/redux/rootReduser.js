import { combineReducers } from "redux";
import cakeReduser from "./cake/cakeReduser";
import icecreamReduser from "./iceCreams/icecreamReduser";
import donutreduser from "./donut/donutReduser";

export const rootReduser = combineReducers({
  cake: cakeReduser,
  icecream: icecreamReduser,
  donut: donutreduser
});
