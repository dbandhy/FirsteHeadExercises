function init() {
let planet = document.getElementById('greenplanet')
planet.innerHTML = 'Red Alert!'
planet.setAttribute('class', 'danger')
}

window.onload = init