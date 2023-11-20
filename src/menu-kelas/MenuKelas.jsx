import React from "react";
import Logo from "./img/Logo.svg";
import LogoSkilvul from "./img/LogoSkilvul.png";
import KelasMarketing from "./img/digitalMarketing.jpg";

function MenuKelas() {
  return (
    <div className="body-font font-poppins">
      <nav className="md:flex md:items-center md:justify-between bg-[#E5F2FA] md:px-[154px] py-4 border-b border-b-slate-300  fixed w-full md:opacity-100 opacity-0">
        <div className="mr-16 cursor-pointer mx-4 my-4 md:my-0">
          <img src={Logo} alt="logo" />
        </div>
        <div className="mr-auto">
          <ul className="md:flex gap-6 cursor-pointer z-[-1] md:z-auto md:static w-full">
            <li className="mx-4 my-4 md:my-0 md:mx-0 hover:text-[#008D91]">
              Beranda
            </li>
            <li className="mx-4 my-4 md:my-0 md:mx-0 hover:text-[#008D91]">
              Kelas
            </li>
          </ul>
        </div>
        <div className="md:flex gap-2">
          <button className="px-4 py-1 border-2 border-[#008D91] rounded-md text-[#008D91] mx-4 my-2 md:my-0 md:mx-0 hover:bg-[#008D91] hover:text-white hover:font-semibold">
            Login
          </button>{" "}
          <br />
          <button className="px-4 py-1 border-2 border-[#008D91] rounded-md bg-[#008D91] text-white mx-4 my-2 md:my-0 md:mx-0 hover:font-semibold">
            Daftar
          </button>
        </div>
      </nav>

      <div className="bg-[#E5F2FA] md:px-[154px] py-44 text-center">
        <div>
          <h1 className="font-bold text-4xl mb-2 leading-tight">
            Berkembang Bersama UMKM Grow
          </h1>
          <p>
            Pilih kelas yang Anda minati dan peroleh sertifikat sebagai <br />{" "}
            bukti prestasi Anda dalam bidang tersebut.
          </p>
          <button className="px-3 py-1 border-[#008D91] rounded-md bg-[#008D91] text-white mt-4 hover:font-semibold">
            Cari kelas
          </button>
        </div>
      </div>

      <div className="md:px-[154px] px-4 flex items-end gap-2 mt-6">
        <input
          className="w-full border border-[#008D91] px-2 py-1 rounded-md"
          type="text"
          name=""
          id=""
          placeholder="Cari kelas"
        />
        <button className="px-2 py-1 border border-[#008D91] rounded-md bg-[#008D91] text-white mt-4 hover:font-semibold">
          Search
        </button>
      </div>

      <div className="md:px-[154px] px-4 flex justify-between mt-4">
        <div className="flex gap-2 mr-2">
          <button className="px-3 border border-[#008D91] rounded-md text-[#008D91] hover:bg-[#008D91] hover:text-white hover:font-semibold">
            Grow digital
          </button>
          <button className="px-3 border border-[#008D91] rounded-md text-[#008D91] hover:bg-[#008D91] hover:text-white hover:font-semibold">
            Grow your market
          </button>
          <button className="px-3 border border-[#008D91] rounded-md text-[#008D91] hover:bg-[#008D91] hover:text-white hover:font-semibold">
            Grow your bussiness
          </button>
        </div>
        <div>
          <button className="px-3 border border-[#df4d4d] rounded-md text-[#df4d4d] hover:bg-[#df4d4d] hover:text-white hover:font-semibold">
            Hapus filter
          </button>
        </div>
      </div>

      <div className="md:mx-[154px] mx-4 mb-8  mt-8">
        <a href="../detail-kelas">
          <div className="flex gap-5 hover:bg-slate-100 cursor-pointer">
            <img
              className="w-52 rounded-md"
              src={KelasMarketing}
              alt="imgKelas"
            />
            <div>
              <h4 className="font-semibold">Pemasaran Digital</h4>
              <p className="text-[14px]">
                Pelajari dasar-dasar pemasaran digital
              </p>
              <p className="text-[14px]">4,7 ⭐⭐⭐⭐ (15)</p>
            </div>
            <h4 className="text-red-600 ml-auto">Gratis</h4>
          </div>
        </a>
        <hr className="my-4" />
      </div>

      <div className="md:px-[154px] px-4 pt-8 md:pb-16 pb-6 bg-[#E5F2FA] md:flex md:justify-between mt-16 border-b-2">
        <div>
          <img src={Logo} alt="" />
          <p className="mt-2">Berkembang Bersama UMKM Grow</p>
          <div>
            <img src="" alt="" />
          </div>
        </div>
        <div>
          <h4 className="md:mb-4 mt-2 font-semibold">Kontak</h4>
          <ul className="cursor-pointer">
            <li className="hover:text-[#008D91]">umkmgrowfs9@gmail.com</li>
            <li className="hover:text-[#008D91]">+02198765432</li>
          </ul>
        </div>
        <div>
          <h4 className="md:mb-4 mt-2 font-semibold">Features</h4>
          <ul className="cursor-pointer">
            <li className="hover:text-[#008D91]">Beranda</li>
            <li className="hover:text-[#008D91]">Kelas</li>
          </ul>
        </div>
        <div className="mt-2">
          <img src={LogoSkilvul} alt="logoSkilvul" />
        </div>
      </div>
      <div className="md:px-[154px] px-4 md:flex md:justify-between py-4 bg-[#E5F2FA]">
        <div>
          <p>Copyright @2023 UMKM Grow. All rights reserved</p>
        </div>
        <div>
          <ul className="md:flex gap-10 cursor-pointer">
            <li className="hover:text-[#008D91]">Syarat dan Ketentuan</li>
            <li className="hover:text-[#008D91]">Kebijakan Privasi</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MenuKelas;
