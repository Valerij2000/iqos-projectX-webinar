let timer;
let x = 15;
countdown();

function countdown() {
  document.getElementById('timer').innerHTML = x + ' Минут';
  x--;
  if (x < 0) {
    clearTimeout(timer); // timer stop on zero
  } else {
    timer = setTimeout(countdown, 60000);
  }
}