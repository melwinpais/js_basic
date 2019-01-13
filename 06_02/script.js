const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

function runClock() {
  var date = new Date();
  let hr = date.getHours() % 12;
  let min = date.getMinutes();
  let sec = date.getSeconds();
  console.log(" Time is " + hr + ":" + min + ":" + sec + ":")

  let hrPosition = (hr + (min === 0 ? 0 : min /60)) * (360/12);
  let minPosition = (min + (sec === 0 ? 0 : sec/60)) * (360/60);
  let secPosition = sec * (360/60);

  HOURHAND.style.transform = "rotate(" + hrPosition + "deg)"
  MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)"
  SECONDHAND.style.transform = "rotate(" + secPosition + "deg)"
}


var interval = setInterval(runClock, 1000);
