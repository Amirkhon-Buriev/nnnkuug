let button = document.getElementById('btn')
let wrapper_weather = document.getElementById('wrapper-weather')
let input = document.getElementById(input)
let harorat = document.getElementById(harorat)
let eror = document.getElementById(eror)
let img = document.getElementById(img)
img.style.display = none
harorat.style.display = none
eror.style.display = none

button.addEventListener('click', ()=>{
  wrapper_weather.style.height = '600px'


  if (input.value) {
    harorat.style.display = block
    img.style.display = block
    fetch(`https:api.openweathermap.org/data/2.5/weather?q=${'toshkent'}&appid=${'eaa5545307881ec088c9e8f0a377b6f5'}`)
    .then(response => response.json())
    .then(data => input.value = ``(data)) 
  } else {
    eror.style.display = block
  }if (input.value) {
    eror.style.display = none
  }else{
    harorat.style.display = none
    img.style.display = none
  }
})