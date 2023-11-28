import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import { useState } from "react";
import { useEffect } from "react";
import { retrieveCourseCertification } from "../redux/actions/course";
import useToken from "../hooks/useToken";
import { useNavigate, useParams } from "react-router-dom";
import ImgMaleProfile from "../assets/images/common/male.png";
import ImgFemaleProfile from "../assets/images/common/female.png";
import Button from "../components/common/Button";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

function Certification() {
  const { id } = useParams();
  const [certification, setCertification] = useState(null);
  const dispatch = useDispatch();
  const accessToken = useToken();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.data.user);
  const loading = useSelector((state) => state.course.loading);
  const error = useSelector((state) => state.course.error);

  useEffect(() => {
    dispatch(retrieveCourseCertification(accessToken, id)).then((res) => {
      console.log(res);
      setCertification(res.data.certification);
    });
  }, []);

  if (error) {
    navigate("/servererror");
  }

  console.log(certification);

  const imageIfUserNotHave =
    userData?.gender === "male" ? ImgMaleProfile : ImgFemaleProfile;

  return (
    <>
      <Navbar variant="secondary" />

      <section className="md:px-[154px] px-2 pt-36">
        <div className="mb-8">
          <h1 className="font-bold text-xl mb-2">
            Sertifikat Pemasaran Digital
          </h1>
          <p className="text-[16px]">
            Selamat! Anda telah menyelesaikan kelas Pemasaran Digital dengan
            baik.
            <br />
            Segera aplikasikan pengetahuan baru Anda, ya!
          </p>
        </div>

        <div className="md:flex md:justify-between mb-8">
          {!certification || loading ? (
            <div>Loading</div>
          ) : (
            <Document file={certification.pdfLink} onLoadError={console.error}>
              <Page pageNumber={1} width={370} />
            </Document>
          )}

          <div className="bg-[#E5F2FA] py-8 px-8 rounded-lg text-center">
            <div className="flex justify-center">
              <img
                className="border-2 border-[#008d91] rounded-[100%] w-20"
                src={
                  userData.imageProfile
                    ? userData.imageProfile
                    : imageIfUserNotHave
                }
                alt="avatar"
              />
            </div>

            <h4 className="font-semibold text-[24px] my-4">
              {userData.fullname}
            </h4>

            <p className="text-slate-500 text-[14px]">
              {userData.businessFields}
            </p>

            <h4 className="font-medium text-[20px] mb-28 mt-3">
              Pemasaran Digital
            </h4>

            <Button variant="primary">Cetak Sertifikat</Button>
          </div>
        </div>

        <div>
          <Button className="w-full font-medium py-2" variant="secondary">
            Lihat Detail Kelas
          </Button>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Certification;
