module.exports = function (imageUrl, callback) {
	var img = new Image()
	img.src = imageUrl
	if (img.complete) {
		callback()
	} else {
		img.onload = () => {
			callback()
		}
	}
}
