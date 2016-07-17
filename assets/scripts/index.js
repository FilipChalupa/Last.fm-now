(function(){
	var updateRunning = false

	var selector = document.getElementById('selector')
	var selectorForm = document.getElementById('selector-form')
	var selectorInput = document.getElementById('selector-input')

	selectorForm.addEventListener('submit', function(e){
		e.preventDefault()
		window.location.hash = selectorInput.value
	})

	function toggleSelector(show) {
		selector.classList.toggle('view-hidden', !show)
	}


	function getUsername() {
		username = window.location.hash.substr(1)
		toggleSelector(!username)
		if (!updateRunning && username) {
			updateRunning = true
			update()
		}
		return username
	}


	var username = getUsername()
	window.addEventListener('hashchange', function(){
		loading.classList.remove('view-done')
		getUsername()
	});


	var loading = document.getElementById('loading')

	var track = document.getElementById('track')
	var trackPrevious
	var trackCurrent = track.querySelector('.track-item')
	var trackProps = {}
	var lastTrackId

	function setText(el, text) {
		var textNode = document.createTextNode(text)
		el.innerHTML = ''
		el.appendChild(textNode)
	}

	function getProps(el) {
		return {
			under: el.querySelector('.track-under'),
			cover: el.querySelector('.track-cover'),
			title: el.querySelector('.track-title'),
			artist: el.querySelector('.track-artist'),
			album: el.querySelector('.track-album')
		}
	}

	function show(title, artist, album, cover) {
		loading.classList.add('view-done')
		if (trackPrevious) {
			trackPrevious.remove()
		}
		trackPrevious = trackCurrent
		trackCurrent = trackPrevious.cloneNode(true)
		trackCurrent.classList.add('view-new')

		setTimeout(function(){
			trackCurrent.classList.remove('view-new')
			trackPrevious.classList.add('view-old')
		}, 10)

		track.appendChild(trackCurrent)

		var backgroundUrl = cover ? 'url('+cover+')' : ''
		trackCurrent.classList.toggle('view-nocover', !cover)
		trackProps = getProps(trackCurrent)
		trackProps.under.style.backgroundImage = backgroundUrl
		trackProps.cover.style.backgroundImage = backgroundUrl
		setText(trackProps.title, title)
		setText(trackProps.artist, artist)
		setText(trackProps.album, album)
	}

	function getRecentUrl(username) {
		return 'https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user='+username+'&limit=1&api_key=4bf2f3f683673b6f60730f65cf30cb28&format=json'
	}

	function getBySize(data, size, attr) {
		var value = ''
		for (var i = data.length - 1; i >= 0; i--) {
			if (!value || data[i].size === size) {
				value = data[i][attr]
			}
		}
		return value
	}

	function showNotification(title, artist, album, cover) {
		if (!Notification || !document.hidden) {
			return
		}
		if (Notification.permission !== 'granted') {
			Notification.requestPermission()
		} else {
			var n = new Notification(
				title,
				{
					body: 'by '+artist,
					icon: cover
				}
			)
			n.addEventListener('click', function(n){
				return function(){
					window.focus()
					n.close()
				}
			}(n))
			setTimeout(function(n){
				return function(){ n.close() }
			}(n), 7000)
		}
	}

	function update() {
		fetch(getRecentUrl(username)).then(function(response){
			return response.json()
		}).then(function(data){
			if (!data.recenttracks || data.recenttracks.track.length == 0) {
				throw new Error('No tracks')
			}
			var track = data.recenttracks.track[0]
			if (lastTrackId !== track.url) {
				lastTrackId = track.url
				var params = [
					track.name,
					track.artist['#text'],
					track.album['#text'],
					getBySize(track.image, 'extralarge', '#text')
				]
				show.apply(show, params)
				showNotification.apply(showNotification, params)
			}

			setTimeout(function(){
				update()
			}, 2000)
		}).catch(function(err){
			console.error(err)
			setTimeout(function(){
				update()
			}, 5000)
		})
	}

})()
