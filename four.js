let btn = document.querySelector('.btn');
let row = document.querySelector('.row_line')
let hiddenText = document.querySelector('.text_2')
let text = document.querySelector('.text_1')

let hiddenimg = document.querySelector('.hiddenimg')
let hiddenline = document.querySelector('.path')

btn.onclick = function(){
  row.classList.toggle('longLine');
  hiddenText.classList.toggle('visivle')
  text.classList.toggle('hidden')
  btn.style.backgroundColor = '#FFFAF4'
  row.style.backgroundColor = '#1D3044'
  hiddenimg.classList.toggle('open')
  hiddenline.classList.toggle('close')
}
