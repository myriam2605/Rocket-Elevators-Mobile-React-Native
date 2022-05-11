import { View, Text, Image, StyleSheet, useWindowDimensions } from "react-native";
import React, { useContext, useState, useEffect } from "react";
// import Logo from "../../Logo/R2.png";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

import { AuthContext } from "../components/AuthContext";

import axios from "axios";

const Login = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { height } = useWindowDimensions();

    const fetchData = () => {
        const baseURL = "https://localhost:7162/api/Users/email/{email}";
        axios
            .get(`${baseURL}`)
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => console.log("we have an error:", err));
    };

    useEffect(() => {
        fetchData();
    }, []);

    //const val = useContext(AuthContext);

    // const onSignInPressed = () => {
    //     console.warn("Sign in");
    // };

    // const onForgotPasswordPressed = () => {
    //     console.warn("onForgotPasswordPressed");
    // };

    return (
        <View style={styles.root}>
            {/* <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} resizeMode="contain" /> */}

            <CustomInput placeholder="Enter your Email" value={email} setValue={setEmail} onChangeText={(text) => setEmail(text)} />

            <CustomInput
                placeholder="Enter your Password"
                value={password}
                setValue={setPassword}
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
            />

            <CustomButton text="Sign In" onPress={() => navigation.navigate("Home")} />

            <CustomButton text="Forgot password?" onPress={() => navigation.navigate("Login")} type="TERTIARY" />
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
