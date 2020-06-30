import { LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS } from "./reducer";
import { takeLatest, call, put, delay } from "redux-saga/effects";
import { Api } from "../../../Api";
import {
    AsyncStorage,
} from "react-native";
export default function* watcherSagaTakeLatest() {
    yield takeLatest(LOGIN, workerSaga);
}

const saveData = (action) => {
    return AsyncStorage.setItem('userInfo', JSON.stringify({ email: "hoanghai@gmail.com", password: "12345678" }))
}

const postLogin = (email, password) => {
    return Api.post('/login', JSON.stringify({ email: "hoanghai@gmail.com", password: "12345678" }))
}

function* workerSaga(action) {
    try {
        const { data } = yield call(postLogin, action.formState.email, action.formState.password);
        console.log(data)
        if (data.status == "true") {
            yield call(saveData, action)
            yield put({ type: LOGIN_SUCCESS, isLoged: true })
        } else {
            yield put({ type: LOGIN_FAILURE, err: data.message })
        }
    } catch (err) {
        yield put({ type: LOGIN_FAILURE, err });
    }
}