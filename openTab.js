let btnPlan = document.querySelector('.plan_one')
let blockOne = document.querySelector('.block_one')
let blockThree = document.querySelector('.block_three')
let blockFour = document.querySelector('.block_four')
let sketchOne= document.querySelector('.sketch1')
let plan = document.querySelector('.plan')
let num = document.querySelector('.num')
let txtOne = document.querySelector('.txt_one')
let txtTwo =  document.querySelector('.txt_two')
let txtThree = document.querySelector('.txt_three')
let lineone = document.querySelector('.line')
let blockTwo = document.querySelector('.block_two')
let txt = document.querySelector('.text')

btnPlan.onclick = function(){
  blockOne.classList.toggle('open')
  blockThree.classList.toggle('close')
  blockTwo.classList.toggle('close')
  blockFour.classList.toggle('close')
  sketchOne.classList.toggle('visible')
  plan.classList.toggle('white')
  num.classList.toggle('white')
  txtOne.classList.toggle('Onetxt')
  lineone.classList.toggle('lineOne')
}

let btnPlanTwo = document.querySelector('.plan_two')
let sketchTwo= document.querySelector('.sketch2')
let planTwo = document.querySelector('.plan_two')
let numTwo = document.querySelector('.num_two')
btnPlanTwo.onclick = function(){
  sketchTwo.classList.toggle('visible')
  blockOne.classList.toggle('close')
  blockTwo.classList.toggle('openTwo')
  blockThree.classList.toggle('close')
  blockFour.classList.toggle('close')
  planTwo.classList.toggle('white')
  numTwo.classList.toggle('white')
  txtTwo.classList.toggle('Twotxt')

}


let btnPlanThree = document.querySelector('.plan_three')
let sketchThree= document.querySelector('.sketch3')
let planThree = document.querySelector('.plan_three')
let numThree = document.querySelector('.num_three')
btnPlanThree.onclick = function(){
blockThree.classList.toggle('openThree')
sketchThree.classList.toggle('visible')
blockTwo.classList.toggle('close')
blockFour.classList.toggle('close')
blockOne.classList.toggle('close')
planThree.classList.toggle('white')
numThree.classList.toggle('white')
txtThree.classList.toggle('Threetxt')
}

let btnPlanFour = document.querySelector('.plan_four')
let txtFour = document.querySelector('.txt_four')
let sketchFour= document.querySelector('.sketch4')
let numFour = document.querySelector('.num_four')
let planFour = document.querySelector('.plan_four')
btnPlanFour.onclick = function(){
  blockFour.classList.toggle('openFour')
  blockTwo.classList.toggle('close')
  blockThree.classList.toggle('close')
  blockOne.classList.toggle('close')
sketchFour.classList.toggle('visible')
planFour.classList.toggle('white')
numFour.classList.toggle('white')
txtFour.classList.toggle('Fourtxt')
}
