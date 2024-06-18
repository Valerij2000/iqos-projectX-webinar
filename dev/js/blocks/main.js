let timer;
let x = 15;
let totalTime = 60000;
countdown();

function countdown() {  
  if (x < 0) {
    clearTimeout(timer); // timer stop on zero
  } else if (x <= 4 && x > 1) {
    timer = setTimeout(countdown, totalTime);
    document.getElementById('timer').innerHTML = x + ' Минуты';
  } else if (x == 1) {
    timer = setTimeout(countdown, totalTime);
    document.getElementById('timer').innerHTML = x + ' Минута';
  } else {
    timer = setTimeout(countdown, totalTime);
    document.getElementById('timer').innerHTML = x + ' Минут';
  }
  x--;
}