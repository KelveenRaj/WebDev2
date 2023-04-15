// challenge 1
// Print out todays day by using getDay and switch case

let day;
let text;

switch (new Date("2022-03-27").getDay()) {
  case 0:
  case 6:
    text = "Its the weekend";
    break;
  case 1:
  case 2:
  case 3:
    text = "Looking forward to the weekend";
    break;
  case 4:
    text = "closer to weekend";
    break;
  case 5:
    text = "one night till weekend";
    break;
}

//if its a friday, print "one night till weekend"
//if its a thursday, print "closer to weekend"

console.log(text);
