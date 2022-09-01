import { takeLatest, put, call, all } from "redux-saga/effects";
import { LOGIN_REQUEST } from "./contants";
import { loginRequestServices } from "../../../Services/apiLoginServices";
import { saveInfoLogin, setLoading } from "./action";

function* loginRequestSaga({ payload }) {
  try {
    yield put(setLoading(true));
    const response = yield call(loginRequestServices, payload.params);
    console.log(response.data.result.token);
    yield all([
      put(setLoading(false)),
      put(saveInfoLogin(response.data.result)),
    ]);
    console.log(response.data.result);
    if (response.data.result) {
      payload.navigate("/");
    }
    
  } catch (error) {
    yield put(setLoading(false));
  }
}

export function* listMyLogin() {
  yield takeLatest(LOGIN_REQUEST, loginRequestSaga);
}
