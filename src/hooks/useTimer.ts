import { useEffect, useState } from "react";

// DEPRECATED: render on ever second for display timer
const useTimer = (maxSeconds: number, callback?: () => void) => {
    const [seconds, setSeconds] = useState(1);
    const [isActive, setIsActive] = useState(true);

    function reset() {
        setSeconds(1);
        setIsActive(true);
    }

    useEffect(() => {
        let timerId: any = null;

        if (seconds >= maxSeconds) {
            callback?.();
            reset();
        } else if (isActive) {
            timerId = setInterval(() => {
                setSeconds((sec) => sec + 1);
            }, 1000);
        } else if (!isActive && seconds !== 1) {
            clearInterval(timerId);
        }
        return () => clearInterval(timerId);
    }, [isActive, seconds]);

    function toggle(active: boolean) {
        setIsActive(active);
    }
    

    return { seconds, toggle, reset };
};

export default useTimer;
