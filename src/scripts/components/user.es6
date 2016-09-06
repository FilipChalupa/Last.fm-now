var Component = require('./component')

/**
 * User component class
 *
 * - shows user's info
 *
 */

const VISIBILITY_DURATION = 6000

module.exports = class User extends Component {

	constructor(el, data) {
		super(el, data)

		this.$avatar = this.$el.find('.user-avatar')
		this.$name = this.$el.find('.user-name')

		this.timer = null

		this.$el.on('update', (e, data) => {
			this.update(data)
		})
	}

	update(data) {

		// Fill in data
		this.$avatar.css('background-image', 'url("'+data.avatarUrl+'")')
		this.$name.text(data.name)

		if (this.$el.hasClass('is-active')) {
			clearTimeout(this.timer)
		}

		this.show()
		this.timer = setTimeout(() => {
			this.hide()
		}, VISIBILITY_DURATION)
	}

	show() {
		this.$el.addClass('is-active')
	}

	hide() {
		this.$el.removeClass('is-active')
	}

}
