import { useEffect } from "react";

const useInterval = (callback: () => void, delay: number) => {
    useEffect(() => {
        if (!delay) return;
        const id = setInterval(callback, delay);
        return () => clearInterval(id);
    }, [delay]);
};

export default useInterval;
