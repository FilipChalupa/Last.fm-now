var Component = require('./component')

/**
 * States component class
 *
 * - shows and hides loading screen and error screen
 *
 */
module.exports = class Track extends Component {

	constructor(el, data) {
		super(el, data)

		this.$note = {
			loading: this.$el.find('.states-loading .states-note'),
			error: this.$el.find('.states-error .states-note'),
		}

		this.countActive = {}

		this.$el.on('setState', (e, type, text) => {
			this.setState(type, text)
		})
	}

	setState(type, text) {
		if (!this.countActive[type]) {
			this.countActive[type] = 0
		}
		if (text) {
			this.countActive[type]++
			this.$el.addClass('view-' + type)
			this.$note[type].text(text)
		} else {
			this.countActive[type]--
			if (this.countActive[type] <= 0) {
				this.countActive[type] = 0
				this.$el.removeClass('view-' + type)
			}
		}
	}

}
