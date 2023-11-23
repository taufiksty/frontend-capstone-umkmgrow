import Logo from '@/assets/images/common/Logo.svg';
import LogoSkilvul from '@/assets/images/common/LogoSkilvul.png';
import { Link } from 'react-router-dom';

function Footer() {
	return (
		<footer className="mt-32">
			<div className="md:px-[154px] px-4 pt-8 md:pt-16 md:pb-16 pb-6 bg-[#E5F2FA] md:flex md:justify-between border-b-2">
				<div>
					<img
						src={Logo}
						alt=""
					/>
					<p className="mt-2">Berkembang Bersama UMKM Grow</p>
				</div>
				<div className="flex">
					<div>
						<h4 className="md:mb-4 mt-2 font-semibold">Kontak</h4>
						<ul className="cursor-pointer">
							<li className="hover:text-[#008D91]">umkmgrowfs9@gmail.com</li>
							<li className="hover:text-[#008D91]">+02198765432</li>
						</ul>
					</div>
					<div className="ml-20 md:ml-44">
						<h4 className="md:mb-4 mt-2 font-semibold">Features</h4>
						<ul className="cursor-pointer">
							<Link to="/">
								<li className="hover:text-[#008D91]">Beranda</li>
							</Link>
							<Link to="/class">
								<li className="hover:text-[#008D91]">Kelas</li>
							</Link>
						</ul>
					</div>
				</div>
				<div className="mt-3 flex justify-center items-center">
					<img
						src={LogoSkilvul}
						alt=""
					/>
					<p>Skilvul</p>
				</div>
			</div>
			<div className="md:px-[154px] px-4 md:flex md:justify-between py-4 bg-[#E5F2FA] text-center">
				<div>
					<p>Copyright @2023 UMKM Grow. All rights reserved</p>
				</div>
				<div>
					<ul className="md:flex gap-10 cursor-pointer">
						<li className="hover:text-[#008D91]">Syarat dan Ketentuan</li>
						<li className="hover:text-[#008D91]">Kebijakan Privasi</li>
					</ul>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
