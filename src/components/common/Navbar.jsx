import LogoUMKMGrow from '@/assets/images/common/Logo.svg';
import { useState } from 'react';
import { IoClose, IoMenu } from 'react-icons/io5';
import { Link } from 'react-router-dom';

function Navbar() {
	const [openNav, setOpenNav] = useState(false);

	return (
		<nav className="flex flex-col md:flex-row md:items-center md:justify-between bg-[#E5F2FA] md:px-[154px] md:py-4 border-b border-b-slate-300  fixed w-full md:opacity-100">
			<div className="flex justify-between items-center m-4 md:mr-16 md:my-0">
				<img
					src={LogoUMKMGrow}
					alt="logo_umkm_grow"
					className="cursor-pointer"
				/>
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
			<div
				className={`${
					openNav ? 'flex' : 'hidden md:flex'
				} self-end md:self-center md:gap-2 pb-4 md:pb-0`}>
				<button className="px-4 py-1 border-2 border-[#008D91] rounded-md text-[#008D91] mx-4 my-2 md:my-0 md:mx-0 hover:bg-[#008D91] hover:text-white hover:font-semibold">
					Login
				</button>{' '}
				<br />
				<button className="px-4 py-1 border-2 border-[#008D91] rounded-md bg-[#008D91] text-white mx-4 my-2 md:my-0 md:mx-0 hover:font-semibold">
					Daftar
				</button>
			</div>
		</nav>
	);
}

export default Navbar;
