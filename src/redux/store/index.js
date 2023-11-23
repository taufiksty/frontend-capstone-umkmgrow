import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../reducers/auth-reducer';
import courseReducer from '../reducers/course-reducer';

const store = configureStore({
	reducer: {
		auth: authReducer,
		course: courseReducer,
	},
});

store.subscribe(() => {
	console.log(store.getState());
});

export default store;
