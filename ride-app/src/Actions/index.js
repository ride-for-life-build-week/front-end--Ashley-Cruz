import axios from "axios";
import WithAuth from "../Actions/WithAuth";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESSFUL = "LOGIN_SUCCESSFUL";
export const LOGIN_FAILED = "LOGIN_FAILED";

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post("http://localhost:3000/api/login", creds)
    .then(res => {
      localStorage.setItem(
        "token",
        res.data.payload,
        dispatch({ type: LOGIN_SUCCESSFUL, payload: res.data.payload })
      );
    })
    .catch(err => {
      console.log(err);
    });
};

export const FETCH_USER_START = "FETCH_USER_START";
export const FETCH_USER_SUCCESSFUL = "FETCH_USER_SUCCESSFUL";
export const FETCH_USER_FAILED = "FETCH_USER_FAILED";

export const getUser = () => dispatch => {
  dispatch({ type: FETCH_USER_START });
  WithAuth()
    .get("http://localhost:3000/api/user")
    .then(res => {
      console.log(res);
      dispatch({ type: FETCH_USER_SUCCESSFUL, payload: res.data });
    })
    .catch(err => console.log(err));
};

export const ADD_USER_START = "ADD_USER_START";
export const ADD_USER_SUCCESS = "ADD_USER_SUCCESS";
export const ADD_USER_FAILED = "ADD_USER_FAILED";

export const addUser = signUp => dispatch => {
  dispatch({ type: ADD_USER_START });
  WithAuth()
    .post("http://localhost:3000/api/signup", signUp)
    .then(res => {
      console.log(res);
      dispatch({ type: ADD_USER_SUCCESS, payload: res.data });
    })
    .catch(err => console.log(err));
};
