import { useEffect } from 'react';
import Button from '../common/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { refreshUserExamHistory } from '../../redux/actions/auth';
import useToken from '../../hooks/useToken';
import { timedateToLocale } from '../../utils/time';
import { retrieveCourseExams } from '../../redux/actions/course';

function ExamHistory() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const authData = useSelector((state) => state.auth.data);
	const loading = useSelector((state) => state.course.loading);
	const error = useSelector((state) => state.course.error);

	const examHistories = authData.user?.examHistories;

	const accessToken = useToken();

	useEffect(() => {
		dispatch(refreshUserExamHistory(accessToken));
	}, [accessToken, dispatch]);

	let highestScore = {};
	examHistories?.forEach((eh) => {
		if (
			(eh.courseId in highestScore && eh.score > highestScore[eh.courseId]) ||
			!(eh.courseId in highestScore)
		) {
			highestScore[eh.courseId] = eh.score;
		}
	});

	if (!examHistories || loading) {
		return (
			<div className="flex justify-center items-center h-[30vh]">
				<i className="fa fa-circle-o-notch fa-spin"></i>
			</div>
		);
	}

	if (error) {
		navigate(`/servererror`);
	}

	function handleReviewExam(e, accessToken, id, courseName) {
		e.preventDefault();

		dispatch(retrieveCourseExams(accessToken, id)).then((res) =>
			navigate(
				`/courses/${id}/exams/history?courseName=${courseName}&&questionId=${res.data.course.exams.questions[0].id}`,
			),
		);
	}

	function handleExamAgain(e, accessToken, id) {
		e.preventDefault();

		dispatch(retrieveCourseExams(accessToken, id)).then((res) =>
			navigate(
				`/courses/${id}/exams?questionId=${res.data.course.exams.questions[0].id}`,
			),
		);
	}

	return (
		<div className="mt-10 md:mt-0">
			<div className="md:px-[154px] my-4 md:hidden">
				<h1 className="font-bold text-2xl">Riwayat Ujian</h1>
			</div>
			<div className="p-4 border border-gray-400 rounded-md space-y-3">
				{examHistories.map((eh) => (
					<div
						key={eh.id}
						className="border border-gray-400 rounded-md p-4">
						<div className="md:flex space-y-3 md:justify-between md:items-center md:space-y-0">
							<div>
								<h4 className="font-semibold">{eh.courseName}</h4>
								<p>Nilai : {eh.score}</p>
								<p>{timedateToLocale(eh.createdAt)}</p>
							</div>
							<div className="flex space-x-3 md:space-x-6 md:h-fit">
								{highestScore[eh.courseId] === eh.score && (
									<Button
										variant="secondary"
										onClick={(e) =>
											handleReviewExam(
												e,
												accessToken,
												eh.courseId,
												eh.courseName,
											)
										}>
										Lihat hasil ujian
									</Button>
								)}
								{highestScore[eh.courseId] !== 100 && (
									<Button
										onClick={(e) =>
											handleExamAgain(e, accessToken, eh.courseId)
										}>
										Ujian lagi
									</Button>
								)}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default ExamHistory;
