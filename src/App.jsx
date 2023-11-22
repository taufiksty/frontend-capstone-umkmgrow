import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from '@/pages/Home';
import Daftar from './pages/Daftar';

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
			</Routes>
		</BrowserRouter>
	);
}

export default App;
