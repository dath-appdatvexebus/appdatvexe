import { StyleSheet, Dimensions } from "react-native";
export default StyleSheet.create({
    fab: {
        marginHorizontal: 10,
        marginVertical: 10,
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },
    icon: {
        backgroundColor: '#000',
        fontSize: 50,
        borderRadius: 50,
        color: '#000',
        elevation: 10
    },
    loading: {
        height: Dimensions.get('screen').height / 1.5,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
