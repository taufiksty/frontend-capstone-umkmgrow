import Hero from '@/assets/images/home/hero-section.png';
import Card1 from '@/assets/images/home/rafiki.png';
import Card2 from '@/assets/images/home/bro.png';
import Card3 from '@/assets/images/home/amico.png';
import Tentang1 from '@/assets/images/home/what.png';
import Tentang2 from '@/assets/images/home/tentang2.png';
import Card from '@/components/home/Card';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import { Link } from 'react-router-dom';

function Home() {
	return (
		<>
			<Navbar />

			{/* <HeroSection> */}
			<section className="bg-[#E5F2FA] md:px-[154px] px-4 pt-44 pb-24 flex flex-col-reverse md:flex-row md:justify-around md:items-center">
				<div className="flex flex-col my-16 md:mb-0 space-y-3 md:space-y-10">
					<h1 className="font-bold text-4xl mb-4 leading-tight">
						Menumbuhkan UMKM <br /> Tangguh dengan <br />
						Edukasi Berkualitas!
					</h1>
					<p>
						Pelajari kelas yang Anda butuhkan dan segera aplikasikan di bisnis
						Anda.
					</p>
					<Link to="/courses">
						<button className="px-2 py-1 border-2 self-start border-[#008D91] rounded-md bg-[#008D91] text-white mt-6 hover:font-semibold">
							Ambil Kelas
						</button>
					</Link>
				</div>
				<div className="flex justify-center">
					<img
						src={Hero}
						className="w-[300px] md:w-[500px]"
						alt="hero"
					/>
				</div>
			</section>
			{/* </HeroSection> */}

			<div className="bg-[#E5F2FA] text-center pt-14 rounded-b-full md:rounded-b-[100%]">
				<div>
					<h1 className="font-bold text-3xl mb-8">
						Berkembang Bersama UMKM Grow
					</h1>
				</div>
				<div className="flex flex-col md:flex-row md:items-stretch items-center justify-center gap-6 md:space-x-10">
					<Card
						img={Card1}
						content="Pilih kelas yang sesuai dengan minat dan tujuan pendidikan Anda"
					/>
					<Card
						img={Card2}
						content="Kuasai Berbagai Materi yang Sudah Disediakan UMKM Grow"
					/>
					<Card
						img={Card3}
						content="Jangan lewatkan kesempatan untuk menerima sertifikat"
					/>
				</div>
			</div>

			{/* <TentangSection> */}
			<section id="tentang">
				<div className="md:mx-[154px] px-4 flex flex-col  space-y-5 md:flex-row justify-between mt-32 items-center">
					<div className="md:basis-1/2">
						<img
							className="w-[250px] md:w-[500px]"
							src={Tentang1}
							alt="what"
						/>
					</div>
					<div className="md:basis-1/2">
						<h1 className="font-bold text-3xl mb-4">Tentang UMKM Grow</h1>
						<p className="text-justify">
							Sebuah platform edukasi online yang memberikan pengetahuan dan
							keterampilan kepada pelaku UMKM untuk meningkatkan kualitas
							bisnisnya. Berfokus pada inovasi, pemasaran, manajemen keuangan,
							dan teknologi
						</p>
						<Link to="/courses">
							<button className="px-2 py-1 border-2 border-[#008D91] rounded-md bg-[#008D91] text-white mt-6 hover:font-semibold">
								Lihat kelas
							</button>
						</Link>
					</div>
				</div>

				<div className="md:mx-[154px] px-4 flex flex-col-reverse md:space-x-72 md:flex-row justify-between mt-16 items-center">
					<div className="md:basis-1/2">
						<h1 className="font-bold text-3xl my-4">Layanan UMKM Grow</h1>
						<p className="text-justify">
							UMKM Grow menyediakan beberapa layanan seperti Grow Digital, Grow
							Your Bussiness, Grow Your Market, dan Grow Connect.
						</p>
						<Link to="/courses">
							<button className="px-2 py-1 border-2 border-[#008D91] rounded-md bg-[#008D91] text-white mt-6 hover:font-semibold">
								Lihat kelas
							</button>
						</Link>
					</div>
					<div className="md:basis-1/2 grow">
						<img
							className="w-[250px] md:w-[700px]"
							src={Tentang2}
							alt="what"
						/>
					</div>
				</div>
			</section>
			{/* </TentangSection> */}

			{/* <Footer> */}
			<Footer />
			{/* </Footer> */}
		</>
	);
}

export default Home;
