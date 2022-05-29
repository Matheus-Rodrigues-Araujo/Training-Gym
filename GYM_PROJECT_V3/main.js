const header = document.querySelector('header')
const main = document.querySelector('main')
const section = document.querySelector('.section')

const menuIcon = document.getElementById("menu-icon")
const navigation = document.getElementById("navigation")
const menuItems = document.getElementById("menu-items")



menuIcon.addEventListener('click', () => {
  //  Adiciona ou remove a classe show-menu dependendo se está
  // ou não na classList(Lista de classes)
  header.classList.toggle('show-menu')
  document.body.classList.toggle('stop-scroll')
  // section.classList.toggle('hide-section')
})

window.addEventListener('scroll', () => {
  // if(this.scrollY >=424){
  //   header.style.position = 'fixed'
  //   // header.classList.add('header-fixed')
  // }
  header.style.position = headerPosition()
})

function headerPosition(){
  if(this.scrollY >=424){
    header.style.opacity = 1
    header.style.zIndex = 1 
    return 'fixed'
  }
  // header.style.opacity = .9
  return 'absolute'
}