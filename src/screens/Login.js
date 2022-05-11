import { View, Text, Image, StyleSheet, useWindowDimensions } from "react-native";
import React, { useState } from "react";
import Logo from "../../Logo/R2.png";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { height } = useWindowDimensions();

    const onSignInPressed = () => {
        console.warn("Sign in");
    };

    return (
        <View style={styles.root}>
            <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} resizeMode="contain" />

            <CustomInput placeholder="Username" value={username} setValue={setUsername} />

            <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true} />

            <CustomButton text="Sign In" onPress={onSignInPressed} />
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
