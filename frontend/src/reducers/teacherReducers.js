import { 
	TEACHER_LOGIN_REQUEST,
	TEACHER_LOGIN_SUCCESS,
	TEACHER_LOGIN_FAIL,
	TEACHER_LOGOUT,
	TEACHER_REGISTER_REQUEST,
	TEACHER_REGISTER_SUCCESS,
	TEACHER_REGISTER_FAIL 
  } from '../constants/teacherConstants';
  
  const initialState = {
	loading: false,
	teacherInfo: null,
	error: null
  };
  
  export const teacherLoginReducer = (state = initialState, action) => {
	switch (action.type) {
	  case TEACHER_LOGIN_REQUEST:
		return { ...state, loading: true, error: null };
  
	  case TEACHER_LOGIN_SUCCESS:
		return { ...state, loading: false, teacherInfo: action.payload };
  
	  case TEACHER_LOGIN_FAIL:
		return { ...state, loading: false, error: action.payload };
  
	  case TEACHER_LOGOUT:
		return { ...initialState }; // Reset state to initial state
  
	  default:
		return state;
	}
  };
  
  export const teacherRegisterReducer = (state = initialState, action) => {
	switch (action.type) {
	  case TEACHER_REGISTER_REQUEST:
		return { ...state, loading: true, error: null };
  
	  case TEACHER_REGISTER_SUCCESS:
		return { ...state, loading: false, teacherInfo: action.payload };
  
	  case TEACHER_REGISTER_FAIL:
		return { ...state, loading: false, error: action.payload };
  
	  default:
		return state;
	}
  };
  