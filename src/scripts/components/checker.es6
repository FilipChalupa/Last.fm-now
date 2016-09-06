var Component = require('./component')
const queryString = require('query-string')
const preloadImage = require('../utils/preloadImage')

/**
 * Checker component class
 *
 * - communicates with Last.fm api, gets the latest played track
 *
 */

const UPDATE_INTERVAL = 2000
const NOTIFICATION_DISMISS_TIMEOUT = 7000

module.exports = class Checker extends Component {

	constructor(el, data) {
		super(el, data)

		this.username = this.getUsername()
		this.$trackWrap = data.trackWrap && $(data.trackWrap)
		this.lastTracktimestamp = 0
		this.lastNowPlayingKey = ''
		this.$statesWrap = data.statesWrap && $(data.statesWrap)

		this.activeError = false

		this.notificationsEnabled = this.getNotificationsSetting()

		this.run()
	}

	run() {
		if (this.username) {
			this.checkRecentTrack()
		}

		if (this.notificationsEnabled && Notification.permission !== 'granted') {
			this.notificationsEnabled = false
			Notification.requestPermission().then((result) => {
				if (result === 'granted') {
					this.notificationsEnabled = true
				}
			})
		}
	}

	getUsername() {
		return queryString.parse(location.search).u
	}

	getNotificationsSetting() {
		return !queryString.parse(location.search).disableNotifications
	}

	getRecentUrl() {
		return 'https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user='+this.username+'&limit=2&api_key=4bf2f3f683673b6f60730f65cf30cb28&format=json'
	}

	getUserInfoUrl() {
		return 'https://ws.audioscrobbler.com/2.0/?method=user.getinfo&user='+this.username+'&api_key=4bf2f3f683673b6f60730f65cf30cb28&format=json'
	}

	triggerUpdate(trackData) {
		if (!trackData.coverUrl) {
			trackData.coverUrl = '/images/generic-cover.jpg'
		}

		preloadImage(trackData.coverUrl, () => {
			this.updateTile(trackData)
			this.showNotification(trackData)
		})
	}

	updateTile(trackData) {
		if (!this.$trackWrap) {
			return
		}

		this.$trackWrap.trigger('update', trackData)
	}

	showNotification(trackData) {
		if (!this.notificationsEnabled || !document.hidden) {
			return
		}

		let notification = new Notification(
			trackData.title,
			{
				body: 'by '+trackData.artist,
				icon: trackData.coverUrl
			}
		)

		notification.addEventListener('click', () => {
			window.focus()
			notification.close()
		})

		setTimeout(() => {
			notification.close()
		}, NOTIFICATION_DISMISS_TIMEOUT)
	}

	getImageUrl(data, size) {
		let value = ''
		for (let i = data.length - 1; i >= 0; i--) {
			if (!value || data[i].size === size) {
				value = data[i]['#text']
			}
		}
		return value
	}

	checkRecentTrack() {
		$.getJSON(this.getRecentUrl())
			.done((data) => {
				if (!(data.recenttracks && data.recenttracks.track && data.recenttracks.track.length)) {
					console.error('Bad format. Tracks not found.')
					if (!this.activeLoading) {
						this.$statesWrap.trigger('setState', ['error', 'Tracks not found'])
						this.activeError = true
					}
					return
				}

				let track = data.recenttracks.track[0]

				if (track.date) {
					if (track.date.uts > this.lastTracktimestamp) {
						this.lastTracktimestamp = track.date.uts
					} else {
						return
					}
				} else {
					if (track.url !== this.lastNowPlayingKey) {
						this.lastNowPlayingKey = track.url
						this.lastTracktimestamp = data.recenttracks.track[1].date.uts
					} else {
						return
					}
				}

				if (this.activeError) {
					this.activeError = false
					this.$statesWrap.trigger('setState', ['error', null])
				}

				this.triggerUpdate({
					title: track.name,
					artist: track.artist['#text'],
					album: track.album['#text'],
					coverUrl: this.getImageUrl(track.image, 'extralarge'),
					link: track.url,
				})
			})
			.always(() => {
				setTimeout(() => {
					this.checkRecentTrack()
				}, UPDATE_INTERVAL)
			})
	}

}
