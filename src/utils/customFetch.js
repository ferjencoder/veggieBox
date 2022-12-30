let is_ok = true;

export const customFetch = async (time, task) => {
	try {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				is_ok ? resolve(task) : reject('No taciendo el fetch viteh 😭');
			}, time);
			// setTimeout(() => {
			// 	is_ok ? resolve(task) : reject('No taciendo el fetch viteh 😭');
			// }, time);
		});
	} catch (error) {
		console.error(`Disculpas! algo salió mal. Por favor, intente de nuevo o contacte al admin.`);
		console.log(error);
	}
};
