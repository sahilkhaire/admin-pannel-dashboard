import { fork, all } from "redux-saga/effects";
import { map, unary } from "lodash/fp";

import authSaga from "./auth/saga";
import appSaga from "./app/saga"

export default function* rootSaga(getState) {
  const _sagas = [authSaga, appSaga];
  yield all(map(unary(fork), _sagas));
}
