import { View, Text, Button, FlatList, container, TouchableOpacity, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";
import Status from "./Status";
// const DATA = [
//     {
//         id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
//         title: "First Item",
//     },
//     {
//         id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
//         title: "Second Item",
//     },
//     {
//         id: "58694a0f-3da1-471f-bd96-145571e29d72",
//         title: "Third Item",
//     },
// ];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
        <Text style={[styles.title, textColor]}>{item.id}</Text>
    </TouchableOpacity>
);

const Home = ({ navigation }) => {
    const [data, setData] = useState([]);

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
    // useEffect(() => {
    //     console.log("hereee!");
    //     const getMoviesFromApiAsync = async () => {
    //         try {
    //             const response = await fetch("https://rocketelevator.me/api/elevators");
    //             const json = await response.json();

    //             //console.log("response:", json);
    //             setData(json);
    //         } catch (error) {
    //             console.error("error:", error);
    //         }
    //     };

    //     getMoviesFromApiAsync();

    //     // fetchData();
    // }, []);

    useFocusEffect(
        React.useCallback(() => {
            console.log("hereee!");
            const getMoviesFromApiAsync = async () => {
                try {
                    const response = await fetch("https://rocketelevator.me/api/elevators");
                    const json = await response.json();

                    //console.log("response:", json);
                    setData(json);
                } catch (error) {
                    console.error("error:", error);
                }
            };

            getMoviesFromApiAsync();
        }, [])
    );

    const onItemPress = (item) => {
        console.log("onItemPress item:", item);
        // onPress={ navigation,navigate("Status")};

        navigation.navigate("Status", {
            itemId: item.id,
            itemStatus: item.status,
        });
        // console.log("doit afficher page status", { Status });
    };

    const renderItem = ({ item }) => {
        const backgroundColor = "#6e3b6e";
        const color = "white";

        return <Item item={item} onPress={() => onItemPress(item)} backgroundColor={{ backgroundColor }} textColor={{ color }} />;
    };

    return (
        <View>
            {/* <select style={{ backgroundColor: "red", height: "100%", width: "100%" }}></select> */}
            {data.length !== 0 && <FlatList data={data} renderItem={renderItem} keyExtractor={(item) => item.id} />}
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
