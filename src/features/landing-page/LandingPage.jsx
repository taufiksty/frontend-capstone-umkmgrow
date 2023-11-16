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
      <nav className="flex justify-between bg-[#E5F2FA] md:px-[154px] py-4 items-center border-b-2 fixed w-full">
        <div className="mr-16 cursor-pointer">
          <img src={Logo} alt="logo" />
        </div>
        <div className="mr-auto">
          <ul className="flex gap-6 cursor-pointer">
            <li>Beranda</li>
            <li>Tentang</li>
            <li>Kelas</li>
            <li>Kontak</li>
          </ul>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-1 border-2 border-[#008D91] rounded-md text-[#008D91]">
            Login
          </button>
          <button className="px-4 py-1 border-2 border-[#008D91] rounded-md bg-[#008D91] text-white">
            Daftar
          </button>
        </div>
      </nav>

      <div className="bg-[#E5F2FA] px-[154px] py-24 flex justify-between items-center">
        <div>
          <h1 className="font-bold text-4xl mb-4 leading-tight">
            Menumbuhkan UMKM <br /> Tangguh dengan <br />
            Edukasi Berkualitas!
          </h1>
          <p>
            Pelajari kelas yang Anda butuhkan dan segera aplikasikan di bisnis
            Anda.
          </p>
          <button className="px-2 py-1 border-2 border-[#008D91] rounded-md bg-[#008D91] text-white mt-6">
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
        <div className="flex justify-center gap-6">
          <div className="text-center py-8 px-6 bg-white border border-gray-200 rounded-lg shadow">
            <div>
              <img
                className="flex justify-center mb-4"
                src={Card1}
                alt="card1"
              />
              <p>
                Pilih kelas yang sesuai dengan <br /> minat dan tujuan
                pendidikan Anda
              </p>
            </div>
          </div>
          <div className="text-center py-8 px-6 bg-white border border-gray-200 rounded-lg shadow">
            <div>
              <img
                className="grid justify-items-center mb-4 items-center"
                src={Card2}
                alt="card2"
              />
              <p>
                Kuasai Berbagai Mater yang <br /> Sudah Disediakan UMK Grow
              </p>
            </div>
          </div>
          <div className="text-center py-8 px-6 bg-white border border-gray-200 rounded-lg shadow">
            <div>
              <img
                className="flex justify-center mb-4"
                src={Card3}
                alt="card3"
              />
              <p>
                Jangan lewatkan kesempatan <br /> untuk menerima sertifikat
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-[154px] flex justify-between mt-32 items-center">
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
          <button className="px-2 py-1 border-2 border-[#008D91] rounded-md bg-[#008D91] text-white mt-6">
            Lihat kelas
          </button>
        </div>
      </div>

      <div className="px-[154px] flex justify-between mt-32 items-center">
        <div>
          <h1 className="font-bold text-3xl mb-4">Layanan UMKM Grow</h1>
          <p className="text-justify">
            UMKM Grow menyediakan beberapa layanan seperti <br /> Grow Digital,
            Grow Your Bussiness, Grow Your Market, <br /> dan Grow Connect.
          </p>
          <button className="px-2 py-1 border-2 border-[#008D91] rounded-md bg-[#008D91] text-white mt-6">
            Lihat kelas
          </button>
        </div>
        <div>
          <img src={Tentang2} alt="what" />
        </div>
      </div>

      <div className="px-[154px] pt-8 pb-16 bg-[#E5F2FA] flex justify-between mt-16 border-b-2">
        <div>
          <img src={Logo} alt="" />
          <p className="mt-2">Berkembang Bersama UMKM Grow</p>
          <div>
            <img src="" alt="" />
          </div>
        </div>
        <div>
          <h4 className="mb-4 font-semibold">Kontak</h4>
          <p>umkmgrowfs9@gmail.com</p>
          <p>+02198765432</p>
        </div>
        <div>
          <h4 className="mb-4 font-semibold">Features</h4>
          <p>Beranda</p>
          <p>Tentang</p>
          <p>Kelas</p>
          <p>Kontak</p>
        </div>
        <div>
          <img src={LogoSkilvul} alt="" />
        </div>
      </div>
      <div className="px-[154px] flex justify-between py-4 bg-[#E5F2FA]">
        <div>
          <p>Copyright @2023 UMKM Grow. All rights reserved</p>
        </div>
        <div className="flex gap-10">
          <p>Syarat dan Ketentuan</p>
          <p>Kebijakan Privasi</p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
