import React from "react";
import Logo from "../../assets/Logo.svg";
import LogoSkilvul from "../../assets/LogoSkilvul.png";

function Checkout() {
  return (
    <div className="font-poppins">
      <nav className="bg-[#E5F2FA] px-6 py-4 flex justify-between items-center">
        <img src={Logo} alt="logo"/>
        
        <ul className="hidden md:flex gap-6">
          <li>Beranda</li>
          <li>Tentang</li>
          <li>Kelas</li>
          <li>Kontak</li>  
        </ul>
        
        <div className="flex gap-2">
          <button className="btn-outline">Login</button>
          <button className="btn-filled">Daftar</button>
        </div>
      </nav>

      <main className="mx-auto max-w-xl p-4 space-y-6">
        <h1 className="text-xl font-bold">Charles Reynolds</h1>
        
        <p className="text-gray-600">
          charlesreynolds@gmail.com
        </p>

        <div>
          <h3 className="font-medium text-lg">
            Fundamental Pemasaran Digital
          </h3>
          
          <p className="text-sm text-gray-500">
            <span className="bg-teal-500 text-white px-2 py-1 rounded-full text-xs">Grow Digital</span>
            <span className="bg-teal-500 text-white px-2 py-1 rounded-full text-xs">Grow Your Market</span>
          </p>
          
          <p className="text-lg font-medium text-red-500">
            Gratis
          </p>
        </div>

        <div className="border-t border-gray-300 flex justify-between py-4">
          <p className="font-medium">Total</p>
          <p className="text-xl font-medium">Gratis</p>
        </div>

        <p className="text-xs text-gray-500">
          Dengan membeli kelas ini maka sudah menyetujui Ketentuan & Peraturan dari UMKM Grow
        </p>

        <div className="flex justify-between">
          <button className="btn-outline">Kembali</button>
          <button className="btn-filled">Beli Kelas</button>
        </div>
      </main>

      <footer className="bg-[#E5F2FA] pt-8 pb-6">
      <div className="px-[154px] pt-8 pb-16 flex justify-between border-b-2">
          <div>
            <img src={Logo} alt="" />
            <p className="mt-2">Berkembang Bersama UMKM Grow</p>
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
        
        <div className="px-[154px] flex justify-between py-4">
          <div>
            <p>Copyright @2023 UMKM Grow. All rights reserved</p>  
          </div>
          
          <div className="flex gap-10">
            <p>Syarat dan Ketentuan</p>
            <p>Kebijakan Privasi</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Checkout;