import axios from 'axios';
import { createAction } from '@reduxjs/toolkit';

export const addCourse = createAction('COURSE/ADD');
export const addModule = createAction('COURSE/ADD_MODULE');
export const fetchAPI = createAction('COURSE/FETCH');
export const fetchAPIFinish = createAction('COURSE/FETCH_FINISH');
export const fetchAPIError = createAction('COURSE/FETCH_ERROR');

export const retrieveCourse = (id) => {
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

export const retrieveCourseModuleContent = (token, id) => {
	return async (dispatch) => {
		dispatch(fetchAPI());

		try {
			const response = await axios.get(`/api/courses/${id}`);
			const responseModule = await axios.get(
				`/api/courses/${id}/modules?content=true`,
				{ headers: { Authorization: `Bearer ${token}` } },
			);
			dispatch(fetchAPIFinish());
			dispatch(addCourse(response.data.data.course));
			dispatch(addModule(responseModule.data.data.modules));
		} catch (error) {
			dispatch(fetchAPIError());
		}
	};
};

export const enrollCourse = (token, body) => {
	return async (dispatch) => {
		dispatch(fetchAPI());

		try {
			const response = await axios.post('/api/enrollment', body, {
				headers: { Authorization: `Bearer ${token}` },
			});
			dispatch(fetchAPIFinish());

			return response.data;
		} catch (error) {
			dispatch(fetchAPIError(error.message));
		}
	};
};

export const purchaseCourse = (token, enrollId) => {
	return async (dispatch) => {
		dispatch(fetchAPI());

		try {
			const response = await axios.post(
				`/api/enrollment/${enrollId}/purchase`,
				{},
				{ headers: { Authorization: `Bearer ${token}` } },
			);
			dispatch(fetchAPIFinish());

			return response.data;
		} catch (error) {
			console.log(error);
			dispatch(fetchAPIError(error.message));
		}
	};
};
