import { takeLatest, call, put, delay } from "redux-saga/effects";
import { Api } from "../../../Api";
import { API_CALL_SUCCESS, API_CALL_REQUEST, API_CALL_FAILURE } from "./reducer";

export default function* watcherSagaTakeLatest() {
    yield takeLatest(API_CALL_REQUEST, workerSaga);
}

const danhsachLichChay = () => {
    return Api.get('/lichchay')
}

function* workerSaga() {
    try {
        yield delay(2000)
        const { data } = yield call(danhsachLichChay);
        yield put({ type: API_CALL_SUCCESS, data })
    } catch (err) {
        yield put({ type: API_CALL_FAILURE, err });
    }
}