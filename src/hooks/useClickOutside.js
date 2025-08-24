import { useCallback } from "react";
import { useEffect } from "react";

const useClickOutside = (...args) => {

    const [ref, clickedOutside] = args;
    const deps = args.slice(2);

    const fn = useCallback((e) => {
        if(ref.current && !ref.current.contains(e.target)) {
            clickedOutside();
        }
    }, []);

    useEffect(() => {
        const check = () => { //modify actions based on dependencies (if apply)
            if(deps.length < 1) return true;
            return deps[0];
        }

        const run = check();
        if(run) {
            document.addEventListener("click", fn, true);
        }
        
        return () => {
            if(run) document.removeEventListener("click", fn, true);
        }
    }, deps);
};

export default useClickOutside;