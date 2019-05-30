import axios from 'axios';
import { axiosWithAuth } from '../axiosWithAuth';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESSFUL = 'LOGIN_SUCCESSFUL';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    return axios
    .post('http://localhost:30001/api/login', creds)
    .then( res => {
        localStorage.setItem(
            "token",
            res.data.payload,
            dispatch({ type: LOGIN_SUCCESSFUL, payload: res.data.payload })
        )
    } )
    .catch( err => {
        console.log(err)
    } )
}

export const FETCH_USER_START = 'FETCH_USER_START';
export const FETCH_USER_SUCCESSFUL = 'FETCH_USER_SUCCESSFUL';
export const FETCH_USER_FAILED = 'FETCH_USER_FAILED';

export const getUser = () => dispatch => {
    dispatch({ type: FETCH_USER_START });
    axiosWithAuth()
    .get('http://localhost:30001/api/user')
    .then(res => {
        console.log(res)
        dispatch({ type: FETCH_USER_SUCCESSFUL, payload: res.data })
    })
    .catch(err => console.log(err))
}

export const ADD_USER_START = 'ADD_USER_START';
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';
export const ADD_USER_FAILED = 'ADD_USER_FAILED';

export const addUser = signup => dispatch {
    dispatch({ type: ADD_USER_START});
    axiosWithAuth()
    .post('http://localhost:30001/api/signup', signup)
    .then(res => {
        console.log(res)
        dispatch({ type: ADD_USER_SUCCESS, payload: res.data })
    })
    .catch(err => {
         console.log(err)
    })
}
