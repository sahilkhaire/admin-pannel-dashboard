import { takeLatest, put, call } from "redux-saga/effects";
import * as actions from './actions';
import appTypes from "./types";

import api from "../../api/api";


function* getMentorList(action) {
  try {
    const res = yield call(api.get, 'mentor');
    if (res.status) {
      yield put(actions.getMentorListSuccess(res.data));
    } else {
      yield put(actions.getMentorListError(res.data));
    }
  } catch (e) {
    yield put(actions.getMentorListError(e));
  }
}

function* addMentor(action) {
  try {
    const res = yield call(api.post, 'mentor/', action.payload);
    if (res.status) {
      console.log("1111111111111")
      yield put(actions.getMentorListSuccess(res.data));
    } else {
      console.log("222222222")
      yield put(actions.getMentorListError(res.data));
    }
  } catch (e) {
    console.log("3333333333333", e)
    yield put(actions.getMentorListError(e));
  }
}
function* deleteMentor(action) {
  try {
    const res = yield call(api.delete, 'mentor/' + action.payload.mentor_id);
    if (res.status) {
      yield put(actions.getMentorListSuccess(res.data));
      if (action.payload.new_active_id) {
        yield put(actions.updateActiveMentorRequest(action.payload.new_active_id));
      }
    } else {
      yield put(actions.getMentorListError(res.data));
    }
  } catch (e) {
    yield put(actions.getMentorListError(e));
  }
}
function* addTask(action) {
  try {
    const res = yield call(api.post, 'mentor/task', action.payload);
    if (res.status) {
      yield put(actions.getMentorListSuccess(res.data));
    } else {
      yield put(actions.getMentorListError(res.data));
    }
  } catch (e) {
    yield put(actions.getMentorListError(e));
  }
}
function* deleteTask(action) {
  try {
    const res = yield call(api.delete, `mentor/task/${action.payload.mentor_id}/${action.payload.task_id}`);
    if (res.status) {
      yield put(actions.getMentorListSuccess(res.data));
    } else {
      yield put(actions.getMentorListError(res.data));
    }
  } catch (e) {
    yield put(actions.getMentorListError(e));
  }
}

export default function* appSaga() {
  yield takeLatest(appTypes.GET_MENTOR_LIST_REQUEST, getMentorList);
  yield takeLatest(appTypes.ADD_MENTOR_REQUEST, addMentor);
  yield takeLatest(appTypes.DELETE_MENTOR_REQUEST, deleteMentor);
  yield takeLatest(appTypes.ADD_TASK_REQUEST, addTask);
  yield takeLatest(appTypes.DELETE_TASK_REQUEST, deleteTask);
}
