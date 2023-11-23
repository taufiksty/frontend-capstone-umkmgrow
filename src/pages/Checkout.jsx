import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Button from '../components/common/Button';
import Footer from '../components/common/Footer';
import Navbar from '../components/common/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { capitalizeWords } from '../utils/string';
import { purchaseCourse } from '../redux/actions/course';
import useToken from '../hooks/useToken';
import { refreshUserEnrollments } from '../redux/actions/auth';

function Checkout() {
	const { enrollId } = useParams();
	const { search } = useLocation();
	const queryParams = new URLSearchParams(search);

	const courseId = queryParams.get('courseId');
	const courseName = queryParams.get('courseName');
	const courseCategories = queryParams.get('categories');
	const coursePrice = queryParams.get('price');

	const authData = useSelector((state) => state.auth.data.user);
	const loading = useSelector((state) => state.course.loading);
	const error = useSelector((state) => state.course.error);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	if (error) {
		navigate('/servererror');
	}

	const accessToken = useToken();

	function handlePurchaseCourse(e) {
		e.preventDefault();
		dispatch(purchaseCourse(accessToken, enrollId)).then((res) => {
			if (res ? res.success : null) {
				dispatch(refreshUserEnrollments(accessToken));
				navigate(`/courses/${courseId}`);
			}
		});
	}

	return (
		<>
			<Navbar variant="secondary" />

			<main className="p-4 md:mx-[154px] pb-24 space-y-6 pt-48">
				<h1 className="text-3xl font-bold">{authData.fullname}</h1>

				<p className="text-gray-600">{authData.email}</p>

				<div className="flex flex-col">
					<h3 className="font-medium text-2xl">{courseName}</h3>

					<p className="text-sm text-gray-500 mt-3 space-x-2">
						{courseCategories.split(',').map((c) => (
							<span
								key={c}
								className="bg-teal-500 text-white px-2 py-1 rounded-full text-xs">
								{capitalizeWords(c)}
							</span>
						))}
					</p>

					<p className="text-right text-lg mt-4 font-medium text-red-500">
						{parseFloat(coursePrice)
							? `Rp${parseFloat(coursePrice)}`
							: 'Gratis'}
					</p>
				</div>

				<div className="border-t border-gray-300 flex justify-between py-4">
					<p className="font-medium">Total</p>
					<p className="text-xl font-medium">
						{parseFloat(coursePrice)
							? `Rp${parseFloat(coursePrice)}`
							: 'Gratis'}
					</p>
				</div>

				<p className="text-xs text-gray-500 leading-6">
					Dengan membeli kelas ini maka sudah menyetujui Ketentuan & Peraturan
					dari UMKM Grow
				</p>

				<div className="flex justify-between">
					<Button
						variant="secondary"
						onClick={() => navigate(-1)}>
						Kembali
					</Button>
					<Button
						onClick={handlePurchaseCourse}
						className={`w-fit flex justify-center items-center ${
							loading && 'opacity-60'
						}`}>
						Beli Kelas
						{loading && <i className="fa fa-circle-o-notch fa-spin ml-3"></i>}
					</Button>
				</div>
			</main>

			<Footer />
		</>
	);
}

export default Checkout;
