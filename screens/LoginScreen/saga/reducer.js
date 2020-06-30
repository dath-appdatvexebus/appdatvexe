import { AsyncStorage } from "react-native";

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';


const initialState = {
    fetching: false,
    isLoged: false,
    errror: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                fetching: true,
            }
        case LOGOUT:
            AsyncStorage.clear()
            return {
                ...state,
                isLoged: false
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                fetching: false,
                isLoged: action.isLoged
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                fetching: false,
                error: action.err
            }
        default:
            return state;
    }
}

export default reducer;