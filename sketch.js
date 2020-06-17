
/*ANIME JS*/
let circle = anime({
targets: '.square',
autoplay: false,
scale: [
  {value: .1, easing: 'easeOutSine', duration: 800},
  {value: 1, easing: 'easeInOutQuad', duration: 500}
],
delay: anime.stagger(200, {grid: [6, 8], from: 'center'})
})

let btnCircle = document.querySelector('.circles').onclick = circle.restart

let circleThree = anime.timeline({
  targets: '.rectangle',
  width: [0, 440],
  easing: 'easeOutSine',
  direction: 'alternate',
  loop: true,
  autoplay: false,
})

circleThree.add({
  opacity: 1,
  backgroundColor: '#BFD7EA',
  delay: 0.1
})

/**/
let btnRow = document.querySelector('.row_btn')
let linePath = document.querySelector('.path_line')
let roundShelfFisrt = document.querySelector('.book_shelf_two_one')
let roundShelfSect = document.querySelector('.book_shelf_two_two')
let roundShelfThird = document.querySelector('.book_shelf_two_three')

let degreeshelfOne = document.querySelector(".book_shelf_three_one")
let degreeshelfTwo = document.querySelector(".book_shelf_three_two")
let degreeshelfThree = document.querySelector(".book_shelf_three_three")

/*btnRow.onclick = function(){
linePath.classList.toggle('pathLine')
btnRow.classList.toggle('stoprow')
roundShelfFisrt.classList.toggle('roundShelfFisrt')
roundShelfSect.classList.toggle('roundShelfSec')
roundShelfThird.classList.toggle('roundShelfThird')
degreeshelfOne.classList.toggle('degreeshelfOne')
degreeshelfTwo.classList.toggle('degreeshelfTwo')
degreeshelfThree.classList.toggle('degreeshelfThree')
}*/

let btnCircleWheel = document.querySelector('.circtwo')
let imgCircleWheel = document.querySelector('.wheel_img')
btnCircleWheel.onclick = function(){
imgCircleWheel.classList.toggle('wheelImg')
}

let scaleCircleLittle = document.querySelector('.littlecircle')
let scaleCircleBig = document.querySelector('.medcircle')
let btnCircleScale = document.querySelector('.circthree')

btnCircleScale.onclick = function(){
  scaleCircleLittle.classList.toggle('scaleCircleLittle')
  scaleCircleBig.classList.toggle('scaleCircleBig')
  btnCircleScale.style.backgroundColor = '#1D3044'
}
