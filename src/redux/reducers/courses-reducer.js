import { createReducer } from '@reduxjs/toolkit';
import {
	addCourses,
	fetchAPI,
	fetchAPIError,
	fetchAPIFinish,
} from '../actions/courses';

const initialState = {
	data: {},
	loading: false,
	error: null,
};

const coursesReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(fetchAPI, (state) => {
			state.loading = true;
			state.error = null;
		})
		.addCase(fetchAPIFinish, (state) => {
			state.loading = false;
			state.error = null;
		})
		.addCase(fetchAPIError, (state, action) => {
			state.loading = false;
			state.error = action.payload;
		})
		.addCase(addCourses, (state, action) => {
			state.data = action.payload;
		});
});

export default coursesReducer;
