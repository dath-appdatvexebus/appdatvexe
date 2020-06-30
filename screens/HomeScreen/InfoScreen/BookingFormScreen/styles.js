import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    screen: {
        padding: 10,
    },
    form: {
        // alignItems: "center",
        padding: 20,
        backgroundColor: "#fefefe",
        marginBottom: 20
    },
    input: {
        width: (Dimensions.get("screen").width * 80) / 100,
    },
    fabButton: {
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
        // android properties
        elevation: 6,
    },
    fabText: {
        fontSize: 24,
        color: '#fefefe',
        marginHorizontal: 5,
    }
});
