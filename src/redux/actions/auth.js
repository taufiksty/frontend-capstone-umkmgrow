import axios from 'axios';
import { createAction } from '@reduxjs/toolkit';

export const fetchAPI = createAction('AUTH/FETCH');
export const fetchAPISuccess = createAction('AUTH/FETCH_SUCCESS');
export const fetchAPIError = createAction('AUTH/FETCH_ERROR');

export const signUp = (body) => {
	return async (dispatch) => {
		dispatch(fetchAPI());

		try {
			const response = await axios.post('/api/auth/signup', body);
			dispatch(fetchAPISuccess(response.data.data));

			return response.data;
		} catch (error) {
			dispatch(fetchAPIError(error.response));
		}
	};
};
