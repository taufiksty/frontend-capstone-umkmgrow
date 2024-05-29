import axios from 'axios';
import { createAction } from '@reduxjs/toolkit';

export const addCourses = createAction('COURSES/ADD');
export const fetchAPI = createAction('COURSES/FETCH');
export const fetchAPIFinish = createAction('COURSES/FETCH_FINISH');
export const fetchAPIError = createAction('COURSES/FETCH_ERROR');

export const retrieveCourses = ({ category, search }) => {
	return async (dispatch) => {
		dispatch(fetchAPI());

		try {
			const response = await axios.get(
				`https://backend-capstone-umkmgrow.vercel.app/api/courses?${
					category && 'category=' + category
				}&${search && 'search=' + search}`,
			);

			dispatch(fetchAPIFinish());
			dispatch(addCourses(response.data.data.courses));
		} catch (error) {
			dispatch(fetchAPIError(error.message));
		}
	};
};
