const dayContainer = document.getElementById("day");
const textContainer = document.getElementById("text");

let todaysDate;

function message() {
  switch (new Date().getDay()) {
    case 0:
      textContainer.innerHTML = "An apple a day keeps the doctor away";
      break;
    case 1:
      textContainer.innerHTML = "Time is as valuable as gold";
      break;
    case 2:
      textContainer.innerHTML = "Dont give up";
      break;
    case 3:
      textContainer.innerHTML = "Today is a great day";
      break;
    case 4:
      textContainer.innerHTML = "Sugar is bad for health";
      break;
    case 5:
      textContainer.innerHTML = "Keep and balanced diet";
      break;
    case 6:
      textContainer.innerHTML = "End of the week";
      break;
  }
}
setInterval(message, 10);
