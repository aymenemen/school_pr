import {
  COURSE_LIST_REQUEST,
  COURSE_LIST_SUCCESS,
  COURSE_LIST_FAIL,
  SPECIFIC_COURSE_LIST_REQUEST,
  SPECIFIC_COURSE_LIST_SUCCESS,
  SPECIFIC_COURSE_LIST_FAIL,
  COURSE_CREATE_REQUEST,
  COURSE_CREATE_SUCCESS,
  COURSE_CREATE_FAIL,
  COURSE_UPDATE_REQUEST,
  COURSE_UPDATE_SUCCESS,
  COURSE_UPDATE_FAIL,
  COURSE_DELETE_REQUEST,
  COURSE_DELETE_SUCCESS,
  COURSE_DELETE_FAIL
} from '../constants/courseConstants';

// Utility function to handle loading state
const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case COURSE_LIST_REQUEST:
    case SPECIFIC_COURSE_LIST_REQUEST:
    case COURSE_CREATE_REQUEST:
    case COURSE_UPDATE_REQUEST:
    case COURSE_DELETE_REQUEST:
      return true;
    case COURSE_LIST_SUCCESS:
    case COURSE_LIST_FAIL:
    case SPECIFIC_COURSE_LIST_SUCCESS:
    case SPECIFIC_COURSE_LIST_FAIL:
    case COURSE_CREATE_SUCCESS:
    case COURSE_CREATE_FAIL:
    case COURSE_UPDATE_SUCCESS:
    case COURSE_UPDATE_FAIL:
    case COURSE_DELETE_SUCCESS:
    case COURSE_DELETE_FAIL:
      return false;
    default:
      return state;
  }
};

export const courseListReducer = (state = { courses: [], loading: false, error: null }, action) => {
  switch (action.type) {
    case COURSE_LIST_REQUEST:
      return { ...state, loading: true, error: null };
    case COURSE_LIST_SUCCESS:
      return { ...state, loading: false, courses: action.payload, error: null };
    case COURSE_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const specificCourseListReducer = (state = { spcfcourses: [], loading: false, error: null }, action) => {
  switch (action.type) {
    case SPECIFIC_COURSE_LIST_REQUEST:
      return { ...state, loading: true, error: null };
    case SPECIFIC_COURSE_LIST_SUCCESS:
      return { ...state, loading: false, spcfcourses: action.payload, error: null };
    case SPECIFIC_COURSE_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const courseCreateReducer = (state = { loading: false, success: false, course: null, error: null }, action) => {
  switch (action.type) {
    case COURSE_CREATE_REQUEST:
      return { ...state, loading: true, success: false, error: null };
    case COURSE_CREATE_SUCCESS:
      return { ...state, loading: false, success: true, course: action.payload, error: null };
    case COURSE_CREATE_FAIL:
      return { ...state, loading: false, success: false, error: action.payload };
    default:
      return state;
  }
};

export const courseUpdateReducer = (state = { loading: false, success: false, updatedCourse: null, error: null }, action) => {
  switch (action.type) {
    case COURSE_UPDATE_REQUEST:
      return { ...state, loading: true, success: false, error: null };
    case COURSE_UPDATE_SUCCESS:
      return { ...state, loading: false, success: true, updatedCourse: action.payload, error: null };
    case COURSE_UPDATE_FAIL:
      return { ...state, loading: false, success: false, error: action.payload };
    default:
      return state;
  }
};

export const courseDeleteReducer = (state = { loading: false, success: false, courseDeleted: null, error: null }, action) => {
  switch (action.type) {
    case COURSE_DELETE_REQUEST:
      return { ...state, loading: true, success: false, error: null };
    case COURSE_DELETE_SUCCESS:
      return { ...state, loading: false, success: true, courseDeleted: action.payload, error: null };
    case COURSE_DELETE_FAIL:
      return { ...state, loading: false, success: false, error: action.payload };
    default:
      return state;
  }
};

export default {
  courseListReducer,
  specificCourseListReducer,
  courseCreateReducer,
  courseUpdateReducer,
  courseDeleteReducer
};
