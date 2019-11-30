import { takeLatest, put, call } from "redux-saga/effects";
import * as actions from './actions';
import authTypes from "./types";

import api from "../../api/api";


function* authRequest(action) {
  try {
    const res = yield call(api.post, 'todo-app-backend/login/', action.payload);
    if (res.data.status) {
      yield put(actions.authRequestSuccess(res.data));
      action.cb(res.data)
    } else {
      action.cb(res.data)
      yield put(actions.authRequestError(res.data));
    }
  } catch (e) {
    yield put(actions.authRequestError(e));
  }
}

function* registerRequest(action) {
  try {
    const res = yield call(api.post, 'todo-app-backend/register/', action.payload);
    if (res.data.status) {
      action.cb(res.data)
      yield put(actions.registerSuccess(res.data));
    } else {
      action.cb(res.data)
      yield put(actions.registerError(res.data));
    }
  } catch (e) {
    yield put(actions.registerError(e));
  }
}

//not done yet
function* logoutRequest(action) {
  try {
    yield put(actions.logoutSuccess({}));
    localStorage.removeItem('token');
    localStorage.removeItem('refreshtkn');
    window.location.reload();
    // const res = yield call(api.post, 'todo-app-backend/logout/', action.payload);
    // if (res.data.status) {
    //   yield put(actions.logoutSuccess(res.data));
    // } else {
    //   yield put(actions.logoutError(res.data));
    // }
  } catch (e) {
    yield put(actions.logoutError(e));
  }
}

export default function* authSaga() {
  yield takeLatest(authTypes.AUTH_REQUEST, authRequest);
  yield takeLatest(authTypes.REGISTER_REQUEST, registerRequest);
  yield takeLatest(authTypes.LOGOUT_REQUEST, logoutRequest);
}
