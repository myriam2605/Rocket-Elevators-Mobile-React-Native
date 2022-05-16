import { View, Text, Image, StyleSheet, useWindowDimensions, Alert } from "react-native";
import React, { useContext, useState, useEffect } from "react";
import logo from "./images/R2.png";
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

    const getMoviesFromApiAsync = async () => {
        try {
            const response = await fetch("http://174.95.251.226:5080/api/Users/email/david.amyot@codeboxx.biz");
            // http://192.168.1.10:8080/api/admin/1
            const json = await response.json();
            console.log("json:", json);
            return json.movies;
        } catch (error) {
            console.error("failed to fetch:", error);
        }
    };

    // getMoviesFromApiAsync();

    console.log("tasdadasdest :");

    const fetchData = async () => {
        // const baseURL = `/api/Users/email/${email}`;
        const baseURL = `http://127.0.0.1:5080/api/Users/email/${email}`;
        // return await axios.get(`${baseURL}`);

        console.log("baseurl: ", baseURL);
        axios
            .get(`${baseURL}`)
            .then((response) => {
                console.log(response.data);
                return response.data;
            })
            .catch((err) => {
                console.log("we have an error:", err);
                return false;
            });
    };

    // useEffect(() => {
    //     getMoviesFromApiAsync();
    // }, []);

    //const val = useContext(AuthContext);

    // const onSignInPressed = () => {
    //     console.warn("Sign in");
    // };

    // const onForgotPasswordPressed = () => {
    //     console.warn("onForgotPasswordPressed");
    // };

    const validationEmail = async () => {
        // console.log("test");
        // const listEmails = await fetchData();
        // console.log(listEmails.data);
        // regarder email input si dans la liste
        // if (listEmails.data) {
        navigation.navigate("Home");
        // } else {
        //     console.log("777777777777777777777777777777777777777777");
        //     // const ButtonAlert = () =>
        //     // console.log("we have an error:", err);
        //     alert("Ooooops enter an employee email");
        //     window.location.reload(false);
        //     // ButtonAlert;
        // }
    };

    return (
        <View style={styles.root}>
            <Image source={logo} style={[styles.logo, { height: height * 0.3 }]} resizeMode="contain" />
            <CustomInput placeholder="Enter your Email" value={email} setValue={setEmail} onChangeText={(text) => setEmail(text)} />

            <CustomButton text="Login" onPress={() => validationEmail()} />
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
