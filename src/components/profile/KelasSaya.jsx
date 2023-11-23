import React from "react";
import KelasMarketing from "../../assets/images/Profile/digitalMarketing.jpg";

function KelasSaya() {
  return (
    <div className="px-4 py-4 border border-gray-400 rounded-md md:col-span-2">
      <div className="border border-gray-400 rounded-md mb-4">
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
          </div>
        </a>
      </div>

      <div className="border border-gray-400 rounded-md">
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
          </div>
        </a>
      </div>
    </div>
  );
}

export default KelasSaya;
