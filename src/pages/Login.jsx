import Logo from '@/assets/images/common/Logo.svg';
import Button from '../components/common/Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAPIFinish, signIn } from '../redux/actions/auth';

function Login() {
	const [input, setInput] = useState({ email: '', password: '' });

	const dispatch = useDispatch();
	const navigate = useNavigate();

	function handleSubmit(e) {
		e.preventDefault();

		if (!input.email || !input.password) {
			Swal.fire({
				title: 'Periksa lagi, ya!',
				text: 'Sepertinya ada input yang tidak sesuai.',
				icon: 'error',
				confirmButtonColor: '#008D91',
			});
		} else {
			dispatch(signIn(input)).then((res) => {
				if (res ? res.success : null) navigate('/');
			});
		}
	}

	const loading = useSelector((state) => state.auth.loading);
	const error = useSelector((state) => state.auth.error);

	if (error) {
		if (error.status !== 500) {
			Swal.fire({
				title: 'Periksa lagi, ya!',
				text: 'Sepertinya ada input yang salah.',
				icon: 'error',
				confirmButtonColor: '#008D91',
			}).then(() => dispatch(fetchAPIFinish()));
		} else {
			navigate('/servererror');
		}
	}

	const { search } = useLocation();
	const queryParams = new URLSearchParams(search);

	if (queryParams.get('access') === 'false') {
		Swal.fire({
			position: 'top-end',
			icon: 'info',
			title: 'Kamu login dulu, yah!',
			showConfirmButton: false,
			timer: 1500,
		}).then(() => navigate('/login', { replace: true }));
	}

	return (
		<div className="flex justify-center items-center h-[90vh]">
			<div className="max-w-sm md:max-w-md space-y-5 text-center px-14 py-8 border border-gray-700 rounded-lg shadow ">
				<div className="flex justify-center mb-8">
					<img
						src={Logo}
						alt="logo"
					/>
				</div>

				<div>
					<h1 className="font-bold text-2xl mb-6">Masuk</h1>
				</div>

				<div>
					<form>
						<input
							className="border border-gray-700 py-1 px-3 rounded-md mb-3 w-full"
							type="email"
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
					</form>
				</div>

				<div>
					<Button
						onClick={handleSubmit}
						disabled={loading}
						className={`w-full flex justify-center items-center ${
							loading && 'opacity-60'
						}`}>
						Masuk
						{loading && <i className="fa fa-circle-o-notch fa-spin ml-3"></i>}
					</Button>
				</div>

				<div className="flex justify-center mt-4 text-sm gap-1">
					<p>Belum memiliki akun?</p>
					<Link
						to="/signup"
						className="text-[#008D91] font-semibold hover:font-bold">
						Daftar
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Login;
