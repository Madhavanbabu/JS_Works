const clock = document.getElementById('clock');

function updateTime() {
  const current = new Date();
  clock.innerText = `${prefixZero(current.getHours())} : ${prefixZero(current.getMinutes())} : ${prefixZero(current.getSeconds())}`
}

function prefixZero(val) {
  return (val < 10) ? `0${val}` : val;
}

setInterval(updateTime, 1000);
updateTime();
 