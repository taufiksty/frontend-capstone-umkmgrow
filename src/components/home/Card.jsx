import PropTypes from 'prop-types';

function Card({ img, content }) {
	return (
		<div className="text-center py-6 px-6 bg-white border-gray-200 rounded-lg shadow max-w-[250px]">
			<div className="flex flex-col items-center space-y-6">
				<img
					src={img}
					alt="card1"
				/>
				<p className="md:mt-5">{content}</p>
			</div>
		</div>
	);
}

export default Card;

Card.propTypes = {
	img: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
};
