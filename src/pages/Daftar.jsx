import Logo from '@/assets/images/common/Logo.svg';
import Button from '@/components/common/Button';

function Daftar() {
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
							placeholder="Nama Lengkap"
						/>
						<input
							className="border border-gray-700 py-1 px-3 rounded-md mb-3 w-full"
							type="text"
							name="email"
							placeholder="Email"
						/>
						<input
							className="border border-gray-700 py-1 px-3 rounded-md mb-3 w-full"
							type="text"
							name="password"
							placeholder="Password"
						/>
						<input
							className="border border-gray-700 py-1 px-3 rounded-md mb-4 w-full"
							type="text"
							name="password"
							placeholder="Konfirmasi Password"
						/>
					</form>
				</div>

				<div>
					<Button
						onClick={() => {}}
						className="w-full">
						Daftar
					</Button>
				</div>

				<div className="flex justify-center mt-4 text-sm gap-1">
					<p>Sudah memiliki akun?</p>
					<button className="text-[#008D91] font-semibold hover:font-bold">
						Masuk
					</button>
				</div>
			</div>
		</div>
	);
}

export default Daftar;
