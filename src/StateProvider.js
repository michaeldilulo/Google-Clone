import React, { createContext, useContext, useReducer } from "react";

// preparing the data layer
export const StateContext = createContext();

// initial state is what data looks like when app is loaded, reducer listens to changes
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {/* Children is referring to App */}
        {children}
    </StateContext.Provider>
)

// Hook that allows us to pull information from the data layer
export const useStateValue = () => useContext(StateContext);