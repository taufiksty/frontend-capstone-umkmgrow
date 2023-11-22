import { createReducer } from '@reduxjs/toolkit';
import { fetchAPI, fetchAPIError, fetchAPISuccess } from '../actions/auth';

const initialState = {
	data: {},
	loading: false,
	error: null,
};

const authReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(fetchAPI, (state) => {
			state.loading = true;
			state.error = null;
		})
		.addCase(fetchAPISuccess, (state, action) => {
			state.loading = false;
			state.data = action.payload;
		})
		.addCase(fetchAPIError, (state, action) => {
			state.loading = false;
			state.error = action.payload;
		});
});

export default authReducer;
