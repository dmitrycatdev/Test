import useOpacityLoopAnimation from "@/hooks/useOpacityLoopAnimation";
import { ScreenCenterView } from "@/styled";
import React from "react";
import { Animated } from "react-native";

const LoadingView = () => {
    const opacity = useOpacityLoopAnimation();
    return (
        <ScreenCenterView>
            <Animated.Text style={{ opacity, fontSize: 20 }}>
                Loading data...
            </Animated.Text>
        </ScreenCenterView>
    );
};

export default LoadingView;