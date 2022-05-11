import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./src/screens/Login";
import Home from "./src/screens/Home";
import React from "react";
import { AuthProvider } from "./src/components/AuthContext";

export default function App() {
    return (
        <AuthProvider>
            <View style={styles.root}>
                <Login />

                <StatusBar style="auto" />
            </View>
        </AuthProvider>
    );
}

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
