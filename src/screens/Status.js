import { View, Text, Button, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import Home from "./Home";
import axios from "axios";
import Login from "./Login";
import CustomButton from "../components/CustomButton";
import { NavigationContainer } from "@react-navigation/native";
// import { AsyncStorage } from "react-native-community/async-storage";

const Status = ({ route, navigation }) => {
    /* 2. Get the param */
    const { itemId, itemStatus } = route.params;
    const [item_Status, setItemStatus] = useState(itemStatus);

    // let myColor = "black";

    // if (item_Status === "active") {
    //     myColor = "green";
    // } else {
    //     myColor = "red";
    // }

    const putvals = async (itemID) => {
        let response = await axios.put(`https://rocketelevator.me/api/elevators/update/active/${itemID}`);

        console.log("response is :", response.status);
        // StyleSheet = { getstyle };

        if (response.status === 200) {
            if (item_Status === "active") {
                setItemStatus("inactive");
            } else {
                setItemStatus("active");
            }
        }
        //response = await axios.get(`https://rocketelevator.me/api/elevators/${itemID}`);
        // setItemStatus(response.data.status);
    };

    // getstyle(item_Status) {
    //     if (item_Status === "active") {
    //         return { borderColor: 'green' };
    //     }
    //     else {
    //         return { borderColor: 'red' };
    //     }
    // }
    // console.log("test login :", itemId, itemStatus);

    return (
        <View>
            <Text>Elevator ID: {itemId}</Text>
            <Text>
                Elevator Status: <Text style={{ color: item_Status === "active" ? "green" : "red" }}> {item_Status}</Text>
            </Text>

            <CustomButton text="Change status" onPress={() => putvals(itemId)} />
            {/* <button>
                {" Change Status"}
                {/* <Text></Text> */}
            {/* </button> */}
            <CustomButton text={"Log Out"} onPress={() => navigation.popToTop()} />
        </View>
    );
};
const styles = StyleSheet.create({
    getstyle(item_Status) {
        if (item_Status === "active") {
            color = "green";
        } else {
            color = "red";
        }
    },
});

// fetch("https://rocketelevator.me/api/elevators/update/active", {
//     method: "PUT",
//     headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//         firstParam: "status",
//     }),

// });
// const element = document.querySelector("#put-request .date-updated");

// const requestOptions = {
//     method: "PUT",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ title: "Fetch PUT Request Example" }),
// };
// fetch("https://rocketelevator.me/api/elevators/update/active", requestOptions)
//     .then((response) => response.json())
//     .then((data) => (element.innerHTML = data.updatedAt));
// console.log("tessssssssssssssssssssssssssst");

// putvals().then((response) => console.log(response));

export default Status;
