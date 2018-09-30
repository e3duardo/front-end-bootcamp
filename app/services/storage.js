export const storageService = localStorage ? {
	initialize: () => {
		const items = [];

		return JSON.parse(localStorage.items) || items;
	},

	favoriteItem: id => {
		if (!isFavorited(id)) {
			const items = JSON.parse(localStorage.items);
			
			items.push(id);
			return localStorage.items = JSON.stringify(items);
		}

		return false;
	},

	unfavoriteItem: id => {
		if (isFavorited(id)) {
			const items = JSON.parse(localStorage.items);
			
			const result = items.filter(item => item !== id);

			return localStorage.items = JSON.stringify(result);
		}

		return false;
	},

	isFavorited: id => {
		const items = JSON.parse(localStorage.items);

		return !!items.find(item => item === id);
	}
} : null;

export default storageService;