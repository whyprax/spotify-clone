import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import reducer, { inititalState } from "./utils/reducer";
import { StateContext, StateProvider } from "./utils/StateProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StateProvider inititalState={inititalState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
);
