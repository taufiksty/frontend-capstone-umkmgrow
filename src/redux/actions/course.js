import axios from 'axios';
import { createAction } from '@reduxjs/toolkit';

export const addCourse = createAction('COURSE/ADD');
export const fetchAPI = createAction('COURSE/FETCH');
export const fetchAPIFinish = createAction('COURSE/FETCH_FINISH');
export const fetchAPIError = createAction('COURSE/FETCH_ERROR');

export const retrieveCourse = ({ id }) => {
	return async (dispatch) => {
		dispatch(fetchAPI());

		try {
			const response = await axios.get(`/api/courses/${id}`);

			dispatch(fetchAPIFinish());
			dispatch(addCourse(response.data.data.course));
		} catch (error) {
			dispatch(fetchAPIError(error.message));
		}
	};
};
