module.exports = function (data, size) {
	let value = ''
	for (let i = data.length - 1; i >= 0; i--) {
		if (!value || data[i].size === size) {
			value = data[i]['#text']
		}
	}
	return value
}
