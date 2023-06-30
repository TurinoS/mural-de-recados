import { useState, useEffect } from "react";

export default function usePersistedState<T>(key: string, initialtState: T) {
    const [state, setState] = useState<T>(() => {
        const storageValue = localStorage.getItem(key);

        if(storageValue) {
            return JSON.parse(storageValue);
        } else {
            return initialtState;
        }
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [key, state])

    return [state, setState] as const;
};