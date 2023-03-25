const days = document.getElementById("day");
const hours = document.getElementById("hour");
const mins = document.getElementById("minute");
const secs = document.getElementById("second");
const year = document.getElementById("newYear");

const endDate = new Date(new Date().getFullYear() + 1, 0, 1, 00, 00);

const endTime = endDate.getTime();

function countdown() {
  let currentDate = new Date();

  let currentTime = currentDate.getTime();

  let remaimingTime = endTime - currentTime;

  let oneMin = 60 * 1000;
  let oneHr = 60 * oneMin;
  let oneDay = 24 * oneHr;

  let daysLeft = Math.floor(remaimingTime / oneDay);
  let hrsLeft = Math.floor((remaimingTime % oneDay) / oneHr);
  let minsLeft = Math.floor((remaimingTime % oneHr) / oneMin);
  let secsLeft = Math.floor((remaimingTime % oneMin) / 1000);

  let newYear = new Date().getFullYear() + 1;

  days.innerHTML = daysLeft;
  hours.innerHTML = hrsLeft;
  mins.innerHTML = minsLeft;
  secs.innerHTML = secsLeft;
  year.innerHTML = newYear;
}

setInterval(countdown, 1000);
