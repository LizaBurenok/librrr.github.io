let mobileBtn = document.querySelector('.menu_burger')
let mobileMenu = document.querySelector('.navigation')
let lineMenu = document.querySelectorAll('.menu_line')

   mobileBtn.onclick = function(){
    mobileMenu.classList.toggle('open');
    mobileBtn.classList.toggle('visible');
    menu_line.classList.toggle('color');
  }
