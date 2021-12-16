const input = document.getElementById('input');
const blockTime = document.querySelector('.time');

let interval;

blockTime.innerHTML = 0;
input.value = "";

let start = document.getElementById('start').addEventListener('click', () => {
  if(input.value < 0) {
    input.value = "";
    blockTime.value = 0;
  }

  blockTime.innerHTML = input.value;

  clearInterval(interval);
  interval = setInterval(subtractTime, 1000);
});

let stop = document.getElementById('stop').addEventListener('click', () => {
  clearInterval(interval);
});

let restart = document.getElementById('restart').addEventListener('click', () => {
  input.value = "";
  blockTime.innerHTML = 0;
})

function subtractTime() {
  if (blockTime.innerHTML > 0) {
    blockTime.innerHTML -- ;
    input.value -- ;
  }
}