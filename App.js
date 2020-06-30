import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Provider, useSelector, useDispatch } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { AsyncStorage } from 'react-native';

import rootSaga from "./Store/RootSaga";
import combinedReducers from "./Store/rootReducers";
import { AuthStackScreen } from "./Navigator/AuthStack";
import { TabNavigatorScreen } from "./Navigator/HomeStack";
import * as  Screens from "./Screens";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = process.env.NODE_ENV === 'production'
  ? compose
  : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  combinedReducers,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

const Drawer = createDrawerNavigator();

const DrawerScreen = () => (
  <Drawer.Navigator drawerPosition="right" drawerType="front" >
    <Drawer.Screen
      name="home"
      component={TabNavigatorScreen}
      options={{ title: "HOME" }}
    />
    <Drawer.Screen name="userinfo" component={Screens.UserInfo} options={{ title: "Thông tin" }} />
  </Drawer.Navigator>
);

const App = () => {
  return (
    <Provider store={store}>
      <Test />
    </Provider>
  );
};

export const Test = () => {
  const { isLoged } = useSelector(state => state.LoginReducer)
  const dispatch = useDispatch()

  React.useEffect(() => {
    AsyncStorage.getItem("userInfo").then((rsp) => {
      console.log(rsp)
      if (rsp)
        dispatch({ type: "LOGIN_SUCCESS", isLoged: true })
      
    })
  }, [])
  return <NavigationContainer>
    {isLoged ? <DrawerScreen />
      : <AuthStackScreen />}
  </NavigationContainer>
}

export default App;
