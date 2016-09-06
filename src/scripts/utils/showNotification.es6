const NOTIFICATION_DISMISS_TIMEOUT = 7000

module.exports = function (title, body, icon) {
	let notification = new Notification(
		title,
		{
			body: body,
			icon: icon
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
