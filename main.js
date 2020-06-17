let mobileBtn = document.querySelector('.menu_burger')
let mobileMenu = document.querySelector('.navigation')
let lineMenu = document.querySelectorAll('.menu_line')

let openText = document.querySelector('.firstnote')
let firstStep = document.querySelector('.first_cycle')
let threedcube = document.querySelector('.wrapper_3d')

let openCycle1 = document.querySelector('.first_wrap')
openCycle1.onclick = function (){
    openText.classList.toggle('showtext')
    firstStep.classList.toggle('firststep')
    threedcube.style.display = 'none'
  }

  let openCycle2 = document.querySelector('.second_wrap')
   let cycleone = {
      hiddentabone: true
  }
  let hiddentabone = document.querySelector('.firstnote')
  let openText1 = document.querySelector('.secondnote')
  let firStep = document.querySelector('.first_cycle')
  let secStep = document.querySelector('.second_cycle')

    openCycle2.onclick = function(){
    openText1.classList.toggle('showtexttwo')
    firStep.classList.toggle('firStep')
    hiddentabone.style.display = 'none'
    cycleone.hiddentabone = false
    secStep.classList.toggle('secStep')
    secStep.style.backgroundColor = '#D0E7F2'
  }


  let cycletwo = {
     hiddentabtwo: false
 }
  let hiddentabtwo = document.querySelector('.secondnote')
  let openText2 = document.querySelector('.thirdnote')
  let onefirstStep = document.querySelector('.first_cycle_one')
  let twofirstStep = document.querySelector('.first_cycle_two')
  let onesecStep = document.querySelector('.second_cycle_one')
  let twosecStep = document.querySelector('.second_cycle_two')

  let openCycle4 = document.querySelector('.fourth_wrap')
  let cyclethree = {
     hiddentabthree: false
 }
  let hiddentabthree = document.querySelector('.thirdnote')
  let openText3 = document.querySelector('.fourthnote')
  let lineDraw = document.querySelector('.path')
  let blockLine = document.querySelector('.svg_pict')


  openCycle4.onclick = function(){
    openText3.classList.toggle('showtexfour')
    hiddentabtwo.style.display = 'none'
    cyclethree.hiddentabthree = true
    lineDraw.classList.toggle('drawingLine')
    blockLine.classList.toggle('lineBlock')
  }

  let openCycle5 = document.querySelector('.fifth_wrap')
  let cyclefour = {
     hiddentabfour: false
 }
  let hiddentabfour = document.querySelector('.fourthnote')
  let openText4 = document.querySelector('.fifthnote')
  let lineBook = document.querySelector('.books_path')
  let bookLine = document.querySelector('.book_svg')


  openCycle5.onclick = function(){
    hiddentabfour.style.display = 'none'
    cyclefour.hiddentabfour = true
    openText4.classList.toggle('showtexfive')
    lineBook.classList.toggle('drawingBook')
    bookLine.classList.toggle('bookLine')
  }
