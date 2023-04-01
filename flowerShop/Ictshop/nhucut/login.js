let containers = document.getElementById('containers')

toggle = () => {
	containers.classList.toggle('sign-in')
	containers.classList.toggle('sign-up')
}

setTimeout(() => {
	containers.classList.add('sign-in')
}, 200)