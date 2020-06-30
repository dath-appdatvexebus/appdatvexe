import * as React from "react";
import { View, StyleSheet, Image, StatusBar, Text, ActivityIndicator } from "react-native";

export const SplashScreen = () => {
    return <View style={styles.container}>
        <Text>asdasd</Text>
        <View style={styles.logo_container}>
            <Image
                style={{ width: 80, height: 100 }}
                source={require('./ios.png')}
            />
            <Text style={{ textAlign: 'center', color: 'white', fontSize: 20 }}>Hara Hotdeal</Text>
        </View>
        <ActivityIndicator size="large" color="#fff" />
        <StatusBar barStyle="light-content" />
    </View>
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#232A79"
    },
    logo_container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    }
})