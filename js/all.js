AOS.init()

const container = document.querySelector('.container')
const toggleBtn = document.querySelector('.toggle-menu')
toggleBtn.addEventListener('click', function () {
    container.classList.toggle('show-menu')
})

// const root = document.documentElement
// const toggle_theme = document.querySelector('.toggle-theme')
// toggle_theme.addEventListener('click', function () {
//     console.log(root)
//     root.style.setProperty('$title-color', '#74b9ff')
// })
