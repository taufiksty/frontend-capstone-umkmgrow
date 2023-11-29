const secondToHMString = (seconds) => {
	const hours = Math.floor(seconds / 3600);
	const minutes = Math.floor((seconds % 3600) / 60);

	return `${hours} jam ${minutes ? minutes + ' menit' : ''}`;
};

const timedateToLocale = (date) => {
	const inputDate = new Date(date);

	const options = {
		weekday: 'long',
		day: 'numeric',
		month: 'long',
		year: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
	};

	return inputDate.toLocaleString('id-ID', options);
};

export { secondToHMString, timedateToLocale };
