import FormProfile from '../components/profile/FormProfile';
import KelasSaya from '../components/profile/KelasSaya';
import ExamHistory from '../components/profile/ExamHistory';
import Footer from '../components/common/Footer';
import Navbar from '../components/common/Navbar';
import { useLocation, useNavigate } from 'react-router';

function Profile() {
	const { search } = useLocation();
	const queryParams = new URLSearchParams(search);
	const section = queryParams.get('section');

	const navigate = useNavigate();

	const renderSection =
		section === 'exam-history' ? <ExamHistory /> : <KelasSaya />;
	return (
		<>
			<Navbar />

			<main className="mx-4 md:mx-[154px] pt-36 md:pt-44 md:flex md:space-x-10 min-h-[70vh]">
				<div className="mb-4 p-2 border border-gray-400 rounded-md flex flex-col h-fit items-start space-y-2 md:basis-1/4">
					<button
						onClick={() => navigate('/profile')}
						className="font-medium hover:text-[#008D91]">
						Profile
					</button>
					<button
						onClick={() => navigate('/profile?section=my-course')}
						className="font-medium hover:text-[#008D91]">
						Kelas saya
					</button>
					<button
						onClick={() => navigate('/profile?section=exam-history')}
						className="font-medium hover:text-[#008D91]">
						Riwayat ujian
					</button>
				</div>

				<div className="md:basis-3/4">
					{!section ? <FormProfile /> : renderSection}
				</div>
			</main>

			<Footer />
		</>
	);
}

export default Profile;
