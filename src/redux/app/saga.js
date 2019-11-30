import { takeLatest, put, call } from "redux-saga/effects";
import * as actions from './actions';
import appTypes from "./types";

import api from "../../api/api";


function* getBucketList(action) {
  try {
    const res = yield call(api.get, 'todo-app-backend/bucket-list/');
    if (res.data.status) {
      yield put(actions.getBucketListSuccess(res.data));
    } else {
      yield put(actions.getBucketListError(res.data));
    }
  } catch (e) {
    yield put(actions.getBucketListError(e));
  }
}
function* createBucketList(action) {
  try {
    const res = yield call(api.post, 'todo-app-backend/bucket-list/', action.payload);
    if (res.data.status) {
      yield put(actions.getBucketListRequest());
      yield put(actions.createBucketListSuccess(res.data));
    } else {
      yield put(actions.createBucketListError(res.data));
    }
  } catch (e) {
    yield put(actions.createBucketListError(e));
  }
}
function* updateBucketList(action) {
  try {
    const res = yield call(api.patch, 'todo-app-backend/bucket-list/', action.payload);
    if (res.data.status) {
      yield put(actions.getBucketListRequest());
      yield put(actions.updateBucketListSuccess(res.data));
    } else {
      yield put(actions.updateBucketListError(res.data));
    }
  } catch (e) {
    yield put(actions.updateBucketListError(e));
  }
}
function* deleteBucketList(action) {
  try {
    const res = yield call(api.delete, 'todo-app-backend/bucket-list/' + action.payload + "/");
    if (res.data.status) {
      yield put(actions.getBucketListRequest());
      yield put(actions.deleteBucketListSuccess(res.data));
    } else {
      yield put(actions.deleteBucketListError(res.data));
    }
  } catch (e) {
    yield put(actions.deleteBucketListError(e));
  }
}

function* createTask(action) {
  try {
    const res = yield call(api.post, 'todo-app-backend/todo-list/', action.payload);
    if (res.data.status) {
      yield put(actions.getBucketListRequest());
      yield put(actions.createTaskSuccess(res.data));
    } else {
      yield put(actions.createTaskError(res.data));
    }
  } catch (e) {
    yield put(actions.createTaskError(e));
  }
}

function* updateTask(action) {
  try {
    const res = yield call(api.patch, 'todo-app-backend/todo-list/', action.payload);
    if (res.data.status) {
      yield put(actions.getBucketListRequest());
      yield put(actions.updateTaskSuccess(res.data));
    } else {
      yield put(actions.updateTaskError(res.data));
    }
  } catch (e) {
    yield put(actions.updateTaskError(e));
  }
}

function* deleteTask(action) {
  try {
    const res = yield call(api.delete, 'todo-app-backend/todo-list/' + action.payload + "/");
    if (res.data.status) {
      yield put(actions.getBucketListRequest());
      yield put(actions.deleteTaskSuccess(res.data));
    } else {
      yield put(actions.deleteTaskError(res.data));
    }
  } catch (e) {
    yield put(actions.deleteTaskError(e));
  }
}


export default function* appSaga() {
  yield takeLatest(appTypes.GET_BUCKET_LIST_REQUEST, getBucketList);
  yield takeLatest(appTypes.CREATE_BUCKET_LIST_REQUEST, createBucketList);
  yield takeLatest(appTypes.UPDATE_BUCKET_LIST_REQUEST, updateBucketList);
  yield takeLatest(appTypes.DELETE_BUCKET_LIST_REQUEST, deleteBucketList);
  yield takeLatest(appTypes.CREATE_TODO_REQUEST, createTask);
  yield takeLatest(appTypes.UPDATE_TODO_REQUEST, updateTask);
  yield takeLatest(appTypes.DELETE_TODO_REQUEST, deleteTask);
}
