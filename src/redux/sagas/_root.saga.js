import { all } from 'redux-saga/effects';
import calculatorSaga from './calculations.saga';
export default function* rootSaga() {
  yield all([
    calculatorSaga(),
  ]);
}
