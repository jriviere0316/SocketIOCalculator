import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* sendEquation(action) {
  const equation = action.payload;
  console.log(equation);
  yield axios({
    method: "POST",
    url: "/api/calculator",
    data: action,
  });
  yield put({
    type: "GET_EQUATIONS",
  });
}

function* getEquations(action) {
  const response = yield axios({
    method: "GET",
    url: "/api/calculator",
  });

  //console.log("back from GET equations with:", response.data);
  yield put({ type: "SET_EQUATIONS", payload: response.data });
}

function* userSaga() {
  yield takeLatest("SEND_EQUATION", sendEquation);
  yield takeLatest("GET_EQUATIONS", getEquations);
}

export default userSaga;
