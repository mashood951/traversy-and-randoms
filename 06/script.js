const contentElems = document.querySelectorAll('.container div')

const isInViewPort = (elem) => {
  const rect = elem.getBoundingClientRect()
  const docElem = document.documentElement
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || docElem.clientHeight) &&
    rect.right <= (window.innerWidth || docElem.clientWidth)
  )
}

const callbackFunction = () => {
  contentElems.forEach(contentElem => {
    if (isInViewPort(contentElem)) {
      contentElem.style.transform = 'translate(0)'
      contentElem.style.opacity = '1'
    }
  })
}

window.addEventListener('DOMContentLoaded', callbackFunction)
window.addEventListener('scroll', callbackFunction)
