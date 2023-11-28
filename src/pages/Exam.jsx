import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Button from '../components/common/Button';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { retrieveCourseExams, submitExam } from '../redux/actions/course';
import useToken from '../hooks/useToken';
import Swal from 'sweetalert2';
import { refreshUserEnrollments } from '../redux/actions/auth';
import Answer from '../components/exam/Answer';

function Exam() {
	const { id } = useParams();
	const { search } = useLocation();
	const queryParams = new URLSearchParams(search);

	const questionId = queryParams.get('questionId');

	const accessToken = useToken();
	const [answers, setAnswers] = useState({});

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const enrollmentsUser = useSelector(
		(state) => state.auth.data.user?.enrollments,
	);
	const enrollment = enrollmentsUser?.find((enroll) => enroll.courseId === id);

	useEffect(() => {
		if (enrollment) {
			dispatch(retrieveCourseExams(accessToken, id));
		} else {
			navigate(`/courses/${id}?access=false`);
		}
	}, [accessToken, dispatch, enrollment, id, navigate]);

	const courseData = useSelector((state) => state.course.data);
	const loading = useSelector((state) => state.course.loading);
	const error = useSelector((state) => state.course.error);
	const exams = courseData?.exams;

	const question = exams?.questions.find((q) => q.id === questionId);

	if (error) {
		navigate('/servererror');
	}

	if (!question || loading) {
		return (
			<div className="flex justify-center items-center h-[100vh]">
				<i className="fa fa-circle-o-notch fa-spin"></i>
			</div>
		);
	}

	function handlePrevQuestion(e) {
		e.preventDefault();
		const prevQuestionId = exams?.questions[question.questionSequence - 2].id;

		navigate(`/courses/${id}/exams?questionId=${prevQuestionId}`);
	}

	function handleNextQuestion(e) {
		e.preventDefault();
		const nextQuestionId = exams?.questions[question.questionSequence].id;

		navigate(`/courses/${id}/exams?questionId=${nextQuestionId}`);
	}

	function showIcncompleteAnswerAlert() {
		return Swal.fire({
			position: 'center',
			icon: 'info',
			title: 'Kamu belum mengisi semua soal!',
			showConfirmButton: false,
			timer: 1500,
		});
	}

	async function showConfirmationDialog() {
		const result = await Swal.fire({
			icon: 'warning',
			title: 'Kamu sudah yakin?',
			text: 'Setelah menyelesaikan, kamu bisa melihat nilai dan hasilnya. Perlu diingat, sertifikat diberikan apabila nilaimu 100. Tenang, kamu bisa memperbaikinya nanti.',
			showDenyButton: true,
			position: 'center',
			confirmButtonColor: '#008D91',
			confirmButtonText: 'Ya, kumpulkan',
			denyButtonText: `Nanti deh`,
		});

		return handleConfirmationResult(result);
	}

	function handleConfirmationResult(result) {
		if (result.isConfirmed) {
			const score = calculateScore();
			submitExamAndUpdateEnrollments(score);
		} else if (result.isDenied) {
			Swal.close();
		}
	}

	function calculateScore() {
		let score = 0;
		Object.keys(answers).forEach((a, i) => {
			if (exams?.questions[i].correctAnswer === answers[a]) {
				score += 10;
			}
		});

		return score;
	}

	function submitExamAndUpdateEnrollments(score) {
		return dispatch(submitExam(accessToken, id, { score, answers })).then(
			(res) => {
				if (score === 100) {
					dispatch(refreshUserEnrollments(accessToken));
				}
				if (res.success) {
					navigate('/profile?section=exam-history');
				}
			},
		);
	}

	function handleFinishExam(e) {
		e.preventDefault();

		const arrAnswers = Object.keys(answers);

		if (arrAnswers.length !== 10) {
			showIcncompleteAnswerAlert();
		} else {
			showConfirmationDialog();
		}
	}

	return (
		<>
			<Navbar variant="secodanry" />

			<main className="mx-[6px] pt-40 md:pt-52 px-2 md:mx-[145px]">
				<div>
					<h1 className="font-bold text-2xl text-[#2E3646] md:font-bold md:text-4xl">
						Ujian Kelas <span id="exam-name">{courseData.courseName}</span>
					</h1>
					<p className="text-xs text-slate-700 mt-[8px] md:mt-[32px] md:text-2xl leading-6">
						Pastikan mengisi seluruh soal dengan teliti, ya!
					</p>
				</div>

				<div className="md:flex md:space-x-[36px]">
					<div className="md:basis-3/4">
						<div className="mt-[34px] rounded-xl border border-black px-4 py-5 md:p-8 flex space-x-2 md:space-x-4">
							<div className="text-[12px] md:text-2xl">
								<span id="num-question">{question.questionSequence}</span>.
							</div>
							<div className="w-full">
								<p
									id="question"
									className="text-[12px] md:text-2xl">
									{question.question}?
								</p>
								<div
									id="answers"
									className="flex flex-col space-y-3 md:space-y-4 mt-3 md:mt-5">
									{Object.keys(question.answers).map((a) => (
										<Answer
											key={a}
											isAnswerSelected={
												answers[question.questionSequence] === a
											}
											currentAnswer={a}
											onClick={() =>
												setAnswers({
													...answers,
													[question.questionSequence]: a,
												})
											}>
											{question.answers[a]}
										</Answer>
									))}
								</div>
							</div>
						</div>

						<div className="my-[34px] md:my-[46px] flex justify-between">
							{question.questionSequence === 1 ? (
								<Button
									variant="secondary"
									onClick={() => navigate(`/courses/${id}`)}>
									Kembali ke detail kelas
								</Button>
							) : (
								<Button
									variant="secondary"
									onClick={handlePrevQuestion}>
									Soal Sebelumnya
								</Button>
							)}
							{question.questionSequence === 10 ? (
								<Button onClick={handleFinishExam}>Selesaikan ujian</Button>
							) : (
								<Button onClick={handleNextQuestion}>Soal Selanjutnya</Button>
							)}
						</div>
					</div>

					<div
						id="list-question"
						className="my-[34px] rounded-[10px] border border-zinc-700 md:h-fit md:basis-1/4 grid grid-cols-5 gap-8 p-5 md:p-8">
						{exams?.questions.map((q) => (
							<div
								key={q.questionSequence}
								onClick={() =>
									navigate(
										`/courses/${id}/exams?questionId=${
											exams?.questions[q.questionSequence - 1].id
										}`,
									)
								}
								className={`${
									q.questionSequence in answers && 'bg-[#5EEA6C]'
								} border border-black cursor-pointer border-opacity-30 w-fit py-2 px-5 rounded-xl`}>
								{q.questionSequence}
							</div>
						))}
					</div>
				</div>
			</main>

			<Footer />
		</>
	);
}

export default Exam;
