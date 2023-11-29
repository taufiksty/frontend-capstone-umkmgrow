import axios from 'axios';
import { createAction } from '@reduxjs/toolkit';

export const addCourse = createAction('COURSE/ADD');
export const addModule = createAction('COURSE/ADD_MODULE');
export const addExam = createAction('COURSE/ADD_EXAM');
export const fetchAPI = createAction('COURSE/FETCH');
export const fetchAPIFinish = createAction('COURSE/FETCH_FINISH');
export const fetchAPIError = createAction('COURSE/FETCH_ERROR');

export const retrieveCourse = (id) => {
	return async (dispatch) => {
		dispatch(fetchAPI());

		try {
			const response = await axios.get(
				`http://18.143.65.60:3000/api/courses/${id}`,
			);

			dispatch(fetchAPIFinish());
			dispatch(addCourse(response.data.data.course));

			return response.data;
		} catch (error) {
			dispatch(fetchAPIError(error.message));
		}
	};
};

export const retrieveCourseModuleContent = (token, id) => {
	return async (dispatch) => {
		dispatch(fetchAPI());

		try {
			const response = await axios.get(
				`http://18.143.65.60:3000/api/courses/${id}`,
			);
			const responseModule = await axios.get(
				`http://18.143.65.60:3000/api/courses/${id}/modules?content=true`,
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

export const retrieveCourseExams = (token, id) => {
	return async (dispatch) => {
		dispatch(fetchAPI());

		try {
			const response = await axios.get(
				`http://18.143.65.60:3000/api/courses/${id}/exams`,
				{
					headers: { Authorization: `Bearer ${token}` },
				},
			);
			dispatch(fetchAPIFinish());
			dispatch(addExam(response.data.data.course.exams));

			return response.data;
		} catch (error) {
			dispatch(fetchAPIError());
		}
	};
};

export const retrieveCourseExamHistory = (token, id) => {
	return async (dispatch) => {
		dispatch(fetchAPI());

		try {
			const response = await axios.get(
				`http://18.143.65.60:3000/api/courses/${id}/exams/history`,
				{
					headers: { Authorization: `Bearer ${token}` },
				},
			);
			dispatch(fetchAPIFinish());

			return response.data;
		} catch (error) {
			dispatch(fetchAPIError());
		}
	};
};

export const retrieveCourseCertification = (token, id) => {
	return async (dispatch) => {
		dispatch(fetchAPI());

		try {
			const response = await axios.get(
				`http://18.143.65.60:3000/api/courses/${id}/certification`,
				{
					headers: { Authorization: `Bearer ${token}` },
				},
			);
			dispatch(fetchAPIFinish());

			return response.data;
		} catch (error) {
			dispatch(fetchAPIError());
		}
	};
};

export const enrollCourse = (token, body) => {
	return async (dispatch) => {
		dispatch(fetchAPI());

		try {
			const response = await axios.post(
				'http://18.143.65.60:3000/api/enrollment',
				body,
				{
					headers: { Authorization: `Bearer ${token}` },
				},
			);
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
				`http://18.143.65.60:3000/api/enrollment/${enrollId}/purchase`,
				{},
				{ headers: { Authorization: `Bearer ${token}` } },
			);
			dispatch(fetchAPIFinish());

			return response.data;
		} catch (error) {
			dispatch(fetchAPIError(error.message));
		}
	};
};

export const submitExam = (token, id, payload) => {
	return async (dispatch) => {
		dispatch(fetchAPI());

		try {
			const response = await axios.post(
				`http://18.143.65.60:3000/api/courses/${id}/exams/submit`,
				payload,
				{ headers: { Authorization: `Bearer ${token}` } },
			);
			dispatch(fetchAPIFinish());

			return response.data;
		} catch (error) {
			dispatch(fetchAPIError(error.message));
		}
	};
};
