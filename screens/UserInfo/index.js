import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  SafeAreaView,
  AsyncStorage,
} from "react-native";
import { useDispatch } from "react-redux";





export const UserInfo = (props) => {
  const getParams = props.route.params
  const dispatch = useDispatch();
  const [name, setNmae] = React.useState("")
  React.useEffect(() => {
    // async function boot() {

    // }

    AsyncStorage.getItem('userInfo').then(rsp => {
      const a = JSON.parse(rsp)
      setNmae(a.email)
    })
  })
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.profile}>
          <Image
            style={styles.image}
            source={require("../../assets/images/Group2.png")}
          />
          <View style={styles.staticInfo}>
            <Text style={styles.infoText}> ID: </Text>
            <Text style={styles.text}>{name}</Text>
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.logoutBtn}
          onPress={() => {
            dispatch({ type: "LOGOUT" })
          }}
        >
          <Text style={styles.btnText}> LOGOUT </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  profile: {
    alignItems: 'center'
  },
  image: {
    marginVertical: 20,
    height: 150,
    width: 150,
    resizeMode: 'contain'
  },
  staticInfo: {
    flexDirection: 'row',
    backgroundColor: '#fefefe',
    padding: 10,
    borderRadius: 10,
    width: Dimensions.get('screen').width * 0.95,
    marginVertical: 10
  },
  infoText: {
    fontSize: 16,
    marginHorizontal: 5
  },
  text: {
    fontSize: 16
  },
  logoutBtn: {
    position: "absolute",
    bottom: 0,
    alignItems: "center",
    padding: 10,
    backgroundColor: '#11999e',

    width: Dimensions.get("screen").width,
  },
  btnText: {
    color: '#fefefe',
    letterSpacing: 1
  },
});
