import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import LandingPage from '@/pages/Home';
import Daftar from './pages/Daftar';
import Login from './pages/Login';
import ErrorPage from './pages/Error';
import { useSelector } from 'react-redux';
import MenuKelas from './pages/MenuKelas';
import DetailKelas from './pages/DetailKelas';

function App() {
	const authData = useSelector((state) => state.auth.data);

	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<LandingPage />}
				/>
				<Route
					path="/signup"
					element={authData ? <Navigate to="/" /> : <Daftar />}
				/>
				<Route
					path="/login"
					element={authData ? <Navigate to="/" /> : <Login />}
				/>
				<Route
					path="/courses"
					element={<MenuKelas />}
				/>
				<Route
					path="/courses/:id"
					element={<DetailKelas />}
				/>
				<Route
					path="/servererror"
					element={<ErrorPage />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;