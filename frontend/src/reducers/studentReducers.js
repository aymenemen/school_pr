import { 
    STUDENT_LOGIN_REQUEST,
    STUDENT_LOGIN_SUCCESS,
    STUDENT_LOGIN_FAIL,
    STUDENT_LOGOUT,
    STUDENT_REGISTER_REQUEST,
    STUDENT_REGISTER_SUCCESS,
    STUDENT_REGISTER_FAIL 
  } from '../constants/stundentConstants'; // Import student constants
  
  const initialState = {
    loading: false,
    studentInfo: null,
    error: null
  };
  
  export const studentLoginReducer = (state = initialState, action) => {
    switch (action.type) {
      case STUDENT_LOGIN_REQUEST:
        return { ...state, loading: true, error: null };
  
      case STUDENT_LOGIN_SUCCESS:
        return { ...state, loading: false, studentInfo: action.payload, error: null };
  
      case STUDENT_LOGIN_FAIL:
        return { ...state, loading: false, error: action.payload || 'Login failed' };
  
      case STUDENT_LOGOUT:
        return { ...initialState }; // Reset state to initial state
  
      default:
        return state;
    }
  };
  
  export const studentRegisterReducer = (state = initialState, action) => {
    switch (action.type) {
      case STUDENT_REGISTER_REQUEST:
        return { ...state, loading: true, error: null };
  
      case STUDENT_REGISTER_SUCCESS:
        return { ...state, loading: false, studentInfo: action.payload, error: null };
  
      case STUDENT_REGISTER_FAIL:
        return { ...state, loading: false, error: action.payload || 'Registration failed' };
  
      default:
        return state;
    }
  };
  