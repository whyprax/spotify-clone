import { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

export const StateProvider = ({ children, inititalState, reducer }) => (
  <StateContext.Provider value={useReducer(reducer, inititalState)}>
    {children}
  </StateContext.Provider>
);

export const useStateProvider = () => useContext(StateContext);
