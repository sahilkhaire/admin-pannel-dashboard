import appTypes from "./types";


export function getMentorListRequest(req) {
  return {
    type: appTypes.GET_MENTOR_LIST_REQUEST,
    payload: req
  };
}
export function getMentorListSuccess(req) {
  return {
    type: appTypes.GET_MENTOR_LIST_SUCCESS,
    payload: req
  };
}
export function getMentorListError(req) {
  return {
    type: appTypes.GET_MENTOR_LIST_ERROR,
    payload: req
  };
}


export function addMentorRequest(req) {
  return {
    type: appTypes.ADD_MENTOR_REQUEST,
    payload: req
  };
}
export function addMentorSuccess(req) {
  return {
    type: appTypes.ADD_MENTOR_SUCCESS,
    payload: req
  };
}
export function addMentorError(req) {
  return {
    type: appTypes.ADD_MENTOR_ERROR,
    payload: req
  };
}


export function deleteMentorRequest(req) {
  return {
    type: appTypes.DELETE_MENTOR_REQUEST,
    payload: req
  };
}
export function deleteMentorSuccess(req) {
  return {
    type: appTypes.DELETE_MENTOR_SUCCESS,
    payload: req
  };
}
export function deleteMentorError(req) {
  return {
    type: appTypes.DELETE_MENTOR_ERROR,
    payload: req
  };
}


export function addTaskRequest(req) {
  return {
    type: appTypes.ADD_TASK_REQUEST,
    payload: req
  };
}
export function addTaskSuccess(req) {
  return {
    type: appTypes.ADD_TASK_SUCCESS,
    payload: req
  };
}
export function addTaskError(req) {
  return {
    type: appTypes.ADD_TASK_ERROR,
    payload: req
  };
}

export function deleteTaskRequest(req) {
  return {
    type: appTypes.DELETE_TASK_REQUEST,
    payload: req
  };
}
export function deleteTaskSuccess(req) {
  return {
    type: appTypes.DELETE_TASK_SUCCESS,
    payload: req
  };
}
export function deleteTaskError(req) {
  return {
    type: appTypes.DELETE_TASK_ERROR,
    payload: req
  };
}

export function updateActiveMentorRequest(req) {
  return {
    type: appTypes.UPDATE_ACTIVE_MENTOR,
    payload: req
  };
}