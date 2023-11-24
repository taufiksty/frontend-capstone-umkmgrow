import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../reducers/auth-reducer';
import courseReducer from '../reducers/course-reducer';
import coursesReducer from '../reducers/courses-reducer';

const store = configureStore({
	reducer: {
		auth: authReducer,
		course: courseReducer,
		courses: coursesReducer,
	},
});

store.subscribe(() => {
	console.log(store.getState());
});

export default store;
