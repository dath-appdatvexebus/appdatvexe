import React from "react";
import {
    View,
    Text,
    SafeAreaView,
    ActivityIndicator,
    AsyncStorage,
} from "react-native";


export const MyBooking = (props) => {
    const [data, setdata] = React.useState()
    const [mounted, serMounted] = React.useState(false)

    React.useEffect(() => {
        serMounted(true)
        AsyncStorage.getItem('listTicket').then(data => {
            console.log(JSON.parse(data))
            setdata(JSON.parse(data))
        })

        return function () {
            serMounted(false)
        }
    }, [])
    const getMonth = (date) => {
        return new Date(date).getMonth()
    }
    const getDate = (date) => {
        return new Date(date).getDate()
    }
    const getYear = (date) => {
        return new Date(date).getFullYear()
    }
    // const month = new Date(data.date).getMonth()
    return (data ?
        <SafeAreaView style={{ flex: 1 }}>
            <Text style={{ textAlign: "center", marginVertical:20, fontSize: 22 }}>Lịch sử đặt vé</Text>
            <View style={{ padding: 10 }}>
                <View style={{ padding: 20, backgroundColor: '#30e3ca' }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                        <Text style={{ color: "#fff", fontSize: 20 }}>{data.to}</Text>
                        <Text style={{ color: "#fff", fontSize: 20 }}>{data.from}</Text>
                    </View>
                    <Text style={{ color: "#fff", fontSize: 20, textAlign: "center" }}>{data.price} VND</Text>
                    <Text style={{ color: "#fff", fontSize: 20, textAlign: "center" }}>{`${getDate(data.date)} / ${getMonth(data.date)} / ${getYear(data.date)}`}</Text>
                </View>
            </View>
        </SafeAreaView>
        : <ActivityIndicator />
    );
};
