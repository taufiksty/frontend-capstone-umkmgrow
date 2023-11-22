import LogoUMKMGrow from '@/assets/images/common/Logo.svg';
import { useState } from 'react';
import { IoClose, IoMenu } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import Button from './Button';
import { useSelector } from 'react-redux';

function Navbar() {
	const [openNav, setOpenNav] = useState(false);
	const authData = useSelector((state) => state.auth.data) || null;

	const navigate = useNavigate();

	return (
		<nav className="flex flex-col md:flex-row md:items-center md:justify-between bg-[#E5F2FA] md:px-[154px] md:py-4 border-b border-b-slate-300  fixed w-full shadow-md">
			<div className="flex justify-between items-center m-4 md:mr-16 md:my-0">
				<Link to="/">
					<img
						src={LogoUMKMGrow}
						alt="logo_umkm_grow"
						className="cursor-pointer"
					/>
				</Link>
				{openNav ? (
					<IoClose
						className="md:hidden"
						size={32}
						onClick={() => setOpenNav(false)}
					/>
				) : (
					<IoMenu
						className="md:hidden"
						size={32}
						onClick={() => setOpenNav(true)}
					/>
				)}
			</div>
			<div className={`${openNav ? 'block' : 'hidden md:block'} mr-auto`}>
				<ul className="flex flex-col md:flex-row gap-6 my-3 md:my-0 cursor-pointer z-[-1] md:z-auto md:static w-full">
					<Link to="/">
						<li className="mx-4 my-4 md:my-0 md:mx-0 hover:text-[#008D91]">
							Beranda
						</li>
					</Link>
					<Link to="/class">
						<li className="mx-4 my-4 md:my-0 md:mx-0 hover:text-[#008D91]">
							Kelas
						</li>
					</Link>
				</ul>
			</div>
			{authData ? (
				<div
					className={`${
						openNav ? 'flex' : 'hidden md:flex'
					} self-end md:self-center md:gap-2 mx-3 pb-4 space-x-4 md:pb-0`}>
					<Button
						variant="secondary"
						onClick={() => navigate('/profile')}>
						Profile
					</Button>
					<Button onClick={() => {}}>Keluar</Button>
				</div>
			) : (
				<div
					className={`${
						openNav ? 'flex' : 'hidden md:flex'
					} self-end md:self-center md:gap-2 mx-3 pb-4 space-x-4 md:pb-0`}>
					<Button
						variant="secondary"
						onClick={() => navigate('/login')}>
						Login
					</Button>
					<Button onClick={() => navigate('/signup')}>Daftar</Button>
				</div>
			)}
		</nav>
	);
}

export default Navbar;
