// let is_ok = true;

export const customFetch = async (time, task) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			let is_ok = true;

			is_ok ? resolve(task) : reject('No taciendo el fetch viteh 😭');
		}, time);
	});
};
