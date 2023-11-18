import React from "react";
import Logo from "./img/Logo.svg";
import LogoSkilvul from "./img/LogoSkilvul.png";
import Hero from "./img/hero-section.png";
import Card1 from "./img/rafiki.png";
import Card2 from "./img/bro.png";
import Card3 from "./img/amico.png";
import Tentang1 from "./img/what.png";
import Tentang2 from "./img/tentang2.png";

function LandingPage() {
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
              Tentang
            </li>
            <li className="mx-4 my-4 md:my-0 md:mx-0 hover:text-[#008D91]">
              Kelas
            </li>
            <li className="mx-4 my-4 md:my-0 md:mx-0 hover:text-[#008D91]">
              Kontak
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

      <div className="bg-[#E5F2FA] md:px-[154px] px-4 py-24 md:flex md:justify-between md:items-center">
        <div>
          <h1 className="font-bold text-4xl mb-4 leading-tight">
            Menumbuhkan UMKM <br /> Tangguh dengan <br />
            Edukasi Berkualitas!
          </h1>
          <p>
            Pelajari kelas yang Anda butuhkan dan segera aplikasikan di bisnis
            Anda.
          </p>
          <button className="px-2 py-1 border-2 border-[#008D91] rounded-md bg-[#008D91] text-white mt-6 hover:font-semibold">
            Ambil Kelas
          </button>
        </div>
        <div>
          <img src={Hero} width="500" alt="hero" />
        </div>
      </div>

      <div className="bg-[#E5F2FA] text-center pt-14 rounded-b-full">
        <div>
          <h1 className="font-bold text-3xl mb-8">
            Berkembang Bersama UMKM Grow
          </h1>
        </div>
        <div className="md:flex justify-center gap-6">
          <div className="text-center py-6 px-6 bg-white border border-gray-200 rounded-lg shadow">
            <div>
              <img className="mb-4 ml-8" src={Card1} alt="card1" />
              <p>
                Pilih kelas yang <br /> sesuai dengan minat <br /> dan tujuan
                pendidikan Anda
              </p>
            </div>
          </div>
          <div className="text-center py-6 px-6 bg-white border border-gray-200 rounded-lg shadow">
            <div>
              <img
                className="grid justify-items-center mb-4 items-center"
                src={Card2}
                alt="card2"
              />
              <p>
                Kuasai Berbagai <br /> Materi yang Sudah <br /> Disediakan UMK
                Grow
              </p>
            </div>
          </div>
          <div className="text-center py-6 px-6 bg-white border border-gray-200 rounded-lg shadow">
            <div>
              <img
                className="flex justify-center mb-4"
                src={Card3}
                alt="card3"
              />
              <p>
                Jangan lewatkan <br /> kesempatan untuk <br /> menerima
                sertifikat
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="md:px-[154px] px-4 flex justify-between mt-32 items-center">
        <div>
          <img src={Tentang1} alt="what" />
        </div>
        <div>
          <h1 className="font-bold text-3xl mb-4">Tentang UMKM Grow</h1>
          <p className="text-justify">
            Sebuah platform edukasi online yang memberikan <br /> pengetahuan
            dan keterampilan kepada pelaku UMKM <br /> untuk meningkatkan
            kualitas bisnisnya. Berfokus pada <br /> inovasi, pemasaran,
            manajemen keuangan, dan teknologi
          </p>
          <button className="px-2 py-1 border-2 border-[#008D91] rounded-md bg-[#008D91] text-white mt-6 hover:font-semibold">
            Lihat kelas
          </button>
        </div>
      </div>

      <div className="md:px-[154px] px-4 md:flex md:justify-between mt-32 items-center">
        <div>
          <h1 className="font-bold text-3xl mb-4">Layanan UMKM Grow</h1>
          <p className="text-justify">
            UMKM Grow menyediakan beberapa layanan seperti <br /> Grow Digital,
            Grow Your Bussiness, Grow Your Market, <br /> dan Grow Connect.
          </p>
          <button className="px-2 py-1 border-2 border-[#008D91] rounded-md bg-[#008D91] text-white mt-6 hover:font-semibold">
            Lihat kelas
          </button>
        </div>
        <div>
          <img src={Tentang2} alt="what" />
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
            <li className="hover:text-[#008D91]">Tentang</li>
            <li className="hover:text-[#008D91]">Kelas</li>
            <li className="hover:text-[#008D91]">Kontak</li>
          </ul>
        </div>
        <div className="mt-2">
          <img src={LogoSkilvul} alt="" />
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

export default LandingPage;
