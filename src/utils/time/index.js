const secondToHMString = (seconds) => {
	const hours = Math.floor(seconds / 3600);
	const minutes = Math.floor((seconds % 3600) / 60);

	return `${hours} jam ${minutes ? minutes + ' menit' : ''}`;
};

export { secondToHMString };
