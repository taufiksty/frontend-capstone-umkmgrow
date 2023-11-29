import { useDispatch, useSelector } from 'react-redux';
import ImgMaleProfile from '@/assets/images/common/male.png';
import ImgFemaleProfile from '@/assets/images/common/female.png';
import { useEffect, useState } from 'react';
import Button from '../../components/common/Button';
import { fetchAPIFinish, updateUser } from '../../redux/actions/auth';
import useToken from '../../hooks/useToken';
import Swal from 'sweetalert2';

function FormProfile() {
	const [modeUpdate, setModeUpdate] = useState(false);
	const [selectedImage, setSelectedImage] = useState(null);
	const [updateData, setUpdateData] = useState({
		imageProfile: '',
		fullname: '',
		gender: '',
		email: '',
		phone: '',
		address: '',
		businessFields: '',
		companyName: '',
		skillsWant: '',
	});

	const dispatch = useDispatch();

	const accessToken = useToken();
	const userData = useSelector((state) => state.auth.data.user);
	const loading = useSelector((state) => state.auth.loading);

	useEffect(() => {
		const updatedData = {};
		Object.keys(userData).forEach((data) => {
			if (data in updateData) {
				updatedData[data] = userData[data];
			}
		});
		setUpdateData(() => updatedData);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [userData]);

	function handlePhoneKeyDown(e) {
		const allowedKeys = [
			'Backspace',
			'Delete',
			'ArrowLeft',
			'ArrowRight',
			'ArrowUp',
			'ArrowDown',
		];
		if (!/\d/.test(e.key) && !allowedKeys.includes(e.key)) {
			e.preventDefault();
		}
	}

	function handleImageChange(e) {
		const file = e.target.files[0];

		if (file) {
			if (file.type.startsWith('image/')) {
				setUpdateData({ ...updateData, imageProfile: file });

				const reader = new FileReader();

				reader.onloadend = () => {
					setSelectedImage(reader.result);
				};

				reader.readAsDataURL(file);
			} else {
				alert('Please choose a valid image file.');
				e.target.value = '';
			}
		}
	}

	function handleSubmitUpdate(e) {
		e.preventDefault();

		const formData = new FormData();

		Object.keys(updateData).forEach((data) => {
			if (data === 'imageProfile') {
				if (updateData[data] instanceof File) {
					formData.append('image', updateData[data]);
				}
			} else {
				formData.append(data, updateData[data]);
			}
		});

		dispatch(updateUser(accessToken, userData.id, formData)).then((res) => {
			if (res?.success) {
				setModeUpdate(false);
				window.location.reload();
			} else if (!res?.success) {
				Swal.fire({
					title: 'Periksa lagi, ya!',
					text: 'Sepertinya ada input yang salah.',
					icon: 'error',
					confirmButtonColor: '#008D91',
				}).then(() => dispatch(fetchAPIFinish()));
			}
		});
	}

	const renderIfImageNull =
		updateData.gender === 'male' ? ImgMaleProfile : ImgFemaleProfile;

	if (!updateData.email) {
		return (
			<div className="flex justify-center items-center h-screen">
				<i className="fa fa-circle-o-notch fa-spin ml-3"></i>
			</div>
		);
	}

	return (
		<div className="mt-10 md:mt-0">
			<div className="md:px-[154px] my-4 md:hidden">
				<h1 className="font-bold text-2xl">Profile</h1>
			</div>
			<div className="p-4 md:p-8 border border-gray-400 rounded-md md:col-span-2 space-y-4 md:space-y-6">
				<div className="flex flex-col items-center justify-center md:items-start">
					<p className="font-medium mb-2">Foto Profil</p>
					<div className="relative">
						<div className="-z-10">
							<label
								htmlFor="imageProfile"
								className="flex justify-center px-20 md:px-0 items-center md:space-x-3">
								<img
									className={`mx-auto md:mx-0 border border-[#008D91] rounded-full ${
										modeUpdate
											? 'w-[25%] md:w-[30%] cursor-pointer hover:opacity-70'
											: 'w-[35%] md:w-[50%]'
									}`}
									src={
										selectedImage ||
										(updateData.imageProfile
											? updateData.imageProfile
											: renderIfImageNull)
									}
									alt="imgProfile"
								/>
								{modeUpdate && <p>Klik foto untuk mengubah</p>}
							</label>
						</div>
						<input
							type="file"
							name="imageProfile"
							id="imageProfile"
							accept="image/*"
							disabled={!modeUpdate}
							className="hidden"
							onChange={handleImageChange}
						/>
					</div>
				</div>

				<div className="flex flex-col md:flex-row justify-between md:space-y-0 md:space-x-6 space-y-3">
					<div className="flex flex-col md:basis-3/5">
						<label
							className="font-medium"
							htmlFor="fullname">
							Nama Lengkap
						</label>
						<input
							className="border border-gray-400 rounded-md px-2 py-1"
							type="text"
							name="namaLengkap"
							id="namaLengkap"
							value={updateData.fullname}
							disabled={!modeUpdate}
							onChange={(e) =>
								setUpdateData({ ...updateData, fullname: e.target.value })
							}
						/>
					</div>
					<div className="flex flex-col md:basis-2/5">
						<label
							className="font-medium"
							htmlFor="">
							Jenis Kelamin
						</label>
						<div className="flex space-x-6 md:mt-2">
							<div className="flex items-center space-x-1">
								<input
									type="radio"
									name="gender"
									id="male"
									value="male"
									disabled={!modeUpdate}
									checked={updateData.gender === 'male'}
									onChange={(e) =>
										setUpdateData({ ...updateData, gender: e.target.value })
									}
								/>
								<label htmlFor="">Laki-laki</label>
							</div>
							<div className="flex items-center space-x-1">
								<input
									type="radio"
									name="gender"
									id="female"
									value="female"
									disabled={!modeUpdate}
									checked={updateData.gender === 'female'}
									onChange={(e) =>
										setUpdateData({ ...updateData, gender: e.target.value })
									}
								/>
								<label htmlFor="">Perempuan</label>
							</div>
						</div>
					</div>
				</div>

				<div className="flex flex-col md:flex-row justify-between space-y-3 md:space-y-0 md:space-x-6">
					<div className="flex flex-col md:basis-1/2">
						<label
							className="font-medium"
							htmlFor="email">
							Email
						</label>
						<input
							className="border border-gray-400 rounded-md px-2 py-1"
							type="email"
							name="email"
							id="email"
							value={updateData.email}
							disabled={!modeUpdate}
						/>
					</div>
					<div className="flex flex-col md:basis-1/2">
						<label
							className="font-medium"
							htmlFor="phone">
							Nomor WhatsApp
						</label>
						<input
							className="border border-gray-400 rounded-md px-2 py-1"
							type="tel"
							name="phone"
							id="phone"
							value={updateData.phone || ''}
							disabled={!modeUpdate}
							onKeyDown={handlePhoneKeyDown}
							onChange={(e) =>
								setUpdateData({ ...updateData, phone: e.target.value })
							}
						/>
					</div>
				</div>

				<div className="flex flex-col mt-2">
					<label
						className="font-medium"
						htmlFor="address">
						Alamat
					</label>
					<textarea
						className="border border-gray-400 rounded-md px-2 py-1"
						name="address"
						id="address"
						cols="30"
						rows="3"
						disabled={!modeUpdate}
						value={updateData.address || ''}
						onChange={(e) =>
							setUpdateData({ ...updateData, address: e.target.value })
						}></textarea>
				</div>

				<div className="flex flex-col mt-2">
					<label
						className="font-medium"
						htmlFor="businessFields">
						Bidang Usaha
					</label>
					<select
						className="border border-gray-400 rounded-md p-2"
						id="businessFields"
						name="businessFields"
						value={updateData.businessFields || ''}
						onChange={(e) =>
							setUpdateData({ ...updateData, businessFields: e.target.value })
						}>
						<option value=""></option>
						<option value="Makanan & Minuman">Makanan & Minuman</option>
						<option value="Pakaian & Model">Pakaian & Model</option>
						<option value="E-Commerce">E-Commerce</option>
						<option value="Jasa Kecantikan">Jasa Kecantikan</option>
						<option value="Keseharan & Kebugaran">Keseharan & Kebugaran</option>
						<option value="Jasa Teknologi Informasi">
							Jasa Teknologi Informasi
						</option>
						<option value="Manufaktur Kecil">Manufaktur Kecil</option>
						<option value="Pertanian">Pertanian</option>
						<option value="Pelayanan Jasa Umum">Pelayanan Jasa Umum</option>
					</select>
				</div>

				<div className="flex flex-col mt-2">
					<label
						className="font-medium"
						htmlFor="companyName">
						Nama Usaha
					</label>
					<input
						className="border border-gray-400 rounded-md px-2 py-1"
						type="text"
						name="companyName"
						id="companyName"
						value={updateData.companyName || ''}
						disabled={!modeUpdate}
						onChange={(e) =>
							setUpdateData({ ...updateData, companyName: e.target.value })
						}
					/>
				</div>

				<div className="flex flex-col mt-2">
					<label
						className="font-medium"
						htmlFor="skillsWant">
						Kemampuan yang ingin dikembangkan
					</label>
					<select
						className="border border-gray-400 rounded-md p-2"
						id="skillsWant"
						name="skillsWant"
						value={updateData.skillsWant || ''}
						onChange={(e) =>
							setUpdateData({ ...updateData, skillsWant: e.target.value })
						}>
						<option value=""></option>
						<option value="Manajemen & Keuangan">Manajemen & Keuangan</option>
						<option value="Pemasaran">Pemasaran</option>
						<option value="Kepemimpinan">Kepemimpinan</option>
						<option value="Hubungan Pelanggan">Hubungan Pelanggan</option>
						<option value="Kemampuan Berkomunikasi">
							Kemampuan Berkomunikasi
						</option>
						<option value="Kreativitas & Inovasi">Kreativitas & Inovasi</option>
					</select>
				</div>

				<div className="flex justify-end my-4 ">
					{!modeUpdate ? (
						<Button
							variant="secondary"
							onClick={() => setModeUpdate(true)}>
							Ubah data
						</Button>
					) : (
						<div className="flex mt-3 md:mt-6 space-x-3 md:space-x-6">
							<Button
								variant="secondary"
								onClick={() => setModeUpdate(false)}>
								Batalkan
							</Button>
							<Button
								onClick={handleSubmitUpdate}
								className={`flex justify-center items-center ${
									loading && 'opacity-60'
								}`}>
								Simpan{' '}
								{loading && (
									<i className="fa fa-circle-o-notch fa-spin ml-3"></i>
								)}
							</Button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default FormProfile;
