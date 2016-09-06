var Component = require('./component')

/**
 * Track component class
 *
 * - updates track tile
 *
 */
module.exports = class Track extends Component {

	constructor(el, data) {
		super(el, data)

		this.$lastTrack = null
		this.$trackTemplate = this.$el.find('.track')
		this.$trackTemplate.detach()

		this.$el.on('update', (e, data) => {
			this.update(data)
		})
	}

	update(data) {
		let $track = this.$trackTemplate.clone()

		// Fill in data
		$track.find('.track-title').text(data.title).prop('href', data.link)
		$track.find('.track-artist').text(data.artist)
		$track.find('.track-album').text(data.album)
		$track.find('.track-cover').css('background-image', 'url("'+data.coverUrl+'")')
		$track.find('.track-background').css('background-image', 'url("'+data.coverUrl+'")')

		this.$el.append($track)

		// Hides previous track tile
		if (this.$lastTrack) {
			this.$lastTrack.removeClass('is-active')

			if (document.hidden) {
				this.$lastTrack.remove()
			} else {
				this.$lastTrack.on('transitionend', (e) => {
					$(e.target).remove()
				})
			}
		}
		this.$lastTrack = $track
	}

}
