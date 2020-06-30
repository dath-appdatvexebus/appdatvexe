import { combineReducers } from 'redux';
import HomeReducer from "../Screens/HomeScreen/saga/reducer";
import LoginReducer from "../Screens/LoginScreen/saga/reducer";

const allReducers = {
    HomeReducer,LoginReducer
};

export default combineReducers({
    ...allReducers,
});