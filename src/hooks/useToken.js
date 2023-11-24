import { useEffect, useState } from 'react';
import axios from 'axios';

const useToken = () => {
	const auth = localStorage.getItem('auth')
		? JSON.parse(localStorage.getItem('auth'))
		: null;

	const [accessToken, setAccessToken] = useState(
		auth ? auth.accessToken : null,
	);
	const refreshToken = auth ? auth.refreshToken : null;

	useEffect(() => {
		if (!accessToken || !refreshToken) {
			return;
		}

		const tokenExpiration = auth.expiresIn;

		if (tokenExpiration && new Date(tokenExpiration) > new Date()) {
			return;
		}

		const fetchAccessToken = async () => {
			try {
				const response = await axios.put('/api/auth/refresh', {
					refreshToken,
				});

				const newAccessToken = response.data.data.accessToken;
				const expiresIn = response.data.data.expiresIn;

				setAccessToken(newAccessToken);
				localStorage.setItem(
					'auth',
					JSON.stringify({ ...auth, accessToken: newAccessToken, expiresIn }),
				);
			} catch (error) {
				console.error('Error refreshing token:', error.message);
			}
		};

		fetchAccessToken();
	}, [accessToken, refreshToken, auth]);

	return accessToken;
};

export default useToken;
