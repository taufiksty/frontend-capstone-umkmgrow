import PropTypes from 'prop-types';

function Button({
	children,
	variant = 'primary',
	onClick,
	disabled = false,
	className,
}) {
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className={`px-4 py-1 border-2 border-[#008D91] rounded-md md:my-0 md:mx-0 hover:font-semibold ${
				variant === 'primary'
					? 'bg-[#008D91] text-white'
					: 'text-[#008D91] hover:bg-[#008D91] hover:text-white'
			} ${className}`}>
			{children}
		</button>
	);
}

export default Button;

Button.propTypes = {
	children: PropTypes.any,
	variant: PropTypes.string,
	onClick: PropTypes.func,
	disabled: PropTypes.bool,
	className: PropTypes.string,
};
