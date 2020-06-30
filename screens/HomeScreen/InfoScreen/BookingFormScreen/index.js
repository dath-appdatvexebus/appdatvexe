import React, { useState } from "react";
import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    AsyncStorage,
    Alert,
} from "react-native";
import styles from "./styles";
import { useDispatch } from "react-redux";

import DateTimePicker from '@react-native-community/datetimepicker';

export const BookingFormScreen = (props) => {
    const dispatch = useDispatch();
    const { Gia, TenLC } = props.route.params.item
    console.log(Gia, TenLC)
    const [a, b] = TenLC.split('-')
    console.log(a, b)
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const onChange = (event, selectedDate) => {
        console.log(selectedDate)
        const currentDate = selectedDate || date;
        setDate(currentDate);
    };

    const bookingHandler = async () => {
        const data = {
            from: a,
            to: b,
            price: Gia,
            date: date
        }
        await AsyncStorage.mergeItem('listTicket', JSON.stringify(data))
        Alert.alert('Thông báo',
            "Đặt vé thành công",
            [{ text: "OK", onPress: () => props.navigation.navigate('home') }],
            { cancelable: false })
    };
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.screen}>
                    <Text style={{ fontSize: 30, color: '#11999e' }}>Chọn ngày đi </Text>
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={'date'}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                    />
                    <View>
                        <Text style={{ textAlign: "center", marginVertical: 10, fontSize: 20 }}>THÔNG TIN ĐẶT VÉ</Text>
                        <View style={styles.form} >
                            <Text>Từ: {a}</Text>
                            <Text>Đến: {b}</Text>
                            <Text>Giá vé: {Gia} VND</Text>
                        </View>
                    </View>
                    <View style={styles.fabButton}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={styles.fab}
                            onPress={() => {
                                bookingHandler();
                            }}
                        >
                            <Text style={styles.fabText}> Đặt vé </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

