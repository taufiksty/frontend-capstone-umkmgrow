import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import LandingPage from '@/pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import ServerError from './pages/ServerError';
import { useSelector } from 'react-redux';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import Checkout from './pages/Checkout';
import Class from './pages/Class';
import Exam from './pages/Exam';
import Profile from './pages/Profile';
import ExamReview from './pages/ExamReview';
import Certification from './pages/Certification';
import axios from 'axios';

function App() {
	const authData = useSelector((state) => state.auth.data);
	const isAuth = Object.keys(authData).length > 0;

	axios
		.get('https://umkmgrow.my.id/')
		.then((res) => console.log(res))
		.catch((e) => console.log(e));

	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={<LandingPage />}
				/>
				<Route
					path='/signup'
					element={isAuth ? <Navigate to='/' /> : <Signup />}
				/>
				<Route
					path='/login'
					element={isAuth ? <Navigate to='/' /> : <Login />}
				/>
				<Route
					path='/profile'
					element={isAuth ? <Profile /> : <Login />}
				/>
				<Route
					path='/courses'
					element={<Courses />}
				/>
				<Route
					path='/courses/:id'
					element={<CourseDetail />}
				/>
				<Route
					path='/courses/:id/modules'
					element={isAuth ? <Class /> : <Login />}
				/>
				<Route
					path='/checkout/:enrollId'
					element={isAuth ? <Checkout /> : <Login />}
				/>
				<Route
					path='/courses/:id/exams'
					element={isAuth ? <Exam /> : <Login />}
				/>
				<Route
					path='/courses/:id/exams/history'
					element={isAuth ? <ExamReview /> : <Login />}
				/>
				<Route
					path='/courses/:id/certification'
					element={isAuth ? <Certification /> : <Login />}
				/>
				<Route
					path='/servererror'
					element={<ServerError />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
