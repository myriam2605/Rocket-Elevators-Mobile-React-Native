import { View, Text, Button } from "react-native";
import React, { useEffect, useState } from "react";
import Home from "./Home";
import axios from "axios";
import Login from "./Login";
import CustomButton from "../components/CustomButton";
import { NavigationContainer } from "@react-navigation/native";

const Status = ({ route, navigation }) => {
    /* 2. Get the param */
    const { itemId, itemStatus } = route.params;
    const [item_Status, setItemStatus] = useState([itemStatus]);

    const putvals = async (itemID) => {
        let response = await axios.put(`https://rocketelevator.me/api/elevators/update/active/${itemID}`);
        response = await axios.get(`https://rocketelevator.me/api/elevators/${itemID}`);
        setItemStatus(response.data.status);
    };

    console.log("test login :", itemId, itemStatus);
    return (
        <View>
            <Text>Elevator ID: {itemId}</Text>
            <Text>Elevator Status: {item_Status}</Text>

            <CustomButton text="Change status" onPress={() => putvals(itemId)} />
            {/* <button>
                {" Change Status"}
                {/* <Text></Text> */}
            {/* </button> */}
        </View>
    );
};

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
