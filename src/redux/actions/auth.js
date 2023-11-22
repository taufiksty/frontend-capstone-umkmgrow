import axios from 'axios';
import { createAction } from '@reduxjs/toolkit';

export const addAuth = createAction('AUTH/ADD');
export const fetchAPI = createAction('AUTH/FETCH');
export const fetchAPIFinish = createAction('AUTH/FETCH_FINISH');
export const fetchAPIError = createAction('AUTH/FETCH_ERROR');

export const signUp = (body) => {
	return async (dispatch) => {
		dispatch(fetchAPI());

		try {
			const response = await axios.post('/api/auth/signup', body);
			dispatch(fetchAPIFinish());

			return response.data;
		} catch (error) {
			dispatch(fetchAPIError(error.response));
		}
	};
};

export const signIn = (body) => {
	return async (dispatch) => {
		dispatch(fetchAPI());

		try {
			const response = await axios.post('/api/auth/signin', body);
			dispatch(fetchAPIFinish());
			dispatch(addAuth(response.data.data));

			return response.data;
		} catch (error) {
			dispatch(fetchAPIError(error.response));
		}
	};
};
