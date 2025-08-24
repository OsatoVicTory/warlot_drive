import { useCallback, useEffect } from "react";
import throttle from "lodash.throttle";

const useScrollThrottler = (
    scrollRef: React.RefObject<HTMLDivElement | null> | string, 
    fn: (e: any) => null, deps = [], cooldown = 500
) => {
    const handleScroll = useCallback(throttle((e) => fn(e), cooldown), []);

    useEffect(() => {
        if(scrollRef === "window") {
            window.addEventListener("scroll", handleScroll);
        } else if(typeof scrollRef !== "string" && scrollRef.current) {
            scrollRef.current.addEventListener("scroll", handleScroll);
        }
        return () => {
            if(scrollRef === "window") {
                window.removeEventListener("scroll", handleScroll);
            } else if(typeof scrollRef !== "string" && scrollRef.current) {
                scrollRef.current.removeEventListener("scroll", handleScroll);
            }
        }
    }, deps);
};

export default useScrollThrottler;