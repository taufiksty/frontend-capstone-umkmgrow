import React from "react";
import LogoSkilvul from "../../assets/LogoSkilvul.png";

function FormProfile() {
  return (
    <div className="px-4 py-2 border border-gray-400 rounded-md md:col-span-2">
      <div>
        <p className="font-medium mb-2">Foto Profil</p>
      </div>
      <div className="flex items-center space-x-4">
        <img
          className="border border-[#008D91] rounded-full p-2"
          src={LogoSkilvul}
          alt=""
        />
        <button className="px-2 py-1 border-[#e74242] rounded-md bg-[#e74242] text-white hover:bg-[#d34b4b]">
          Ubah Profil
        </button>
      </div>

      <div className="flex justify-between mt-2">
        <div className="flex flex-col">
          <label className="font-medium" htmlFor="">
            Nama Lengkap
          </label>
          <input
            className="border border-gray-400 rounded-md px-2 py-1"
            type="text"
            name="namaLengkap"
            id="namaLengkap"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-medium" htmlFor="">
            Jenis Kelamin
          </label>
          <div className="flex space-x-6">
            <div className="flex items-center space-x-1">
              <input type="radio" name="Laki-Laki" id="Laki-Laki" />
              <label htmlFor="">Laki-Laki</label>
            </div>
            <div className="flex items-center space-x-1">
              <input type="radio" name="perempuan" id="perempuan" />
              <label htmlFor="">Perempuan</label>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-2">
        <div className="flex flex-col">
          <labe className="font-medium" l htmlFor="">
            Alamat Email
          </labe>
          <input
            className="border border-gray-400 rounded-md px-2 py-1"
            type="text"
            name="email"
            id="email"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-medium" htmlFor="">
            Nomor WhatsApp
          </label>
          <input
            className="border border-gray-400 rounded-md px-2 py-1"
            type="text"
            name="nomor"
            id="nomor"
          />
        </div>
      </div>

      <div className="flex flex-col mt-2">
        <label className="font-medium" htmlFor="">
          Alamat
        </label>
        <textarea
          className="border border-gray-400 rounded-md px-2 py-1"
          name="alamat"
          id="alamat"
          cols="30"
          rows="3"
        ></textarea>
      </div>

      <div className="flex flex-col mt-2">
        <label className="font-medium" htmlFor="bidangUsaha">
          {" "}
          Bidang Usaha
        </label>
        <select
          className="border border-gray-400 rounded-md p-2"
          id="bidangUsaha"
          name="bidangUsaha"
        >
          <option value="">Makanan & Minuman</option>
          <option value="">Pakaian & Model</option>
          <option value="">E-Commerce</option>
          <option value="">Jasa Kecantikan</option>
          <option value="">Keseharan & Kebugaran</option>
          <option value="">Jasa Teknologi Informasi</option>
          <option value="">Manufaktur Kecil</option>
          <option value="">Pertanian</option>
          <option value="">Pelayanan Jasa Umum</option>
        </select>
      </div>

      <div className="flex flex-col mt-2">
        <label className="font-medium" htmlFor="">
          Nama Usaha
        </label>
        <input
          className="border border-gray-400 rounded-md px-2 py-1"
          type="text"
          name="namaUsaha"
          id="namaUsaha"
        />
      </div>

      <div className="flex flex-col mt-2">
        <label className="font-medium" htmlFor="kemampuan">
          Kemampuan yang ingin dikembangkan
        </label>
        <select
          className="border border-gray-400 rounded-md p-2"
          id="kemampuan"
          name="kemampuan"
        >
          <option value="">Manajemen & Keuangan</option>
          <option value="">Pemasaran</option>
          <option value="">Kepemimpinan</option>
          <option value="">Hubungan Pelanggan</option>
          <option value="">Kemampuan Berkomunikasi</option>
          <option value="">Kreativitas & Inovasi</option>
        </select>
      </div>

      <div className="flex justify-end my-4 ">
        <button className="px-4 py-1 border-2 border-[#008D91] rounded-md bg-[#008D91] text-white">
          Simpan
        </button>
      </div>
    </div>
  );
}

export default FormProfile;
