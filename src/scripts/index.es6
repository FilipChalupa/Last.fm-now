var jQueryFallbackProvider = require('./utils/jQueryFallbackProvider')
var componentsHandler = require('./componentsHandler')


var onJQueryAvailable = ($) => {
	require('./plugins')
	componentsHandler({
		'checker': require('./components/checker'),
		'shapes': require('./components/shapes'),
		'states': require('./components/states'),
		'track': require('./components/track'),
	})
}

var onJQueryMissing = () => {
	console.log('jQuery dependency is missing. This page might not work correctly. Please try again later.')
}


jQueryFallbackProvider(
	'/node_modules/jquery/dist/jquery.min.js',
	onJQueryAvailable,
	onJQueryMissing
)
