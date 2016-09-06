const BASE_URL = 'https://ws.audioscrobbler.com/2.0/'

module.exports = class Lfm {
	constructor() {
		this.username = ''
	}

	setUsername(username) {
		this.username = username
	}

	getRecentUrl() {
		return 'https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user='+this.username+'&limit=2&api_key=4bf2f3f683673b6f60730f65cf30cb28&format=json'
	}

	getUserInfoUrl() {
		return 'https://ws.audioscrobbler.com/2.0/?method=user.getinfo&user='+this.username+'&api_key=4bf2f3f683673b6f60730f65cf30cb28&format=json'
	}

}
