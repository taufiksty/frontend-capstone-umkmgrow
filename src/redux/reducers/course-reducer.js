import { createReducer } from '@reduxjs/toolkit';
import {
	addCourse,
	addModule,
	fetchAPI,
	fetchAPIError,
	fetchAPIFinish,
} from '../actions/course';

const data = localStorage.getItem('course')
	? JSON.parse(localStorage.getItem('course'))
	: {};

const initialState = {
	data,
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
			localStorage.setItem('course', JSON.stringify(state.data));
		})
		.addCase(addModule, (state, action) => {
			state.data = { ...state.data, modules: action.payload };
			localStorage.setItem('course', JSON.stringify(state.data));
		});
});

export default courseReducer;
