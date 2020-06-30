import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import * as Screens from "../../Screens";

const BookingStack = createStackNavigator();
const BookingStackScreen = () => (
    <BookingStack.Navigator
        screenOptions={(route) => ({
            headerTitleAlign: "center"
        })}
    >
        <BookingStack.Screen
            name="booking"
            component={Screens.MyBooking}
            options={{
                title: "Vé của tôi",
            }}
        />
    </BookingStack.Navigator>
);


const HomeStack = createStackNavigator();
const HomeStackScreen = () => (
    <HomeStack.Navigator
        initialRouteName="home"
        headerMode="screen"
    >
        <HomeStack.Screen
            name="home"
            component={Screens.HomeScreen}
            options={{
                title: "Danh sách tuyến đi",
            }}  
        />
        <HomeStack.Screen
            name="info"
            component={Screens.InfoScreen}
            options={({ route }) => {
                return { headerTitle: route.params.name };
            }}
        />
        <HomeStack.Screen
            name="bookingform"
            component={Screens.BookingFormScreen}
            options={({ route }) => {
                return { headerTitle: route.params.name };
            }}
        />
        {/* <HomeStack.Screen
            name="info"
            component={Info}
            options={({ route }) => {
                return { headerTitle: route.params.name };
            }}
        />
        <HomeStack.Screen
            name="searchBar"
            component={SearchBar}
            options={({ route }) => {
                return { headerTitle: "Search Trains" };
            }}
        />
        <HomeStack.Screen
            name="bookingForm"
            component={BookingForm}
            options={({ route }) => {
                return { headerTitle: "Apply for Ticket" };
            }}
        /> */}
    </HomeStack.Navigator>
);

const TabNavigator = createBottomTabNavigator();
export const TabNavigatorScreen = () => (
    <TabNavigator.Navigator
        tabBarOptions={{
            labelStyle: {
                fontSize: 14,
            },
            activeTintColor: '#000',
            inactiveTintColor: "black",
        }}
    >
        <TabNavigator.Screen
            name="home"
            component={HomeStackScreen}
            options={{
                title: "Trang chủ",
            }}
        />
        <TabNavigator.Screen
            name="booking"
            component={BookingStackScreen}
            options={{
                title: "My Bookings",
            }}
        />
    </TabNavigator.Navigator>
);