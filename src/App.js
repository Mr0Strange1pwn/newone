import React from "react";
import "./App.css";
import Cake from "./component/cake";
import { Provider } from "react-redux";
import store from "./redux/store";
import HooksCake from "./component/hooksCake";
import Icecream from "./component/iceream";
import HooksIcecream from "./component/hookIcecream";
import Donut from "./component/donut";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Cake />
        <hr />
        <HooksCake />
        <hr />
        <Icecream />
        <hr />
        <HooksIcecream />
        <hr />
        <Donut />
      </div>
    </Provider>
  );
}

export default App;
