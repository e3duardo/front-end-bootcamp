const API_URL = "http://www.omdbapi.com/?apikey=6e073581";

export const search = query => {
	let result = {};

	try {
		result = await fetch(`${API_URL}&s=${query}`);
		result = await result.json();
	} catch (e) {
		console.error(e);
	}

	return result;
};

export const getItem = async id => {
	let result = {};

	try {
		result = await fetch(`${API_URL}&i=${id}`);
		result = await result.json();
	} catch (e) {
		console.error(e);
	}

	return result;
};