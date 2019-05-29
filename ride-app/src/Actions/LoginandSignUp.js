import axios from "axios";

//FOR LOGIN
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_ERROR = "SIGNUP_ERROR";
export const LOG_OUT = 'LOG_OUT';
export const USER_INFO_START = 'USER_INFO_START';
export const USER_INFO_SUCCESS = 'USER_INFO_SUCCESS';
export const USER_INFO_ERROR = 'USER_INFO_ERROR';


//FOR LOGIN

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START});

    return axios 
    .post("http://", creds)
    .then()








}