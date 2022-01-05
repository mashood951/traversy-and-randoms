const nodes = document.querySelector('.bar')
const enabledLine = document.getElementById('enabled-line')
const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')

let widthEnabledLine = 0
let currentNode = 1

prevBtn.addEventListener('click', () => {
  if (widthEnabledLine > 0) {
    widthEnabledLine -= 33
    enabledLine.style.width = `${widthEnabledLine}%`
    currentNode--
    checkCurrentNode()
    nodes.children[currentNode + 2].style.borderColor = 'var(--disabled)'
  }
})

nextBtn.addEventListener('click', () => {
  if (widthEnabledLine < 99) {
    widthEnabledLine += 33
    enabledLine.style.width = `${widthEnabledLine}%`
    currentNode++
    checkCurrentNode()
    nodes.children[currentNode + 1].style.borderColor = 'var(--enabled)'
  }
})

const checkCurrentNode = () => {
  if (currentNode === 1) {
    prevBtn.disabled = true
  } else if (currentNode === 4) {
    nextBtn.disabled = true
  } else {
    prevBtn.disabled = false
    nextBtn.disabled = false
  }
}