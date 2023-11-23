import Button from '../components/common/Button';
import Footer from '../components/common/Footer';
import Navbar from '../components/common/Navbar';

function Checkout() {
	return (
		<>
			<Navbar />

			<main className="p-4 md:mx-[154px] pb-24 space-y-6 pt-48">
				<h1 className="text-3xl font-bold">Charles Reynolds</h1>

				<p className="text-gray-600">charlesreynolds@gmail.com</p>

				<div className="flex flex-col">
					<h3 className="font-medium text-2xl">
						Fundamental Pemasaran Digital
					</h3>

					<p className="text-sm text-gray-500 mt-3 space-x-2">
						<span className="bg-teal-500 text-white px-2 py-1 rounded-full text-xs">
							Grow Digital
						</span>
						<span className="bg-teal-500 text-white px-2 py-1 rounded-full text-xs">
							Grow Your Market
						</span>
					</p>

					<p className="text-right text-lg mt-4 font-medium text-red-500">
						Gratis
					</p>
				</div>

				<div className="border-t border-gray-300 flex justify-between py-4">
					<p className="font-medium">Total</p>
					<p className="text-xl font-medium">Gratis</p>
				</div>

				<p className="text-xs text-gray-500 leading-6">
					Dengan membeli kelas ini maka sudah menyetujui Ketentuan & Peraturan
					dari UMKM Grow
				</p>

				<div className="flex justify-between">
					<Button variant="secondary">Kembali</Button>
					<Button>Beli Kelas</Button>
				</div>
			</main>

			<Footer />
		</>
	);
}

export default Checkout;
