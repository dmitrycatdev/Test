import React from "react";
import FirstScreen from "@/features/First/FirstScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppRouteNames } from "./types";
import FirstDetailScreen from "@/features/First/FirstDetailScreen";

const RootStack = createNativeStackNavigator();

const Router = () => {
    const RenderFirstScreenDetails = (props: any) => <FirstDetailScreen {...props}/>;
    return (
        <RootStack.Navigator>
            <RootStack.Screen 
                name={AppRouteNames.First}
                component={FirstScreen}
            />
            <RootStack.Screen 
                name={AppRouteNames.FirstDetail} 
                component={RenderFirstScreenDetails}                
            />
            
        </RootStack.Navigator>
    );
};

export default Router;