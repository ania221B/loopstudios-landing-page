
const navigation = document.querySelector('.primary-nav')

const button = document.querySelector('.navigation-menu-btn')

button.addEventListener('click', e => {
  document.body.classList.toggle('menu-is-open')
})
