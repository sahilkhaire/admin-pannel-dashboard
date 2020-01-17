import { fork, all } from "redux-saga/effects";
import { map, unary } from "lodash/fp";

import appSaga from "./app/saga"

export default function* rootSaga(getState) {
  const _sagas = [ appSaga];
  yield all(map(unary(fork), _sagas));
}
