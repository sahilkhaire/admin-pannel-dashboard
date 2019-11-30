import authTypes from "./types";

export function authRequest(req,cb) {
  return {
    type: authTypes.AUTH_REQUEST,
    payload: req,
    cb
  };
}

export function authRequestSuccess(req) {
  return {
    type: authTypes.AUTH_SUCCESS,
    payload: req
  };
}

export function authRequestError(req) {
  return {
    type: authTypes.AUTH_ERROR,
    payload: req
  };
}

export function logoutRequest(req) {
  return {
    type: authTypes.LOGOUT_REQUEST,
    payload: req
  };
}

export function logoutSuccess(req) {
  return {
    type: authTypes.LOGOUT_SUCCESS,
    payload: req
  };
}

export function logoutError(req) {
  return {
    type: authTypes.LOGOUT_ERROR,
    payload: req
  };
}

export function registerRequest(req, cb) {
  return {
    type: authTypes.REGISTER_REQUEST,
    payload: req,
    cb
  };
}

export function registerSuccess(req) {
  return {
    type: authTypes.REGISTER_SUCCESS,
    payload: req
  };
}

export function registerError(req) {
  return {
    type: authTypes.REGISTER_ERROR,
    payload: req
  };
}