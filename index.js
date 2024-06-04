let counter = document.getElementById("count-el");
let textEl = document.getElementById("text-el");
let innerCounter = 0;
let textToUpdate = "Previous counts - ";
textEl.innerHTML = textToUpdate;

function increment() {
  innerCounter++;
  console.log("Incrementing ", innerCounter);
  counter.innerText = innerCounter;
}

function save() {
  console.log("Before Save ", innerCounter);
  updateText();
}

function updateText() {
  textToUpdate += innerCounter + ", ";
  console.log(textToUpdate);
  textEl.innerText = textToUpdate;
  resetCounter();
}

function resetCounter() {
  innerCounter = 0;
  counter.innerHTML = innerCounter;
}
