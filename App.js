import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./src/screens/Login";
import Home from "./src/screens/Home";
import React from "react";
import { AuthProvider } from "./src/components/AuthContext";
import Navigation from "./src/components/Navigation";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import axios from "axios";
import Status from "./src/screens/Status";

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Status" component={Status} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: "#F9FBFC",
    },
    // container: {
    //     flex: 1,
    //     backgroundColor: "white",
    //     alignItems: "center",
    //     justifyContent: "center",
    // },
});

export default App;
