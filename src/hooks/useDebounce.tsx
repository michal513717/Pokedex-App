import { useState, useEffect } from "react";

export function useDebounce<T>(value:T, delay:number){
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebounceValue(value);
        }, delay)

        return () => clearTimeout(timeoutId);
    }, [value]);

    return debounceValue;
}