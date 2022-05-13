import { View, Text, Image, StyleSheet, useWindowDimensions, Alert } from "react-native";
import React, { useContext, useState, useEffect } from "react";
// import Logo from "../../Logo/R2.png";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

// import { AuthContext } from "../components/AuthContext";

import axios from "axios";
import Home from "./Home";
import { ScreenStackHeaderLeftView } from "react-native-screens";

const Login = ({ navigation }) => {
    const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    const { height } = useWindowDimensions();

    // const getMoviesFromApiAsync = async () => {
    //     try {
    //         const response = await fetch("https://reactnative.dev/movies.json");
    //         const json = await response.json();
    //         console.log("json:", json);
    //         return json.movies;
    //     } catch (error) {
    //         console.error("failed to fetch:", error);
    //     }
    // };

    // getMoviesFromApiAsync();

    const fetchData = async () => {
        const baseURL = `https://localhost:7162/api/Users/email/${email}`;
        return await axios.get(`${baseURL}`);
        // axios
        //     .get(`${baseURL}`)
        //     .then((response) => {
        //         console.log(response.data);
        //         return response.data;
        //     })
        //     .catch((err) => {
        //         console.log("we have an error:", err);
        //         return false;
        //     });
    };

    // useEffect(() => {
    //     fetchData();
    // }, []);

    //const val = useContext(AuthContext);

    // const onSignInPressed = () => {
    //     console.warn("Sign in");
    // };

    // const onForgotPasswordPressed = () => {
    //     console.warn("onForgotPasswordPressed");
    // };

    const validationEmail = async () => {
        const listEmails = await fetchData();
        console.log(listEmails.data);
        // regarder email input si dans la liste
        if (listEmails.data) {
            navigation.navigate("Home");
        } else {
            console.log("777777777777777777777777777777777777777777");
            // const ButtonAlert = () =>
            // console.log("we have an error:", err);
            alert("Ooooops enter an employee email");
            window.location.reload(false);
            // ButtonAlert;
        }
    };

    return (
        <View style={styles.root}>
            {/* <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} resizeMode="contain" /> */}
            <CustomInput placeholder="Enter your Email" value={email} setValue={setEmail} onChangeText={(text) => setEmail(text)} />

            <CustomButton text="Login" onPress={validationEmail} />
            {/* => navigation.navigate("home") */}
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
