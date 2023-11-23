import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../components/common/Footer';
import Navbar from '../components/common/Navbar';
import Button from '../components/common/Button';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { retrieveCourse } from '../redux/actions/course';
import { IoNewspaperOutline } from 'react-icons/io5';
import { IoTimeOutline } from 'react-icons/io5';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { secondToHMString } from '../utils/time';

function DetailKelas() {
	const { id } = useParams();

	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(retrieveCourse({ id }));
	}, [dispatch, id]);

	const courseData = useSelector((state) => state.course.data);
	const errorCourse = useSelector((state) => state.auth.error);

	if (errorCourse) {
		navigate('/servererror');
	}

	return (
		<>
			<Navbar />

			<div className="bg-[#E5F2FA] md:px-[154px] px-4 pt-48 pb-20 flex flex-col-reverse space-y-3 md:justify-between md:items-center">
				<div className="my-4 flex flex-col space-y-3">
					<h1 className="font-bold text-4xl mb-2 leading-tight">
						{courseData.courseName}
					</h1>
					<p>{courseData.courseDescription}</p>
					<Button className="w-fit">Pilih kelas ini</Button>
				</div>
				<div>
					<img
						className="rounded-lg w-[450px]"
						src={courseData.imageCourse}
						alt="imgKelas"
					/>
				</div>
			</div>

			<div className="md:px-[154px] px-4 md:flex md:justify-between md:gap-6 mt-14 space-y-5">
				<div className="border border-gray-400 my-2 p-5 rounded-lg basis-3/4">
					<div>
						<h4 className="text-[#008D91] font-semibold mb-2">Tentang Kelas</h4>
						<p>{courseData.courseAbout}</p>
					</div>
				</div>
				<div className="border border-gray-400 text-center my-2 p-5 rounded-lg basis-1/4">
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

			<div className="md:px-[154px] px-4 mt-4 md:max-w-[80%]">
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
			</div>

			<div className="md:px-[154px] px-4 mt-4 md:max-w-[80%]">
				<div className="border border-gray-400 my-2 p-5 rounded-lg ">
					<div>
						<h4 className="text-[#008D91] font-semibold mb-2">
							Untuk Siapa Kelas Ini
						</h4>
						<p>{courseData.forWho}</p>
					</div>
				</div>
			</div>

			<div className="md:px-[154px] px-4 mt-4 md:max-w-[80%]">
				<div className="border border-gray-400 my-2 p-5 rounded-lg ">
					<div>
						<h4 className="text-[#008D91] font-semibold mb-2">Materi</h4>
						<p className="text-justify">
							<ol>
								{Object.keys(courseData).length > 0
									? courseData.materials.map((m, i) => (
											<li key={i + 1}>
												{i + 1}. {m}
											</li>
											// eslint-disable-next-line no-mixed-spaces-and-tabs
									  ))
									: ''}
							</ol>
						</p>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
}

export default DetailKelas;
