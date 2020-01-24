// actions index
import { useState } from 'react';
import axios from 'axios';
export const FETCHING_STARTED = 'FETCHING_STARTED';
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS';
export const FETCHING_FAILURE = 'FETCHING_FAILURE';
export const FETCHING_NAME_STARTED = 'FETCHING_NAME_STARTED';
export const FETCHING_NAME_SUCCESS = 'FETCHING_NAME_SUCCESS';
export const FETCHING_NAME_FAILURE = 'FETCHING_NAME_FAILURE';


export const fetchData = (e) => dispatch => {
    e.preventDefault();
    dispatch({ type: FETCHING_STARTED});
    axios
    .get(`https://api.abalin.net/getdate?name=John&country=us`)
    .then(res => dispatch({ type: FETCHING_SUCCESS, paylod: res.data }))
    .catch(err => dispatch({ type: FETCHING_FAILURE, payload: err.response}))
}

export const fetchName = (name, country) => dispatch => {
    dispatch({ type: FETCHING_NAME_STARTED});
    axios
    .get(`https://api.abalin.net/getdate?name=${name}&country=${country}`)
    .then(res => dispatch({ type: FETCHING_NAME_SUCCESS, paylod: res.data }))
    .catch(err => dispatch({ type: FETCHING_NAME_FAILURE, payload: err.response}))
}