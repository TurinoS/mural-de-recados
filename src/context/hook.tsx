import { useContext } from "react";
import { AppContext } from ".";

export default function useAppContext() {

    const context = useContext(AppContext);

    return context;
}