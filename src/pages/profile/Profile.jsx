import React from "react";
import Logo from "../../assets/Logo.svg";
import LogoSkilvul from "../../assets/LogoSkilvul.png";
import FormProfile from "../../components/profile/FormProfile";
import KelasSaya from "../../components/profile/KelasSaya";

function Profile() {
  return (
    <div>
      <nav className="flex justify-between bg-[#E5F2FA] md:px-[154px] py-4 items-center border-b-2 w-full">
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

      <div className="md:px-[154px] px-4 mt-10 mb-4">
        <h1 className="font-bold text-2xl">Profil</h1>
      </div>

      <div className="md:mx-[154px] mx-4 md:grid md:grid-cols-3 md:space-x-6">
        <div className="mb-4 px-2 py-1 border border-gray-400 rounded-md max-h-16 flex flex-col items-start md:col-span-1">
          <button className="font-medium mb-1 hover:text-[#008D91]">
            Detail Profil
          </button>
          <button className="font-medium hover:text-[#008D91]">
            Kelas Saya
          </button>
        </div>

        <FormProfile />
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

export default Profile;
