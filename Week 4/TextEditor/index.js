const textContainer = document.getElementById("text");
const saveBtn = document.getElementById("save");
const textInput = document.getElementById("textInput");
let newData;
let newWord;
let changeWord;

const changeWordInput = document.getElementById("changeWord");
const newWordInput = document.getElementById("newWord");
const editBtn = document.getElementById("edit");
const clearBtn = document.getElementById("clear");

saveBtn.addEventListener("click", saveData);
editBtn.addEventListener("click", editData);
clearBtn.addEventListener("click", clearAll);

textInput.addEventListener("input", handleChange);
changeWordInput.addEventListener("input", handleChangeWord);
newWordInput.addEventListener("input", handleNewWord);

function handleChange(event) {
  newData = event.target.value;
}

function handleNewWord(event) {
  newWord = event.target.value;
}

function handleChangeWord(event) {
  changeWord = event.target.value;
}

function saveData() {
  textContainer.innerHTML = newData;
}

function editData() {
  let currentData = textContainer.innerHTML;
  let editedText = currentData;
  const newText = editedText.replaceAll(`${changeWord}`, `${newWord}`);

  textContainer.innerHTML = newText;
}

function clearAll() {
  textContainer.innerHTML = "";
}
