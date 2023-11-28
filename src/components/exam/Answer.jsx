import PropTypes from 'prop-types';

function Answer({ children, onClick, currentAnswer, isAnswerSelected }) {
	return (
		<div
			onClick={onClick}
			className={`flex space-x-2 text-[12px] md:text-2xl border border-[#D9D9D9] ${
				isAnswerSelected && 'bg-[#D9D9D9]'
			} py-2 px-3 md:px-6 rounded-xl cursor-pointer hover:opacity-75 hover:bg-slate-100`}>
			<div>{currentAnswer.toUpperCase()}.</div> <p>{children}</p>
		</div>
	);
}

export default Answer;

Answer.propTypes = {
	children: PropTypes.string,
	onClick: PropTypes.func,
	currentAnswer: PropTypes.string,
	isAnswerSelected: PropTypes.bool,
};
