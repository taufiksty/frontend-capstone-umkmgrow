import LogoUMKMGrow from '@/assets/images/common/Logo.svg';
import ImgMaleProfile from '@/assets/images/common/male.png';
import ImgFemaleProfile from '@/assets/images/common/female.png';
import { useEffect, useRef, useState } from 'react';
import { IoClose, IoMenu } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import Button from './Button';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAPIFinish, signOut } from '../../redux/actions/auth';
import useToken from '../../hooks/useToken';

function Navbar() {
	const [openNav, setOpenNav] = useState(false);
	const [openMenuProfile, setOpenMenuProfile] = useState(true);

	const authData = useSelector((state) => state.auth.data.user) || null;
	const accessToken = useToken();

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const profileRef = useRef(null);
	const navRef = useRef(null);

	useEffect(() => {
		const closeProfileOrNavbarOutsideClick = (event) => {
			if (!profileRef.current.contains(event.target)) {
				setOpenMenuProfile(false);
			}
			if (!navRef.current.contains(event.target)) {
				setOpenNav(false);
			}
		};

		document.addEventListener('click', closeProfileOrNavbarOutsideClick);

		return () => {
			document.removeEventListener('click', closeProfileOrNavbarOutsideClick);
		};
	}, []);

	function handleLogout(e) {
		e.preventDefault();
		dispatch(signOut(accessToken)).then((res) => {
			if (res.success) navigate('/');
		});
	}

	const error = useSelector((state) => state.auth.error);
	if (error.status === 401) {
		dispatch(fetchAPIFinish());
		window.location.reload();
	} else {
		navigate('/servererror');
	}

	const renderProfileButtons = () => {
		return (
			<div
				className={`${
					openNav ? 'flex' : 'hidden md:flex'
				} md:gap-2 pb-4 space-x-4 md:pb-0 md:hidden`}>
				<Button
					variant="secondary"
					onClick={() => navigate('/profile')}>
					Profile
				</Button>
				<Button onClick={handleLogout}>Keluar</Button>
			</div>
		);
	};

	const renderProfileImage = () => {
		return (
			<div
				className={`${
					openNav ? 'hidden' : 'hidden md:flex'
				} md:gap-2 pb-4 space-x-4 md:pb-0 md:flex relative`}>
				<img
					ref={profileRef}
					src={
						authData.imageProfile || authData.gender === 'male'
							? ImgMaleProfile
							: ImgFemaleProfile
					}
					alt="profile"
					className="w-20 rounded-full hover:scale-105 cursor-pointer"
					onClick={(e) => {
						e.stopPropagation();
						setOpenMenuProfile(!openMenuProfile);
					}}
				/>
				<div
					className={`${
						openMenuProfile ? 'hidden md:block' : 'hidden'
					} bg-white fixed top-24 right-52 rounded-md space-y-2`}>
					<div className="cursor-pointer px-10 py-2 hover:rounded-md hover:bg-gray-300">
						<Link to="/profile">Profile</Link>
					</div>
					<div
						onClick={handleLogout}
						className="cursor-pointer px-10 py-2 hover:rounded-md hover:bg-gray-300">
						Keluar
					</div>
				</div>
			</div>
		);
	};

	const renderGuestButtons = () => {
		return (
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
		);
	};

	return (
		<nav className="flex flex-col md:flex-row md:items-center md:justify-between bg-[#E5F2FA] md:px-[154px] md:py-4 border-b border-b-slate-300  fixed w-full shadow-md">
			<div
				ref={navRef}
				className="flex justify-between items-center m-4 md:mr-16 md:my-0">
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
						onClick={(e) => {
							e.stopPropagation();
							setOpenNav(false);
						}}
					/>
				) : (
					<IoMenu
						className="md:hidden"
						size={32}
						onClick={(e) => {
							e.stopPropagation();
							setOpenNav(true);
						}}
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
				<div className="self-end md:self-center mx-3">
					{renderProfileButtons()}
					{renderProfileImage()}
				</div>
			) : (
				renderGuestButtons()
			)}
		</nav>
	);
}

export default Navbar;
