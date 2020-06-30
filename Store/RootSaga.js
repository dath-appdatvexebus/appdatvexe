import { all } from 'redux-saga/effects';
import homeAction from "../Screens/HomeScreen/saga/action";
import LoginAction from "../Screens/LoginScreen/saga/action";

export default function* rootSaga() {
    yield all([
        homeAction(),
        LoginAction()
    ])
}