const images = document.querySelectorAll('.images div')

images.forEach(image => {
	image.addEventListener('click', () => {
		removeActiveClasses()
		image.className = 'active'
	})
})

const removeActiveClasses = () => {
	images.forEach(image => {
		image.className = ''
	})
}