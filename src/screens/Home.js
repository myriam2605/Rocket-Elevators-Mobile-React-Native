import { View, Text, Button, FlatList, container, TouchableOpacity, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import axios from "axios";

const DATA = [
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "First Item",
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "Second Item",
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Third Item",
    },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
        <Text style={[styles.title, textColor]}>{item.title}</Text>
    </TouchableOpacity>
);

const Home = () => {
    console.log("in home");
    const fetchData = () => {
        console.log("in home----------------------------");
        const baseURL = "https://localhost:7162/api/Elevators";
        axios
            .get(`${baseURL}`)
            .then((response) => {
                console.log("in home8888888888888888888");
                console.log(response.data);
            })
            .catch((err) => console.log("we have an error:", err));
    };
    useEffect(() => {
        fetchData();
    }, []);

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
        const color = item.id === selectedId ? "white" : "black";

        return <Item item={item} onPress={() => setSelectedId(item.id)} backgroundColor={{ backgroundColor }} textColor={{ color }} />;
    };

    return (
        <View>
            <select style={{ backgroundColor: "red", height: "100%", width: "100%" }}></select>
            <FlatList data={DATA} renderItem={renderItem} />
            {/* keyExtractor={(item) => item.id} /> */}
        </View>
    ); // <div>
    //     {/* <h1>{fetchData}</h1> */}
    //     {/* <select value={fetchData} onChange> */}
    //     {/* </select> */}
    //     <View
    //         style={{ backgroundColor: "red", height: "100%", width: "100%" }}
    //         // FlatList
    //         // data={[{ fetchData }]}
    //         // renderItem={({ item })}

    //         // renderItem={({ item }) => <Text>{item.name}</Text>}
    //         // keyExtractor={(item, index) => index.toString()}
    //     />
    //     {/* <FlatList data={[fetchData]}> Liste of Elevator </FlatList> */}
    //     {/* <getMoviesFromApi /> */}
    //     {/* <FlatList data={[fetchData]} /> */}
    //     {/* </View> */}
    // </div>
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});

export default Home;
