import authTypes from "./types";

const INIT_STATE = { loading: false };

const authReducer = (state = INIT_STATE, action = {}) => {
  switch (action.type) {
    case authTypes.AUTH_REQUEST:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};

export default authReducer;
