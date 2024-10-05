import { useEffect, useRef } from "react";
import { Animated, Easing } from "react-native";

const useOpacityLoopAnimation = () => {
    const opacityAnimation = useRef(new Animated.Value(0.2)).current;
    
    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(opacityAnimation, {
                    toValue:         1,
                    duration:        750,
                    useNativeDriver: true,
                    easing:          Easing.linear,
                }),
                Animated.timing(opacityAnimation, {
                    toValue:         0.2,
                    duration:        750,
                    useNativeDriver: true,
                    easing:          Easing.linear,
                }),
            ])
        ).start();
    }, []);

    return opacityAnimation;
};

export default useOpacityLoopAnimation;
