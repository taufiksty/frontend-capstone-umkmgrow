import PropTypes from 'prop-types';

function AnswerReview({ currentAnswer, yourAnswer, correctAnswer, children }) {
	const styleAnswer =
		yourAnswer === correctAnswer ? 'bg-[#5EEA6C]' : 'bg-[#f4745e]';

	return (
		<div
			className={`flex space-x-2 text-[12px] md:text-2xl border border-[#D9D9D9] ${
				yourAnswer === currentAnswer ? styleAnswer : 'bg-white'
			} py-2 px-3 md:px-6 rounded-xl`}>
			<div>{currentAnswer.toUpperCase()}.</div> <p>{children}</p>
		</div>
	);
}

export default AnswerReview;

AnswerReview.propTypes = {
	currentAnswer: PropTypes.string,
	yourAnswer: PropTypes.string,
	correctAnswer: PropTypes.string,
	children: PropTypes.string,
};
