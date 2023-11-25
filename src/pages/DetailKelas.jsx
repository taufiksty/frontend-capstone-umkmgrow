import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Footer from '../components/common/Footer';
import Navbar from '../components/common/Navbar';
import Button from '../components/common/Button';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	enrollCourse,
	retrieveCourse,
	retrieveCourseModuleContent,
} from '../redux/actions/course';
import {
	IoDocumentTextOutline,
	IoTimeOutline,
	IoNewspaperOutline,
} from 'react-icons/io5';
import { secondToHMString } from '../utils/time';
import useToken from '../hooks/useToken';
import { refreshUserEnrollments } from '../redux/actions/auth';
import Swal from 'sweetalert2';

function DetailKelas() {
	const { id } = useParams();

	const accessToken = useToken();

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const enrollmentsUser = useSelector(
		(state) => state.auth.data.user?.enrollments,
	);
	const enrollment = enrollmentsUser?.find((enroll) => enroll.courseId === id);

	useEffect(() => {
		if (enrollment) {
			dispatch(retrieveCourseModuleContent(accessToken, id));
		} else {
			dispatch(retrieveCourse(id));
		}
	}, [accessToken, dispatch, enrollment, id]);

	const courseData = useSelector((state) => state.course.data);
	const loading = useSelector((state) => state.course.loading);
	const error = useSelector((state) => state.course.error);

	if (error) {
		navigate('/servererror');
	}

	function handleEnrollCourse(e) {
		e.preventDefault();

		if (!accessToken) navigate('/login?access=false');

		dispatch(enrollCourse(accessToken, { courseId: id })).then((res) => {
			if (res ? res.success : null) {
				dispatch(refreshUserEnrollments(accessToken));
				navigate(
					`/checkout/${res.data.enrollment.id}?courseId=${id}&courseName=${courseData.courseName}&categories=${courseData.categoryPath}&price=${courseData.price}`,
				);
			}
		});
	}

	function handleStartLearn(e) {
		e.preventDefault();

		navigate(
			`/courses/${id}/modules?moduleId=${courseData.modules[0].id}&contentId=${courseData.modules[0].contents[0].id}`,
		);
	}

	if (error) {
		console.log(error);
		navigate('/servererror');
	}

	const { search } = useLocation();
	const queryParams = new URLSearchParams(search);
	if (queryParams.get('access') === 'false') {
		Swal.fire({
			position: 'center',
			icon: 'info',
			title: 'Kamu checkout dulu, yah!',
			showConfirmButton: false,
			timer: 1500,
		}).then(() => navigate(`/courses/${id}`, { replace: true }));
	}

	const renderBtnsAfterPurchase = (enrollment) =>
		enrollment.status === 'onlearning' ? (
			<Button
				className="w-fit"
				onClick={handleStartLearn}>
				Mulai belajar
			</Button>
		) : (
			<>
				<Button
					className="w-fit"
					variant="secondary">
					Pelajari lagi
				</Button>
				<Button className="w-fit">Lihat sertifikat</Button>
			</>
		);

	const renderBtnsAfterEnroll = (enrollment) =>
		enrollment.status === 'onpayment' ? (
			<Button
				className="w-fit"
				onClick={() =>
					navigate(
						`/checkout/${enrollment.id}?courseId=${id}&courseName=${courseData.courseName}&categories=${courseData.categoryPath}&price=${courseData.price}`,
					)
				}>
				Lanjutkan checkout
			</Button>
		) : (
			renderBtnsAfterPurchase(enrollment)
		);

	return (
		<>
			<Navbar />

			{/* <Hero> */}
			<div className="bg-[#E5F2FA] md:px-[154px] px-4 pt-48 pb-20 flex flex-col-reverse md:flex-row space-y-3 md:justify-between md:items-center">
				<div className="my-4 flex flex-col space-y-3">
					<h1 className="font-bold text-4xl mb-2 leading-tight">
						{courseData.courseName}
					</h1>
					<p>{courseData.courseDescription}</p>
					{!enrollment ? (
						<Button
							className={`w-fit flex justify-center items-center ${
								loading && 'opacity-60'
							}`}
							onClick={handleEnrollCourse}>
							Pilih kelas ini
							{loading && <i className="fa fa-circle-o-notch fa-spin ml-3"></i>}
						</Button>
					) : (
						renderBtnsAfterEnroll(enrollment)
					)}
				</div>
				<div>
					<img
						className="rounded-lg w-[450px]"
						src={courseData.imageCourse}
						alt="imgKelas"
					/>
				</div>
			</div>
			{/* </Hero> */}

			{/* <Detail> */}
			<div className="md:px-[154px] px-4 md:flex md:justify-between md:gap-8 mt-14 space-y-5 md:space-y-2">
				<div className="basis-3/4 space-y-5">
					<div className="border border-gray-400 my-2 p-5 rounded-lg">
						<div>
							<h4 className="text-[#008D91] font-semibold mb-2">
								Tentang Kelas
							</h4>
							<p>{courseData.courseAbout}</p>
						</div>
					</div>
					<div className="border border-gray-400 my-2 p-5 rounded-lg ">
						<div>
							<h4 className="text-[#008D91] font-semibold mb-2">Persyaratan</h4>
							{Object.keys(courseData).length > 0 ? (
								<p>{courseData.terms.join(' ')}</p>
							) : (
								''
							)}
						</div>
					</div>
					<div className="border border-gray-400 my-2 p-5 rounded-lg ">
						<div>
							<h4 className="text-[#008D91] font-semibold mb-2">
								Untuk Siapa Kelas Ini
							</h4>
							<p>{courseData.forWho}</p>
						</div>
					</div>
					<div className="border border-gray-400 my-2 p-5 rounded-lg ">
						<div>
							<h4 className="text-[#008D91] font-semibold mb-2">Materi</h4>
							<div className="text-justify">
								<ol>
									{Object.keys(courseData).length > 0
										? courseData.materials.map((m, i) => (
												<li key={m}>
													{i + 1}. {m}
												</li>
												// eslint-disable-next-line no-mixed-spaces-and-tabs
										  ))
										: ''}
								</ol>
							</div>
						</div>
					</div>
				</div>
				<div className="border border-gray-400 text-center my-2 p-5 rounded-lg h-fit basis-1/4">
					<div className="flex items-center text-[#008D91] font-semibold mb-2 space-x-3">
						<IoNewspaperOutline size={20} />
						<h4>Jumlah Materi</h4>
					</div>
					<div className="my-3">
						{Object.keys(courseData).length > 0 ? (
							<>
								<p>{courseData.materials.length} Video Pembelajaran</p>
								<p>{courseData.materials.length} Literasi Bacaan</p>
							</>
						) : (
							''
						)}
					</div>
					<div className="flex items-center text-[#008D91] font-semibold my-2 space-x-3">
						<IoTimeOutline size={20} />
						<h4>Total Durasi</h4>
					</div>
					<div className="my-3">
						<p>{secondToHMString(courseData.estimateFinish)}</p>
					</div>
					<div className="flex items-center text-[#008D91] font-semibold my-2 space-x-3">
						<IoDocumentTextOutline size={20} />
						<h4>Sertifikat</h4>
					</div>
					<div className="mt-3">
						<p>Ya</p>
					</div>
				</div>
			</div>
			{/* </Detail> */}

			<Footer />
		</>
	);
}

export default DetailKelas;
