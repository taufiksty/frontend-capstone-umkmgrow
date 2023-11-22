import Logo from '@/assets/images/common/Logo.svg';
import Button from '@/components/common/Button';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { fetchAPIFinish, signUp } from '../redux/actions/auth';
import ErrorPage from './Error';

function Daftar() {
	const [input, setInput] = useState({ fullname: '', email: '', password: '' });
	const [confirmPassword, setConfirmPassword] = useState('');

	const dispatch = useDispatch();
	const navigate = useNavigate();

	function handleSubmit(e) {
		e.preventDefault();
		if (!input.password || input.password !== confirmPassword) {
			Swal.fire({
				title: 'Periksa lagi, ya!',
				text: 'Konfirmasi password tidak sama.',
				icon: 'error',
				confirmButtonColor: '#008D91',
			});
		} else {
			dispatch(signUp(input)).then((res) => {
				if (res.success) navigate('/login');
			});
		}
	}

	const loading = useSelector((state) => state.auth.loading);
	const error = useSelector((state) => state.auth.error);

	if (error) {
		if (error.status === 400) {
			Swal.fire({
				title: 'Periksa lagi, ya!',
				text: 'Sepertinya ada input yang tidak sesuai.',
				icon: 'error',
				confirmButtonColor: '#008D91',
			}).then(() => dispatch(fetchAPIFinish()));
		} else {
			return <ErrorPage />;
		}
	}

	return (
		<div className="flex justify-center items-center h-[90vh]">
			<div className="max-w-sm md:max-w-md md:space-y-5 text-center px-14 py-8 border border-gray-700 rounded-lg shadow ">
				<div className="flex justify-center mb-8">
					<img
						src={Logo}
						alt="logo"
					/>
				</div>

				<div>
					<h1 className="font-bold text-2xl mb-6">Buat Akun</h1>
				</div>

				<div>
					<form>
						<input
							className="border border-gray-700 py-1 px-3 rounded-md mb-3 w-full"
							type="text"
							name="fullname"
							value={input.fullname}
							onChange={(e) => setInput({ ...input, fullname: e.target.value })}
							placeholder="Nama Lengkap"
						/>
						<input
							className="border border-gray-700 py-1 px-3 rounded-md mb-3 w-full"
							type="text"
							name="email"
							value={input.email}
							onChange={(e) => setInput({ ...input, email: e.target.value })}
							placeholder="Email"
						/>
						<input
							className="border border-gray-700 py-1 px-3 rounded-md mb-3 w-full"
							type="password"
							name="password"
							value={input.password}
							onChange={(e) => setInput({ ...input, password: e.target.value })}
							placeholder="Password"
						/>
						<input
							className="border border-gray-700 py-1 px-3 rounded-md mb-4 w-full"
							type="password"
							name="password"
							onChange={(e) => setConfirmPassword(e.target.value)}
							placeholder="Konfirmasi Password"
						/>
					</form>
				</div>

				<div>
					<Button
						onClick={handleSubmit}
						disabled={loading}
						className={`w-full flex justify-center items-center space-x-3 ${
							loading && 'opacity-60'
						}`}>
						<p>Daftar</p>
						{loading && <i className="fa fa-circle-o-notch fa-spin"></i>}
					</Button>
				</div>

				<div className="flex justify-center mt-4 text-sm gap-1">
					<p>Sudah memiliki akun?</p>
					<Link
						to="/login"
						className="text-[#008D91] font-semibold hover:font-bold">
						Masuk
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Daftar;
