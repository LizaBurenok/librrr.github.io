let btnMenu = document.querySelector('.button')
let hidMenu = document.querySelector('.menu_list')
let closeMenu = document.querySelector('.cross')

btnMenu.onclick = function(){
  hidMenu.classList.toggle('open');
  closeMenu.style.display = 'block'
}

closeMenu.onclick = function(){
  hidMenu.classList.toggle('close');
  closeMenu.style.display = 'none'
}
