import axios from 'axios';
import { createAction } from '@reduxjs/toolkit';

export const addAuth = createAction('AUTH/ADD');
export const refreshAuth = createAction('AUTH/REFRESH');
export const refreshDataUser = createAction('AUTH/REFRESH_DATA_USER');
export const refreshDataUserEnrollments = createAction(
	'AUTH/REFRESH_DATA_USER_ENROLLMENTS',
);
export const refreshDataUserExamHistories = createAction(
	'AUTH/REFRESH_DATA_USER_EXAM_HISTORIES',
);
export const removeAuth = createAction('AUTH/REMOVE');
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

export const signOut = (token) => {
	return async (dispatch) => {
		dispatch(fetchAPI());

		try {
			const response = await axios.delete('/api/auth/signout', {
				headers: { Authorization: `Bearer ${token}` },
			});
			dispatch(fetchAPIFinish());
			dispatch(removeAuth());

			return response.data;
		} catch (error) {
			dispatch(fetchAPIError(error.response));
		}
	};
};

export const updateUser = (token, id, body) => {
	return async (dispatch) => {
		dispatch(fetchAPI());

		try {
			const response = await axios.put(`/api/users/${id}`, body, {
				headers: { Authorization: `Bearer ${token}` },
			});

			dispatch(refreshDataUser(response.data.data.user));
			dispatch(fetchAPIFinish());

			return response.data;
		} catch (error) {
			dispatch(fetchAPIError());
		}
	};
};

export const refreshUserEnrollments = (token) => {
	return async (dispatch) => {
		dispatch(fetchAPI());

		try {
			const response = await axios.get('/api/enrollment', {
				headers: { Authorization: `Bearer ${token}` },
			});

			dispatch(refreshDataUserEnrollments(response.data.data.enrollments));
			dispatch(fetchAPIFinish());
		} catch (error) {
			dispatch(fetchAPIError(error.message));
		}
	};
};

export const refreshUserExamHistory = (token) => {
	return async (dispatch) => {
		dispatch(fetchAPI());

		try {
			const response = await axios.get('/api/exams/histories', {
				headers: { Authorization: `Bearer ${token}` },
			});
			dispatch(refreshDataUserExamHistories(response.data.data.examHistories));
			dispatch(fetchAPIFinish());
		} catch (error) {
			dispatch(fetchAPIError(error.message));
		}
	};
};
