const numberList = document.getElementById("number-list");
const container = document.getElementById("number-squares");

for (i = 1; i <= 10; i++) {
  const listChild = document.createElement("li");
  listChild.textContent = "Number = " + i;
  numberList.appendChild(listChild);

  const square = document.createElement("div");
  square.classList.add("square");
  square.textContent = i;
  container.appendChild(square);
}
