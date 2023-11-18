import React from "react";
import Logo from "./img/Logo.svg";

function Login() {
  return (
    <div className="body-font font-poppins flex justify-center items-center mt-[50px]">
      <div className="max-w-sm text-center px-14 py-8 bg-white border border-black rounded-lg shadow ">
        <div className="flex justify-center mb-8">
          <img src={Logo} alt="logo" />
        </div>

        <div>
          <h1 className="font-bold text-2xl mb-6">Masuk</h1>
        </div>

        <div>
          <form>
            <input
              className="border border-black py-1 px-3 rounded-md mb-3"
              type="text"
              placeholder="Email"
            />{" "}
            <br />
            <input
              className="border border-black py-1 px-3 rounded-md mb-3"
              type="text"
              placeholder="Password"
            />{" "}
            <br />
          </form>
        </div>

        <div className="flex justify-end text-sm text-[#008D91] mb-4">
          <button>Lupa Password</button>
        </div>

        <div>
          <button className="w-full px-2 py-1 border-2 border-[#008D91] rounded-md bg-[#008D91] text-white shadow">
            Masuk
          </button>
        </div>

        <div className="flex justify-center mt-4 text-sm gap-1">
          <p>Belum memiliki akun?</p>
          <button className="text-[#008D91] font-semibold">Daftar</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
