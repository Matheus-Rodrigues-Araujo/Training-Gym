const headerEl = document.querySelector("header")
const main = document.querySelector("main")
const section = document.querySelector(".section")

const menuIcon = document.getElementById("menu-icon")
const navigation = document.getElementById("navigation")
const menuItems = document.getElementById("menu-items")

const pngImage = document.querySelector('.png-image')


// const headerEl = document.getElementById("header-el")
const bannerEl = document.getElementById("banner-el")
const memberLink = document.querySelector('.member-link')

const headerText = document.querySelector(".header-text")
// const courses = document.querySelector(".courses")


menuIcon.addEventListener('click', () => {
//  Adiciona ou remove a classe show-menu dependendo se está
// ou não na classList(Lista de classes)
  document.querySelector("header").classList.toggle('show-menu')
  menuItems.classList.toggle('close-menu')

 // Remove o conteúdo principal
 if (section.style.display === "block"){
   section.style.display = "none"
 }
 else if(section.style.display ==='none'){
   section.style.display = 'block'
 }
})

// Checking if the window has a scrollY >= 524
window.addEventListener('scroll', () => {
  if( scrollY >= 524){
    headerEl.style.position = 'fixed'
    headerEl.style.backgroundColor = 'purple'
  }
  else{
    headerEl.style.position = 'absolute'
    headerEl.style.backgroundColor = 'rgb(0, 0, 0)'
  }
})

// function findWindowPosition(){
//   if( scrollY >= 524){
//     headerEl.style.position = 'fixed'
//   }
//   else{
//     headerEl.style.position = 'absolute'
//   }
// }

function toggleMenuClicked(element){
  if(element.classList.contains('close-menu')){
    document.body.style.backgroundColor = "#1b1a1a"
    main.style.opacity = '0'
    headerEl.style.position = 'fixed'
  }
}

toggleMenuClicked(menuItems)
