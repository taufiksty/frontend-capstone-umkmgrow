import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { retrieveCourse } from "../../redux/actions/course";
import { useNavigate } from "react-router";

function KelasSaya() {
  const [myCourses, setMyCourses] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const authData = useSelector((state) => state.auth.data);
  const loading = useSelector((state) => state.course.loading);
  const error = useSelector((state) => state.course.error);

  const enrollments = authData.user?.enrollments;

  useEffect(() => {
    if (enrollments.length > 0) {
      const promises = enrollments.map((e) =>
        dispatch(retrieveCourse(e.courseId)).then((res) => res.data.course)
      );

      Promise.all(promises).then((course) => setMyCourses(course));
    }
  }, [dispatch, enrollments]);

  function translateStatus(status) {
    switch (status) {
      case "onpayment":
        return "Pembayaran";
      case "onlearning":
        return "Pembelajaran";
      case "completed":
        return "Selesai";
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[30vh]">
        <i className="fa fa-circle-o-notch fa-spin"></i>
      </div>
    );
  }

  if (error) {
    navigate(`/servererror`);
  }

  return (
    <div className="mt-10 md:mt-0">
      <div className="md:px-[154px] my-4 md:hidden">
        <h1 className="font-bold text-2xl">Kelas saya</h1>
      </div>
      <div className="p-4 border border-gray-400 rounded-md md:col-span-2">
        {myCourses.map((c, i) => (
          <div
            key={c.id}
            onClick={() => navigate(`/courses/${c.id}`)}
            className="border border-gray-400 rounded-md mb-4"
          >
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 hover:bg-slate-100 cursor-pointer">
              <img
                className="w-full md:w-52 rounded-md"
                src={c.imageCourse}
                alt="imgKelas"
              />
              <div className="p-3 md:py-2 space-y-3 w-full">
                <h4 className="font-semibold">{c.courseName}</h4>
                <p className="text-sm">{c.courseDescription}</p>
                <p className="text-sm">
                  Status : {translateStatus(enrollments[i].status)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default KelasSaya;
