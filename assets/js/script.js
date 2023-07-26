/* Theme Toggler */
const themeToggleBtn = document.getElementById('theme-toggle')
const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon')
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon')

if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)){
  // Show Light Icons
  themeToggleLightIcon.classList.remove('hidden')
  setHamburgerColor('white')
} else {
  //Show Dark Icons
  themeToggleDarkIcon.classList.remove('hidden')
  setHamburgerColor('black')
}

// Listen for toggle button click
themeToggleBtn.addEventListener('click', toggleMode)

window.scrollTo(0, 0)

function toggleMode() {
  // Toggle icon
  themeToggleDarkIcon.classList.toggle('hidden')
  themeToggleLightIcon.classList.toggle('hidden')

  // If is set in localstorage
  if (localStorage.getItem('color-theme')) {
    // If light then toggle to dark and save in localstorage
    if (localStorage.getItem('color-theme') === 'light') {
      document.documentElement.classList.add('dark')
      localStorage.setItem('color-theme', 'dark')
      setHamburgerColor('white')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('color-theme', 'light')
      setHamburgerColor('black')
    }
  } else {
    // If not in localstorage then add it
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('color-theme', 'light')
      setHamburgerColor('black')
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('color-theme', 'dark')
      setHamburgerColor('white')
    }
  }
  //Close mobile menu if it's open 
  if (menu.classList.contains('flex')) {
    menuButton.classList.toggle('open')
    menu.classList.toggle('flex')
    menu.classList.toggle('hidden')
  }
}

/* Hamburger Menu Toggler */
const menuButton = document.getElementById('menu-btn')
const menu = document.getElementById('menu')

menuButton.addEventListener('click', navToggle)

function navToggle() {
  menuButton.classList.toggle('open')
  menu.classList.toggle('flex')
  menu.classList.toggle('hidden')
}

function openPage(url) {
  var encodedUrl = encodeURI("views/sections/" + url + ".html");
  
  $('#mainContent').fadeOut(function () {
    $('#mainContent').load(encodedUrl).fadeIn("slow");
  });

  //Close menu when opening page 
  if (menu.classList.contains('flex')) {
    menuButton.classList.toggle('open')
    menu.classList.toggle('flex')
    menu.classList.toggle('hidden')
  }

  //$("body").scrollTop(0);
  window.scrollTo({ top: 0, behavior: 'smooth' });


}

function setHamburgerColor(colour) {
  document.querySelector('.hamburger-top').style.background = colour
  document.querySelector('.hamburger-middle').style.background = colour
  document.querySelector('.hamburger-bottom').style.background = colour
}