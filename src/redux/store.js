import { createStore } from "redux";
import { rootReduser } from "./rootReduser";

const store = createStore(rootReduser);

export default store;
