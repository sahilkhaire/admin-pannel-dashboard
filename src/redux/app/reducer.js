import appTypes from "./types";

const INIT_STATE = {
  loading: false,
  data: [],
  error: null
};

const appReducer = (state = INIT_STATE, action = {}) => {
  switch (action.type) {
    case appTypes.GET_BUCKET_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case appTypes.GET_BUCKET_LIST_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false
      };
    case appTypes.GET_BUCKET_LIST_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

export default appReducer;
