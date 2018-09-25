import axios from 'axios';
import {AUTH_USER, AUTH_ERROR} from "./types";
import {API_ENDPOINT, API_CLIENT_ID, API_CLIENT_SECRET} from "../config";

export const signup = (formProps, callback) => async dispatch => {
    try {
        const response = await axios.post(`${API_ENDPOINT}/api/register`, formProps);
        dispatch({type: AUTH_USER, payload: response.data.token});
        localStorage.setItem('token', response.data.token);
        callback();
    } catch(e) {
        dispatch({type:AUTH_ERROR, payload:"Email in use"})
    }
};

export const signin = (formProps, callback) => async dispatch => {
    try {
        formProps.grant_type = 'password';
        formProps.client_id = API_CLIENT_ID;
        formProps.client_secret = API_CLIENT_SECRET;
        const response = await axios.post(`${API_ENDPOINT}/oauth/token`, formProps);
        dispatch({type: AUTH_USER, payload: response.data.access_token});
        localStorage.setItem('token', response.data.access_token);
        callback();
    } catch(e) {
        dispatch({type:AUTH_ERROR, payload:"Wrong username or Password"})
    }
};



export const signout = () => {
    localStorage.removeItem('token');

    return {
        type: AUTH_USER,
        payload: ""
    }
};

