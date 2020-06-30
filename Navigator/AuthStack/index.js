import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import * as Screens from "../../Screens";
const AuthStack = createStackNavigator();
export const AuthStackScreen = () =>
    <AuthStack.Navigator initialRouteName="LoginScreen" screenOptions={{ headerShown: false }}>
        <AuthStack.Screen name="LoginScreen" component={Screens.LoginScreen} />
        <AuthStack.Screen name="SplashScreen" component={Screens.SplashScreen} />
    </AuthStack.Navigator>