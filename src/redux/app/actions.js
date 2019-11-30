import appTypes from "./types";


export function getBucketListRequest(req) {
  return {
    type: appTypes.GET_BUCKET_LIST_REQUEST,
    payload: req
  };
}

export function getBucketListSuccess(req) {
  return {
    type: appTypes.GET_BUCKET_LIST_SUCCESS,
    payload: req
  };
}

export function getBucketListError(req) {
  return {
    type: appTypes.GET_BUCKET_LIST_ERROR,
    payload: req
  };
}

export function updateBucketListRequest(req) {
  return {
    type: appTypes.UPDATE_BUCKET_LIST_REQUEST,
    payload: req
  };
}

export function updateBucketListSuccess(req) {
  return {
    type: appTypes.UPDATE_BUCKET_LIST_SUCCESS,
    payload: req
  };
}

export function updateBucketListError(req) {
  return {
    type: appTypes.UPDATE_BUCKET_LIST_ERROR,
    payload: req
  };
}

export function deleteBucketListRequest(req) {
  return {
    type: appTypes.DELETE_BUCKET_LIST_REQUEST,
    payload: req
  };
}

export function deleteBucketListSuccess(req) {
  return {
    type: appTypes.DELETE_BUCKET_LIST_SUCCESS,
    payload: req
  };
}

export function deleteBucketListError(req) {
  return {
    type: appTypes.DELETE_BUCKET_LIST_ERROR,
    payload: req
  };
}

export function createBucketListRequest(req) {
  return {
    type: appTypes.CREATE_BUCKET_LIST_REQUEST,
    payload: req
  };
}

export function createBucketListSuccess(req) {
  return {
    type: appTypes.CREATE_BUCKET_LIST_SUCCESS,
    payload: req
  };
}

export function createBucketListError(req) {
  return {
    type: appTypes.CREATE_BUCKET_LIST_ERROR,
    payload: req
  };
}

export function createTaskRequest(req) {
  return {
    type: appTypes.CREATE_TODO_REQUEST,
    payload: req
  };
}

export function createTaskSuccess(req) {
  return {
    type: appTypes.CREATE_TODO_SUCCESS,
    payload: req
  };
}

export function createTaskError(req) {
  return {
    type: appTypes.CREATE_TODO_ERROR,
    payload: req
  };
}

export function updateTaskRequest(req) {
  return {
    type: appTypes.UPDATE_TODO_REQUEST,
    payload: req
  };
}

export function updateTaskSuccess(req) {
  return {
    type: appTypes.UPDATE_TODO_SUCCESS,
    payload: req
  };
}

export function updateTaskError(req) {
  return {
    type: appTypes.UPDATE_TODO_ERROR,
    payload: req
  };
}

export function deleteTaskRequest(req) {
  return {
    type: appTypes.DELETE_TODO_REQUEST,
    payload: req
  };
}

export function deleteTaskSuccess(req) {
  return {
    type: appTypes.DELETE_TODO_SUCCESS,
    payload: req
  };
}

export function deleteTaskError(req) {
  return {
    type: appTypes.DELETE_TODO_ERROR,
    payload: req
  };
}
