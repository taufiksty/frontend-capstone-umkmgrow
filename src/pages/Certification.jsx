import { useDispatch, useSelector } from 'react-redux';
import Footer from '../components/common/Footer';
import Navbar from '../components/common/Navbar';
import { useState, useEffect } from 'react';
import { retrieveCourseCertification } from '../redux/actions/course';
import useToken from '../hooks/useToken';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import ImgMaleProfile from '../assets/images/common/male.png';
import ImgFemaleProfile from '../assets/images/common/female.png';
import Button from '../components/common/Button';
import { Document, Page } from 'react-pdf/dist/esm/entry.vite';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

function Certification() {
	const { id } = useParams();
	const { search } = useLocation();
	const queryParams = new URLSearchParams(search);
	const courseName = queryParams.get('courseName');

	const [certification, setCertification] = useState(null);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const accessToken = useToken();

	const userData = useSelector((state) => state.auth.data.user);
	const loading = useSelector((state) => state.course.loading);
	const error = useSelector((state) => state.course.error);

	useEffect(() => {
		dispatch(retrieveCourseCertification(accessToken, id)).then((res) => {
			setCertification(res.data.certification);
		});
	}, [accessToken, dispatch, id]);

	if (error) {
		navigate('/servererror');
	}

	const imageIfUserNotHave =
		userData?.gender === 'male' ? ImgMaleProfile : ImgFemaleProfile;

	return (
		<>
			<Navbar variant="secondary" />

			<section className="md:px-[154px] px-3 md:space-y-10 pt-40 md:pt-52">
				<div className="mb-8 space-y-3 md:space-y-7">
					<h1 className="font-bold text-3xl md:text-4xl mb-2">
						Sertifikat {courseName}
					</h1>
					<div>
						<p className="text-[16px]">
							Selamat! Anda telah menyelesaikan kelas {courseName} dengan baik.
						</p>
						<p className="text-[16px]">
							Segera aplikasikan pengetahuan baru Anda, ya!
						</p>
					</div>
				</div>

				<div className="md:flex md:justify-between">
					<div className="flex justify-center md:justify-start items-center w-full mb-8">
						{!certification || loading ? (
							<i className="fa fa-circle-o-notch fa-spin ml-3"></i>
						) : (
							<>
								<div className="block md:hidden">
									<Document
										file={certification.imageCertificate}
										onLoadError={console.error}>
										<Page
											pageNumber={1}
											width={400}
										/>
									</Document>
								</div>
								<div className="hidden md:block">
									<Document
										file={certification.imageCertificate}
										onLoadError={console.error}>
										<Page pageNumber={1} />
									</Document>
								</div>
							</>
						)}
					</div>

					<div className="bg-[#E5F2FA] p-8 md:py-8 md:px-32 rounded-lg text-center md:space-y-7 mb-8 flex flex-col justify-center items-center">
						<div className="flex justify-center">
							<img
								className="border-2 border-[#008d91] rounded-[100%] w-20 md:w-32"
								src={
									userData.imageProfile
										? userData.imageProfile
										: imageIfUserNotHave
								}
								alt="avatar"
							/>
						</div>

						<div>
							<h4 className="font-semibold text-[24px] md:text-2xl my-4">
								{userData.fullname}
							</h4>

							<p className="text-[18px]">{userData.companyName}</p>
							<p className="text-slate-500 text-[14px]">
								{userData.businessFields}
							</p>
						</div>

						<div className="flex flex-col space-y-3 md:space-y-10">
							<h4 className="font-medium text-[20px] md:text-2xl mt-3">
								{courseName}
							</h4>

							<div>
								<Link
									to={certification?.imageCertificate}
									target="_blank">
									<Button variant="primary">Cetak Sertifikat</Button>
								</Link>
							</div>
						</div>
					</div>
				</div>

				<div>
					<Button
						className="w-full font-medium py-2"
						variant="secondary"
						onClick={() => navigate(`/courses/${id}`)}>
						Lihat Detail Kelas
					</Button>
				</div>
			</section>

			<Footer />
		</>
	);
}

export default Certification;
