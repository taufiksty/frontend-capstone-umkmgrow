import axios from 'axios';
import { createAction } from '@reduxjs/toolkit';

export const addCourses = createAction('COURSE/ADD');
export const fetchAPI = createAction('COURSE/FETCH');
export const fetchAPIFinish = createAction('COURSE/FETCH_FINISH');
export const fetchAPIError = createAction('COURSE/FETCH_ERROR');

export const retrieveCourses = ({ category, search }) => {
	return async (dispatch) => {
		dispatch(fetchAPI());

		try {
			const response = await axios.get(
				`/api/courses?${category && 'category=' + category}&${
					search && 'search=' + search
				}`,
			);
			dispatch(fetchAPIFinish());
			dispatch(addCourses(response.data.data));
		} catch (error) {
			dispatch(fetchAPIError(error.message));
		}
	};
};
