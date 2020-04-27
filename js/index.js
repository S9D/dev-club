const displayClass = "display"
const activeClass = "active"
const pagesClass = "page"
const buttonsClass = "nav-item"
const menuClass = "nav-links"

const menu = document.querySelector(`#${menuClass}`)
let menuState = false

function toggleMenu(close = false) {
  menu.classList.toggle(displayClass, menuState = !(menuState || close))
}

function toggleObject(objectId, className, groupClass) {
  let object = document.getElementById(objectId)
  document.querySelectorAll(`.${groupClass}`).forEach(e => {
    let action = (e !== object) ? e.classList.remove : e.classList.add
    Reflect.apply(action, e.classList, [className])
  })
}

function changePage(pageId) {
  toggleObject(`button-${pageId}`, activeClass, buttonsClass)
  toggleObject(pageId, displayClass, pagesClass)
  toggleMenu(true)
}