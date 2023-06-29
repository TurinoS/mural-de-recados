import { createContext } from "react";

export const INITIAL_STATE = {
    themeName: "light"
};

export const AppContext = createContext({
    State: INITIAL_STATE,
});