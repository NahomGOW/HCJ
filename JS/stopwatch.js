let stopButton = document.querySelector('.stop')
let startButton = document.querySelector('.start')
let resetButton = document.querySelector('.reset')

let hourE = document.querySelector('.hour')
let minE = document.querySelector('.min')
let secE = document.querySelector('.sec')

let interval;
let hour = 0;
let min = 0;
let sec = 0;


function stopWatch(){
  sec++
  if(sec == 60){
    sec = 0
    min++
    if(min==60){
      min = 0
      hour++
    }
  }
  hourE.textContent = hour < 10 ? `0${hour}` : hour;
  minE.textContent = min < 10 ? `0${min}` : min;
  secE.textContent = sec < 10 ? `0${sec}` : sec;
}

startButton.addEventListener('click', () => {
  clearInterval(interval)
  interval = setInterval(stopWatch, 1000)
})
stopButton.addEventListener('click', () => {
  clearInterval(interval)
})
resetButton.addEventListener('click', () => {
  clearInterval(interval)
  hour = 0;
  min = 0;
  sec = 0;
  hourE.textContent = '00'
  minE.textContent = '00'
  secE.textContent = '00'
})