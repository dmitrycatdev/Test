import useTimer from "@/hooks/useTimer";
import React from "react";
import { Text } from "react-native";

const Timer = () => {
    const { seconds } = useTimer(30);
    return (
        <Text>Seconds: {seconds}</Text>
    );
};

export default Timer;