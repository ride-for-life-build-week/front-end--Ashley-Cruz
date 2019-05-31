import axios from "axios";
// import WithAuth from "../Components/WithAuth";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESSFUL = "LOGIN_SUCCESSFUL";
export const LOGIN_FAILED = "LOGIN_FAILED";

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post("http://localhost:3001/api/login", creds)
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
  axios
    .get("http://localhost:3001/api/AddUserForm", {
      headers: {
        Authorization: localStorage.getItem("token"),
        "Content-Type": "application/json"
      }
    })
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
  return axios
    .post("http://localhost:3001/AddUserForm", signUp)
    .then(res => {
      console.log(res);
      dispatch({ type: ADD_USER_SUCCESS, payload: res.data });
    })
    .catch(err => console.log(err));
};

export const DELETE_USER_START = "DELETE_USER_START";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAILED = "DELETE_USER_FAILED";

export const deleteUser = id => dispatch => {
  dispatch({ type: DELETE_USER_START });
  axios
    .delete("http://", id)
    .then(res => {
      console.log("promise: ", id, res);
      dispatch({ type: DELETE_USER_SUCCESS, payload: id });
    })
    .catch(err => {
      console.log(err);
    });
};

export const UPDATE_USER_START = "DELETE_USER_START";
export const UPDATE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const UPDATE_USER_FAILED = "DELETE_USER_FAILED";

export const updatingUser = id => dispatch => {
  dispatch({ type: UPDATE_USER_START });
  axios
    .delete("http://", id)
    .then(res => {
      console.log("promise: ", id, res);
      dispatch({ type: UPDATE_USER_SUCCESS, payload: id });
    })
    .catch(err => {
      console.log(err);
    });
};
