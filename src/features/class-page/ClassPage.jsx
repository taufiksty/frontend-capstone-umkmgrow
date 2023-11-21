import React from "react";
import Logo from "../../assets/Logo.svg"; 
import LogoSkilvul from "../../assets/LogoSkilvul.png";

function ClassPage() {
  return (
    <div className="body-font font-poppins">
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

      <main className="mx-[6px] my-[100px] md:my-[125px] px-2 md:mx-[145px]">
        <div className="md:my-[36px]">
          <h1 className="font-bold text-2xl text-[#2E3646] md:font-bold md:text-[32px]">
            Bagian <span id="module-seq"></span> : <span id="module-name"></span>
          </h1>
          <p id="sub-materi" className="text-xs text-slate-700 mt-[8px] md:mt-[32px] md:text-[20px]">
          </p>
        </div>

        <div className="md:flex md:space-x-[36px]">
          <div className="md:basis-3/4">

            <div id="materi" className="mt-[34px]"></div>

            <div className="my-[34px] md:my-[46px] flex justify-between">
              <button id="prev-content" className="btn btn-secondary">
                Materi Sebelumnya
              </button>
              <button id="next-content" className="btn btn-primary">
                Materi Selanjutnya
              </button>
            </div>
          </div>
            
          <div id="list-materi" className="my-[34px] rounded-[10px] border border-slate-300 md:h-fit md:basis-1/4"></div>
        </div>
      </main>

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

export default ClassPage;
