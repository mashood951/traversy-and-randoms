const article = document.querySelector('.article')
const hamburgerContainer = document.querySelector('.hamburger-container')
const hamburger = document.querySelector('.hamburger-container .hamburger')
const closeBtn = document.querySelector('.hamburger-container .close')
const nav = document.querySelector('nav')

hamburger.addEventListener('click', () => {
  hamburgerContainer.style.rotate = '-90deg'
  hamburgerContainer.style.position = 'absolute'
  article.style.rotate = '-20deg'
  for (let i = 0; i < 3; i++) {
    nav.children[0].children[i].style.transform = 'translateX(0%)'
  }
})

closeBtn.addEventListener('click', () => {
  hamburgerContainer.style.rotate = '0deg'
  hamburgerContainer.style.position = 'fixed'
  article.style.rotate = '0deg'
  nav.children[0].children[0].style.transform = 'translateX(-100%)'
  nav.children[0].children[1].style.transform = 'translateX(-150%)'
  nav.children[0].children[2].style.transform = 'translateX(-200%)'
})