import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from '@/pages/Home';
import Daftar from './pages/Daftar';
import Login from './pages/Login';
import ErrorPage from './pages/Error';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<LandingPage />}
				/>
				<Route
					path="/signup"
					element={<Daftar />}
				/>
				<Route
					path="/login"
					element={<Login />}
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
