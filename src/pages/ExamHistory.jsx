import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Button from '../components/common/Button';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { retrieveCourseExamHistory } from '../redux/actions/course';
import useToken from '../hooks/useToken';

function ExamHistory() {
	const { id } = useParams();
	const { search } = useLocation();
	const queryParams = new URLSearchParams(search);

	const courseName = queryParams.get('courseName');
	const questionId = queryParams.get('questionId');

	const accessToken = useToken();

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const enrollmentsUser = useSelector(
		(state) => state.auth.data.user?.enrollments,
	);
	const enrollment = enrollmentsUser?.find((enroll) => enroll.courseId === id);

	const [questions, setQuestions] = useState([]);

	useEffect(() => {
		if (enrollment) {
			dispatch(retrieveCourseExamHistory(accessToken, id)).then((res) =>
				setQuestions(res.data.course.exams.questions),
			);
		} else {
			navigate(`/courses/${id}?access=false`);
		}
	}, [accessToken, dispatch, enrollment, id, navigate]);

	const question = questions.find((q) => q.id === questionId);
	const loading = useSelector((state) => state.course.loading);
	const error = useSelector((state) => state.course.error);

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
		const prevQuestionId = questions[question.questionSequence - 2].id;

		navigate(
			`/courses/${id}/exams/history?courseName=${courseName}&&questionId=${prevQuestionId}`,
		);
	}

	function handleNextQuestion(e) {
		e.preventDefault();
		const nextQuestionId = questions[question.questionSequence].id;

		navigate(
			`/courses/${id}/exams/history?courseName=${courseName}&&questionId=${nextQuestionId}`,
		);
	}

	const styleFalseAnswer = (a) =>
		question.yourAnswer === a ? 'bg-[#f4745e]' : 'bg-white';

	return (
		<>
			<Navbar variant="secondary" />

			<main className="mx-[6px] pt-40 md:pt-52 px-2 md:mx-[145px]">
				<div>
					<h1 className="font-bold text-2xl text-[#2E3646] md:font-bold md:text-4xl">
						Ujian Kelas <span id="exam-name">{courseName}</span>
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
										<div
											key={a}
											className={`flex space-x-2 text-[12px] md:text-2xl border border-[#D9D9D9] ${
												question.correctAnswer === a
													? 'bg-[#5EEA6C]'
													: styleFalseAnswer(a)
											} py-2 px-3 md:px-6 rounded-xl`}>
											<div>{a.toUpperCase()}.</div> <p>{question.answers[a]}</p>
										</div>
									))}
								</div>
							</div>
						</div>

						<div className="my-[34px] md:my-[46px] flex justify-between">
							{question.questionSequence === 1 ? (
								<Button
									variant="secondary"
									onClick={() => navigate(`/profile?section=exam-history`)}>
									Kembali ke riwayat ujian
								</Button>
							) : (
								<Button
									variant="secondary"
									onClick={handlePrevQuestion}>
									Soal Sebelumnya
								</Button>
							)}
							{question.questionSequence === 10 ? (
								<Button
									onClick={() => navigate(`/profile?section=exam-history`)}>
									Kembali ke riwayat ujian
								</Button>
							) : (
								<Button onClick={handleNextQuestion}>Soal Selanjutnya</Button>
							)}
						</div>
					</div>

					<div
						id="list-question"
						className="my-[34px] rounded-[10px] border border-zinc-700 md:h-fit md:basis-1/4 grid grid-cols-5 gap-8 p-5 md:p-8">
						{questions.map((q) => (
							<div
								key={q.questionSequence}
								onClick={() =>
									navigate(
										`/courses/${id}/exams/history?courseName=${courseName}&&questionId=${
											questions[q.questionSequence - 1].id
										}`,
									)
								}
								className={`${
									q.correctAnswer === q.yourAnswer
										? 'bg-[#5EEA6C]'
										: 'bg-[#f4745e]'
								} border border-black border-opacity-30 cursor-pointer w-fit py-2 px-5 rounded-xl`}>
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

export default ExamHistory;
