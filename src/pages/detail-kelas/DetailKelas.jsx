import React from "react";
import Logo from "./img/Logo.svg";
import LogoSkilvul from "./img/LogoSkilvul.png";
import KelasMarketing from "./img/digitalMarketing.jpg";

function DetailKelas() {
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

      <div className="bg-[#E5F2FA] md:px-[154px] px-4 py-36 md:flex md:justify-between items-center">
        <div className="my-4">
          <h1 className="font-bold text-4xl mb-2 leading-tight">
            Pemasaran Digital
          </h1>
          <p>Dasar-Dasar Pemasaran Digital</p>
          <button className="px-3 py-1 border-[#008D91] rounded-md bg-[#008D91] text-white mt-4 hover:font-semibold">
            Pilih kelas ini
          </button>
        </div>
        <div>
          <img
            className="rounded-lg w-[450px]"
            src={KelasMarketing}
            alt="imgKelas"
          />
        </div>
      </div>

      <div className="md:px-[154px] px-4 md:flex md:justify-between md:gap-6 mt-8">
        <div className="border border-gray-400 my-2 p-4 rounded-lg basis-3/4">
          <div>
            <h4 className="text-[#008D91] font-semibold mb-2">Tentang Kelas</h4>
            <p className="text-justify">
              Pemasaran Digital merupakan metode pemasaran tercepat dan termudah
              di era digital ini. Perkembnangan zaman membuat metode pemasaran
              sedikit berubah. Dulu, strategi pemasaran "offline" sangatlah
              efektif. Namun kini, pemasaran digital tak kalah efektif, yang
              disebabkan oleh kemudahan mengakses internet. Dengan mengikuti
              Course ini, kalian akan mengerti strategi dasar pemasaran digital,
              apa saja parameter pemasaran digital, media atau alat yang
              digunakan untuk melakukan pemasaran digital. Materi yang ada
              mencakup pengenalan pasar digital, ekosistem apa saja yang ada,
              hingga parameter & objektif pemasaran. Bagi kalian yang ingin
              mempelajari marketing, Course ini sangat cocok
            </p>
          </div>
        </div>
        <div className="border border-gray-400 my-2 p-4 rounded-lg basis-1/4">
          <div className="flex items-center text-[#008D91] font-semibold mb-2">
            <img src={Logo} alt="" />
            <h4>Jumlah Materi</h4>
          </div>
          <div>
            <p>10 Video Pembelajaran</p>
            <p>5 Literasi Bacaan</p>
          </div>
          <div className="flex items-center text-[#008D91] font-semibold my-2">
            <img src={Logo} alt="" />
            <h4>Total Durasi</h4>
          </div>
          <div>
            <p>4 Jam 30 Menit</p>
          </div>
          <div className="flex items-center text-[#008D91] font-semibold my-2">
            <img src={Logo} alt="" />
            <h4>Sertifikat</h4>
          </div>
          <div>
            <p>Ya</p>
          </div>
        </div>
      </div>

      <div className="md:px-[154px] px-4 mt-4 max-w-[80%]">
        <div className="border border-gray-400 my-2 p-4 rounded-lg ">
          <div>
            <h4 className="text-[#008D91] font-semibold mb-2">Persyaratan</h4>
            <p className="text-justify">
              Sebelum mempelajari Course ini, pastikan kalian sering menggunakan
              mesin pencari (Google), internet, serta memiliki akun sosial media
            </p>
          </div>
        </div>
      </div>

      <div className="md:px-[154px] px-4 mt-4 max-w-[80%]">
        <div className="border border-gray-400 my-2 p-4 rounded-lg ">
          <div>
            <h4 className="text-[#008D91] font-semibold mb-2">
              Untuk Siapa Kelas Ini
            </h4>
            <p className="text-justify">Pemula</p>
          </div>
        </div>
      </div>

      <div className="md:px-[154px] px-4 mt-4 max-w-[80%]">
        <div className="border border-gray-400 my-2 p-4 rounded-lg ">
          <div>
            <h4 className="text-[#008D91] font-semibold mb-2">Materi</h4>
            <p className="text-justify">
              Pengenalan Pemasaran Digital, Ekosistem Pemasaran Digital,
              Parameter & Objektif Pemasaran Digital, dan Ujian Sertifikasi
            </p>
          </div>
        </div>
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

export default DetailKelas;
