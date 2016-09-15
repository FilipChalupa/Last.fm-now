let Component = require('./component')
const queryString = require('query-string')
const preloadImage = require('../utils/preloadImage')
const showNotification = require('../utils/showNotification')
const getImageUrl = require('../utils/getImageUrl')
let lfm = new (require('../utils/lfm'))()

/**
 * Checker component class
 *
 * - communicates with Last.fm api, gets the latest played track
 *
 */

const UPDATE_INTERVAL = 2000
const GENERIC_COVER = '/images/generic-cover.jpg'

module.exports = class Checker extends Component {

	constructor(el, data) {
		super(el, data)

		this.$trackWrap = data.trackWrap && $(data.trackWrap)
		this.$userWrap = data.userWrap && $(data.userWrap)
		this.lastTracktimestamp = 0
		this.lastNowPlayingKey = ''
		this.$statesWrap = data.statesWrap && $(data.statesWrap)
		this.$window = $(window)

		this.userInfo = {}

		this.activeError = false

		this.notificationsEnabled = this.getNotificationsSetting()

		this.run()
	}

	run() {
		let username = this.getUsername()
		if (username) {
			lfm.setUsername(username)
			this.checkRecentTrack()
			if (this.$userWrap) {
				this.getUserInfo(() => {
					this.showUserInfo()
				})
			}
		}

		if (this.notificationsEnabled && Notification.permission !== 'granted') {
			this.notificationsEnabled = false
			Notification.requestPermission().then((result) => {
				if (result === 'granted') {
					this.notificationsEnabled = true
				}
			})
		}

		this.$window.on('focus', () => {
			this.showUserInfo()
		})
	}

	showUserInfo() {
		if (this.userInfo) {
			this.$userWrap.trigger('update', this.userInfo)
		}
	}

	setUserInfo(username, name, link, avatarUrl) {
		return this.userInfo = {
			username: username,
			name: name || username,
			link: link,
			avatarUrl: avatarUrl
		}
	}

	getUserInfo(callback) {
		$.getJSON(lfm.getUserInfoUrl())
			.done((data) => {
				this.setUserInfo(
					data.user.name,
					data.user.realname,
					data.user.url,
					getImageUrl(data.user.image, 'large')
				)
				preloadImage(this.userInfo.avatarUrl, () => {
					callback()
				})
			})
			.fail(() => {
				// Try to recover after UPDATE_INTERVAL
				setTimeout(() => {
					this.getUserInfo()
				}, UPDATE_INTERVAL)
			})
	}

	getUsername() {
		return queryString.parse(location.search).u
	}

	getNotificationsSetting() {
		return !queryString.parse(location.search).disableNotifications
	}

	triggerUpdate(trackData) {
		if (!trackData.coverUrl) {
			trackData.coverUrl = GENERIC_COVER
		}

		preloadImage(trackData.coverUrl, () => {
			this.updateTile(trackData)
			this.pushNotification(trackData)
		})
	}

	updateTile(trackData) {
		if (!this.$trackWrap) {
			return
		}

		this.$trackWrap.trigger('update', trackData)
	}

	pushNotification(trackData) {
		if (!this.notificationsEnabled || !document.hidden) {
			return
		}

		showNotification(trackData.title, 'by '+trackData.artist, trackData.coverUrl)
	}

	checkRecentTrack() {
		$.getJSON(lfm.getRecentUrl())
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
					coverUrl: getImageUrl(track.image, 'extralarge'),
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
