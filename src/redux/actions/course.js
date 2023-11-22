import axios from 'axios';
import { createAction } from '@reduxjs/toolkit';

export const fetchAPI = createAction('COURSE/FETCH');
export const fetchAPISuccess = createAction('COURSE/FETCH_SUCCESS');
export const fetchAPIError = createAction('COURSE/FETCH_ERROR');

export const retrieveCourses = () => {
	return async (dispatch) => {
		dispatch(fetchAPI());

		try {
			const response = await axios.get('/api/courses');
			dispatch(fetchAPISuccess(response.data.data));
		} catch (error) {
			dispatch(fetchAPIError(error.message));
		}
	};
};
