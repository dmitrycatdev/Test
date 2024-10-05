import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "./src/store";
import Router from "@/router/Router";
import { ToastProvider } from "react-native-toast-notifications";


const App = () => (
    <Provider store={store}>
        <NavigationContainer>            
            <ToastProvider>
                <Router />
            </ToastProvider>
        </NavigationContainer>
    </Provider>
);

export default App;
