import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* sendEquation(action) {
  try {
    yield axios({
      method: "POST",
      url: "/api/calculator",
      data: action,
    });
    yield put({
      type: "GET_EQUATIONS",
    });
  } catch (err) {
    console.log("error", err);
  }
}

function* getEquations(action) {
  const response = yield axios({
    method: "GET",
    url: "/api/calculator",
  });

  yield put({ type: "SET_EQUATIONS", payload: response.data });
}

function* userSaga() {
  yield takeLatest("SEND_EQUATION", sendEquation);
  yield takeLatest("GET_EQUATIONS", getEquations);
}

export default userSaga;
