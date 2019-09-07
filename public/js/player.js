const socket = io.connect();

// ELEMENTS
const $infoArtist = document.querySelector('#artist');
const $infoTitle = document.querySelector('#title');
const $radio = document.querySelector('#radio');
const $volume = document.querySelector('#volume');

// FUNCTIONS
function infoUpdate(info) {
	const [artist, title] = info.split('//').map(i => i.trim());

	$infoArtist.textContent = artist;
	$infoTitle.textContent = title;
}

function initPlayer() {
	$radio.volume = .1;
	$volume.value = $radio.volume;
}

function updateVolume() {
	$radio.volume = this.value;
}

// EVENTS
window.addEventListener('load', initPlayer);
$volume.addEventListener('input', updateVolume);

// SOCKET.IO EVENTS
socket.on('metadataUpdate', (info) => infoUpdate(info));