import { createReducer } from '@reduxjs/toolkit';
import {
	addCourse,
	fetchAPI,
	fetchAPIError,
	fetchAPIFinish,
} from '../actions/course';

const initialState = {
	data: {},
	loading: false,
	error: null,
};

const courseReducer = createReducer(initialState, (builder) => {
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
		.addCase(addCourse, (state, action) => {
			state.data = action.payload;
		});
});

export default courseReducer;
