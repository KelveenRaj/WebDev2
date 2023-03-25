const days = document.getElementById("day");

const hours = document.getElementById("hour");

const mins = document.getElementById("minute");

const secs = document.getElementById("second");

const endDate = new Date(new Date().getFullYear() + 1, 0, 1, 00, 00);

const endTime = endDate.getTime();

function countdown() {
  let todayDate = new Date();
  let todayTime = todayDate.getTime();
  let remainingTime = endTime - todayTime;
  let oneMin = 60 * 1000;
  let oneHr = 60 * oneMin;
  let oneDay = 24 * oneHr;

  let daysLeft = Math.floor(remainingTime / oneDay);
  let hrsLeft = Math.floor((remainingTime % oneDay) / oneHr);
  let minsLeft = Math.floor((remainingTime % oneHr) / oneMin);
  let secsLeft = Math.floor((remainingTime % oneMin) / 1000);
  
  days.innerHTML = daysLeft
  hours.innerHTML = hrsLeft
  mins.innerHTML = minsLeft
  secs.innerHTML = secsLeft
}
setInterval(countdown, 1000);

// https://codingartistweb.com/2021/12/new-year-countdown-html-css-javascript/
