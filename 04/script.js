const searchInput = document.querySelector('.search-container input')
const searchBtn = document.querySelector('.search-container i')

searchBtn.addEventListener('click', () => {
  searchInput.classList.toggle('active')
})