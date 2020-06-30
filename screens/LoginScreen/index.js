import React, { useState } from "react";
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  ScrollView,
  AsyncStorage,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import styles from "./styles";
import Card from "../../components/UI/Card";
import Input from "../../components/UI/Input";
import Btn from "../../components/UI/Btn";
import { LOGIN } from "./saga/reducer";

export const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [screen, setScreen] = useState(true);
  const [formState, setFormState] = React.useState({
    username: "", password: "", name: "", phone_number: ""
  })
  const { isLoged } = useSelector(state => state.LoginReducer)
  const errorAlert = (error) => {
    Alert.alert("Error", error, [{ text: "OK" }], { cancelable: false });
  };

  const inputHandler = ({ text, key }) => {
    setFormState({ ...formState, [key]: text })
  };

  const authHandler = (type) => {
    dispatch({ type: LOGIN, formState })
  };

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ flexGrow: 0.5 }}>
        <View style={styles.screen}>
          <Image
            style={styles.image}
            source={require("../../assets/images/5228.jpg")}
          />
          <View style={styles.container}>
            <Text style={styles.title}>{screen ? "LOGIN" : "REGISTER"}</Text>
            <Card style={styles.inputContainer}>
              {!screen && <React.Fragment>
                <Input
                  placeholder={"Họ tên"}
                  returnKeyType="next"
                  autoCorrent={false}
                  autoCapitalize={"none"}
                  style={styles.textInput}
                  value={formState.name}
                  onChangeText={(text) => inputHandler({ text, key: "name" })}
                />
                <Input
                  placeholder={"Số điện thoại"}
                  returnKeyType="next"
                  autoCorrent={false}
                  autoCapitalize={"none"}
                  style={styles.textInput}
                  value={formState.phone_number}
                  onChangeText={(text) => inputHandler({ text, key: "phone_number" })}
                />
              </React.Fragment>}
              <Input
                keyboardType={"email-address"}
                onChangeText={(text) => inputHandler({ text, key: "email" })}
                value={formState.email}
                autoCapitalize={"none"}
                autoCorrent={false}
                placeholder={"Email"}
                style={styles.textInput}
                returnKeyType="next"
              />
              <Input
                onChangeText={(text) => inputHandler({ text, key: "password" })}
                value={formState.password}
                placeholder={"Password"}
                style={styles.textInput}
                secureTextEntry={true}
                returnKeyType="done"
              />
              <View style={styles.buttonContainer}>
                {screen ? (
                  <Btn
                    style={styles.btn}
                    onPress={() => {
                      authHandler("LOGIN");
                    }}
                  >
                    LOGIN
                  </Btn>
                ) : (
                    <Btn
                      style={styles.btn}
                      onPress={() => {
                        authHandler("REGISTER");
                      }}
                    >
                      REGISTER
                    </Btn>
                  )}
              </View>
              <TouchableOpacity
                activeOpacity={0.6}
                style={styles.switcher}
                onPress={() => {
                  setScreen((prevState) => {
                    return !prevState;
                  });
                }}
              >
                <Text style={styles.tag}>
                  {screen ? "Need an account?" : "Have an account?"}
                </Text>
                <Text style={{ ...styles.tag, ...styles.tagSwitcher }}>
                  {screen ? "Register Here" : "Login Here"}
                </Text>
              </TouchableOpacity>
            </Card>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

