import appTypes from "./types";

const INIT_STATE = {
  loading: false,
  data: [],
  error: null,
  active_mentor: ""
};

const appReducer = (state = INIT_STATE, action = {}) => {
  switch (action.type) {
    case appTypes.GET_MENTOR_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case appTypes.GET_MENTOR_LIST_SUCCESS:
      if (!state.active_mentor && action.payload.data.length) {
        console.log(action.payload.data[0]._id)
        return {
          ...state,
          data: action.payload.data,
          loading: false,
          active_mentor: action.payload.data[0]._id
        };
      } else {
        return {
          ...state,
          data: action.payload.data,
          loading: false
        };
      }
    case appTypes.GET_MENTOR_LIST_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case appTypes.ADD_MENTOR_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case appTypes.ADD_MENTOR_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false
      };
    case appTypes.ADD_MENTOR_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case appTypes.DELETE_MENTOR_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case appTypes.DELETE_MENTOR_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false
      };
    case appTypes.DELETE_MENTOR_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case appTypes.ADD_TASK_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case appTypes.ADD_TASK_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false
      };
    case appTypes.ADD_TASK_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case appTypes.DELETE_TASK_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case appTypes.DELETE_TASK_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false
      };
    case appTypes.DELETE_TASK_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case appTypes.UPDATE_ACTIVE_MENTOR:
      return {
        ...state,
        active_mentor: action.payload
      };
    default:
      return state;
  }
};

export default appReducer;
