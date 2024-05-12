import { 
    STUDENT_LOGIN_REQUEST,
    STUDENT_LOGIN_SUCCESS,
    STUDENT_LOGIN_FAIL,
    STUDENT_LOGOUT,
    STUDENT_REGISTER_REQUEST,
    STUDENT_REGISTER_SUCCESS,
    STUDENT_REGISTER_FAIL
  } from '../constants/stundentConstants'; // Import student constants
  
  import axios from 'axios';
  
  export const login = (stdnt_email, password) => async (dispatch) => {
    try {
      dispatch({ type: STUDENT_LOGIN_REQUEST });
  
      const { data } = await axios.post(
        'http://localhost:8000/api/student/login', // Student login endpoint
        { stdnt_email, password },
        { headers: { 'Content-Type': 'application/json' } }
      );
  
      dispatch({ type: STUDENT_LOGIN_SUCCESS, payload: data });
      localStorage.setItem('studentInfo', JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: STUDENT_LOGIN_FAIL,
        payload: error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
      });
    }
  };
  
  export const logout = () => (dispatch) => {
    localStorage.removeItem('studentInfo');
    dispatch({ type: STUDENT_LOGOUT });
  };
  
  export const register = (stdnt_name, stdnt_email, password, stdnt_mobile, stdnt_address, stdnt_pic) => async (dispatch) => {
    try {
      dispatch({ type: STUDENT_REGISTER_REQUEST });
  
      const { data } = await axios.post(
        'http://localhost:8000/api/student/register', // Student register endpoint
        { stdnt_name, stdnt_email, password, stdnt_mobile, stdnt_address, stdnt_pic },
        { headers: { 'Content-Type': 'application/json' } }
      );
  
      dispatch({ type: STUDENT_REGISTER_SUCCESS, payload: data });
      localStorage.setItem('studentInfo', JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: STUDENT_REGISTER_FAIL,
        payload: error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
      });
    }
  };
  