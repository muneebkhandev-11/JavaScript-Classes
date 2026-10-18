// syntax
// setTimeout(function, milliseconds);
let heading = document.getElementById("heading");

setTimeout(function () {
  heading.innerText = "Start The Time!";
}, 1500);

let clock = document.getElementById("clock");

setInterval(function () {
  let now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  clock.innerText = `0${hours}:0${minutes}:${seconds}`;
}, 1000);
