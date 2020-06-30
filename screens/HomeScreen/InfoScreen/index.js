import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    StyleSheet,
    Image,
    Dimensions,
    ActivityIndicator,
} from "react-native";


const images = [
    require("../../../assets/images/0.jpg"),
    require("../../../assets/images/1.jpg"),
    require("../../../assets/images/2.jpg"),
    require("../../../assets/images/3.jpg"),
];

export const InfoScreen = (props) => {
    const { listLichChay, fetching } = useSelector(state => state.HomeReducer)

    const random = Math.floor(Math.random() * images.length - 1 + 1);
    const { id, item, email } = props.route.params;
    const selectedItem = listLichChay.find((item) => item.id === id);
    const [a, b] = selectedItem.TenLC.split('-')
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View>
                <Image style={styles.image} source={images[random]} />
                <View style={styles.itemView}>
                    <View style={styles.mainInfo}>
                        <Text style={styles.name}> {a} </Text>
                        <Text> {'===>'}</Text>
                        <Text style={styles.name}> {b} </Text>
                    </View>
                    <View style={styles.priceWrapper}>
                        <Text style={styles.price}>
                            {`${selectedItem.Gia} VNĐ`}
                        </Text>
                    </View>

                    <View style={styles.fabButton}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={styles.fab}
                            onPress={() => {
                                props.navigation.navigate("bookingform", {
                                    item: selectedItem,
                                });
                            }}
                        >
                            <Text style={styles.fabText}> BOOK TICKET </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};
{/* <View style={styles.incomingDetails}>
                        <Text style={styles.timings}> Khởi hành </Text>
                        <Text style={styles.time}> {`${new Date().getHours()}h ${new Date().getMinutes()}`} </Text>
                        <Text style={styles.date}> {`${new Date().getDate()} - ${new Date().getMonth()} - ${new Date().getUTCFullYear()}`} </Text>
                    </View> */}

const styles = StyleSheet.create({
    image: {
        height: Dimensions.get("window").height / 3,
        width: "100%",
        resizeMode: "cover",
    },
    itemView: {
        marginVertical: 20,
        backgroundColor: '#fff',
        padding: 20,
    },
    mainInfo: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    name: {
        fontSize: 18,
        paddingTop: 5,
    },
    priceWrapper: {
        alignItems: "center",
        borderColor: "red",
        marginBottom: 10
    },
    price: {
        fontSize: 45,
        color: '#11999e',
    },
    incomingDetails: {
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#11999e',
        marginVertical: 10,
        color: "#fff"
    },
    timings: {
        fontSize: 20
    },
    time: {
        fontSize: 18,
        marginLeft: 20
    },
    date: {
        marginLeft: 20,
        fontSize: 16
    }, fabButton: {
        width: "100%",
        alignItems: "flex-end",
    },
    fab: {
        flexDirection: "row",
        height: 60,
        width: 160,
        backgroundColor: '#11999e',
        alignItems: "center",
        borderRadius: 30,
        justifyContent: "center",
        // iphone properties
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 6,
        marginBottom: 10
    },
    fabText: {
        fontSize: 24,
        color: '#fefefe',
        marginHorizontal: 5,
    },
})