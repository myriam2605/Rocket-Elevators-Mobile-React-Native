import { View, Text, Image, StyleSheet, useWindowDimensions } from "react-native";
import React from "react";
import Logo from "../../assets/Logo/R2.png";

const Login = () => {
    const { height } = useWindowDimensions();
    return (
        <View style={styles.root}>
            <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} resizeMode="contain" />
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: "center",
        padding: 20,
    },
    logo: {
        maxWidth: 300,
        width: 300,
        maxHeight: 200,
    },
});

export default Login;
