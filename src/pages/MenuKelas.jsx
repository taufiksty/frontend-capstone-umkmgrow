import Navbar from '../components/common/Navbar';
import { useEffect, useRef, useState } from 'react';
import Button from '../components/common/Button';
import Footer from '../components/common/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { retrieveCourses } from '../redux/actions/courses';
import { Link } from 'react-router-dom';

function MenuKelas() {
	const [search, setSearch] = useState('');
	const [category, setCategory] = useState('');

	const searchRef = useRef(null);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(retrieveCourses({ category, search }));
	}, [dispatch, category, search]);

	const coursesData = useSelector((state) => state.courses.data);

	const renderCourses = (dataCourses) => {
		return Object.keys(dataCourses).length > 0 ? (
			dataCourses.map((course, i) => (
				<Link
					key={course.id}
					to={`/courses/${course.id}`}>
					<div
						className={`flex flex-col md:flex-row gap-5 py-3 hover:bg-slate-100 cursor-pointer ${
							i === dataCourses.length - 1 ? '' : 'border-b border-zinc-300'
						}`}>
						<img
							className="w-full md:w-52 rounded-md"
							src={course.imageCourse}
							alt="imgCourse"
						/>
						<div>
							<h4 className="font-semibold">{course.courseName}</h4>
							<p className="text-[14px]">{course.courseDescription}</p>
						</div>
						<h4 className="text-red-600 ml-auto">{course.price || 'Gratis'}</h4>
					</div>
				</Link>
			))
		) : (
			<div></div>
		);
	};
	return (
		<>
			<Navbar />

			<div className="bg-[#E5F2FA] md:px-[154px] pt-64 py-40 text-center">
				<div>
					<h1 className="font-bold text-4xl mb-2 leading-tight">
						Berkembang Bersama UMKM Grow
					</h1>
					<p>
						Pilih kelas yang Anda minati dan peroleh sertifikat sebagai <br />{' '}
						bukti prestasi Anda dalam bidang tersebut.
					</p>
					<button
						onClick={() => {
							if (searchRef.current) {
								searchRef.current.focus();
							}
						}}
						className="px-3 py-1 border-[#008D91] rounded-md bg-[#008D91] text-white mt-4 hover:font-semibold">
						Cari kelas
					</button>
				</div>
			</div>

			<div
				id="search"
				className="md:px-[154px] px-4 flex items-end gap-2 mt-10 md:mt-20">
				<input
					ref={searchRef}
					className="w-full border-2 border-[#008D91] px-2 py-1 rounded-md"
					type="text"
					name="search"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					placeholder="Cari kelas"
				/>
				<button className="px-2 py-1 border-2 border-[#008D91] rounded-md bg-[#008D91] text-white mt-4 hover:font-semibold">
					Search
				</button>
			</div>

			<div className="md:px-[154px] px-4 flex justify-between mt-4">
				<div className="flex gap-2 mr-2">
					<Button
						onClick={() => setCategory('grow digital')}
						variant={category === 'grow digital' ? 'primary' : 'secondary'}>
						Grow digital
					</Button>
					<Button
						onClick={() => setCategory('grow your market')}
						variant={category === 'grow your market' ? 'primary' : 'secondary'}>
						Grow your market
					</Button>
					<Button
						onClick={() => setCategory('grow your business')}
						variant={
							category === 'grow your business' ? 'primary' : 'secondary'
						}>
						Grow your bussiness
					</Button>
				</div>
				<div>
					<Button
						onClick={() => setCategory('')}
						variant="secondary"
						className={`border-[#df4d4d] text-[#df4d4d] hover:bg-[#df4d4d]`}>
						Hapus filter
					</Button>
				</div>
			</div>

			<div className="md:mx-[154px] mx-4 mb-8  mt-8 md:mt-16">
				{renderCourses(coursesData)}
			</div>

			<Footer />
		</>
	);
}

export default MenuKelas;
