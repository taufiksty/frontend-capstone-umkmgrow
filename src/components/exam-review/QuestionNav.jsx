import PropTypes from 'prop-types';

function QuestionNav({ children, onClick, isAnswerCorrect }) {
	return (
		<div
			onClick={onClick}
			className={`${
				isAnswerCorrect ? 'bg-[#5EEA6C]' : 'bg-[#f4745e]'
			} border border-black border-opacity-30 cursor-pointer w-fit py-2 px-5 rounded-xl`}>
			{children}
		</div>
	);
}

export default QuestionNav;

QuestionNav.propTypes = {
	children: PropTypes.number,
	onClick: PropTypes.func,
	isAnswerCorrect: PropTypes.bool,
};
