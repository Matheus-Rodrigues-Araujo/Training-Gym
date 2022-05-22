const menuIcon = document.getElementById("menu-icon")
const navigation = document.getElementById("navigation")
const menuItems = document.getElementById("menu-items")
const headerEl = document.getElementById("header-el")
const bannerEl = document.getElementById("banner-el")
const memberLink = document.querySelector('.member-link')


menuIcon.addEventListener('click', function(){
 navigation.firstElementChild.classList.toggle('show-menu')
 menuItems.classList.toggle('close-menu')
})

